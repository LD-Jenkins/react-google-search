import React, { useState } from "react";
import SaveBtn from "../components/SaveBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function SearchContainer() {

  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');

  const onInputChange = (title) => {
    setSearchTitle(title);
  };

  const searchBooks = (event) => {
    event.preventDefault();
    API.searchBooks(searchTitle)
      .then(res => {
        // console.log(res.data.items);
        setSearchedBooks(res.data.items);
      })
      .catch(err => console.log(err));
  };

  const saveBook = async (event) => {
    event.preventDefault();
    const bookTitle = event.target.parentNode.parentNode.firstChild.firstChild.innerText;
    // console.log(event.target.parentNode);
    const bookToSave = searchedBooks.find(book => book.volumeInfo.title === bookTitle);
    const bookData = {
      title: bookToSave.volumeInfo.title,
      authors: bookToSave.volumeInfo.authors ? bookToSave.volumeInfo.authors : [],
      description: bookToSave.volumeInfo.description ? bookToSave.volumeInfo.description : '',
      image: bookToSave.volumeInfo.imageLinks.thumbnail,
      link: bookToSave.volumeInfo.infoLink,
    }

    const response = await API.saveBook(bookData);

    if (response.statusText === "OK") {
      const tempBooks = [...searchedBooks];
      const bookIdx = tempBooks.findIndex(book => book.volumeInfo.title === bookData.title);
      tempBooks[bookIdx].wasClicked = true;
      setSearchedBooks(tempBooks);
      // console.log(searchedBooks);
    }
  };

  return (
    <Container fluid>
      <Row justifyContent="justify-content-center">
        <Col size="md-6">
          <div className="input-group mb-3">
            <Input
              name="title"
              placeholder="Title (required)"
              onChange={(e) => onInputChange(e.target.value)}
            />
            <FormBtn
              disabled={searchTitle.length ? false : true}
              onClick={(e) => searchBooks(e)}
            >
              Search Title
            </FormBtn>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="xs-6 xs-12">
          {searchedBooks.length ? (
            <List>
              {searchedBooks.map(book => (
                <ListItem key={book.id}>
                  <a href={book.volumeInfo.infoLink}>
                    <strong>
                      {book.volumeInfo.title ? book.volumeInfo.title : ''}
                    </strong>
                  </a>
                  <span>
                    &nbsp;by&nbsp;
                    {book.volumeInfo.authors
                      ? book.volumeInfo.authors.map((author, idx, arr) => (
                          arr.length - 1 === idx
                            ? author
                            : `${author}, `
                          )
                        )
                      : '(No Authors Listed)'}
                  </span>
                  <SaveBtn
                    onClick={(e) => saveBook(e)}
                    disabled={book.wasClicked ? true : false}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3 style={{textAlign: "center"}}>Searching a book title will display results here!</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}


  export default SearchContainer;
