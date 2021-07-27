import React, { useState, useEffect } from "react";
import { Col, Container } from "../components/Grid";
import API from "../utils/API";

function SavedBooksContainer() {

  // const [savedBooks, setSavedBooks] = useState([]);
  // useEffect(() => {
  //   API.getBooks()
  //     .then(res => {
  //       setSavedBooks(res.data);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  // const deleteBtnClicked = (id) => {
  //   API.deleteBook(id)
  //     .then(res => {
  //       console.log(res);
  //       API.getBooks()
  //         .then(res => {
  //           setSavedBooks(res.data);
  //         })
  //         .catch(err => console.log(err));
  //     })
  //     .catch(err => console.log(err));
  // }


  return (
    <div>Working</div>
    // <Container fluid>
    //   {savedBooks.length
    //     ? savedBooks.map(book => (
    //       <div
    //         className="row m-4 p-2 border border-dark"
    //         key={book._id}>
    //         <div
    //           className="row justify-content-between mb-3">
    //           <Col size= "4">
    //             <div>
    //               {book.title}
    //             </div>
    //             <div
    //               style={{fontSize: ".75rem"}}>
    //               &nbsp;by&nbsp;
    //               {book.authors.length
    //                 ? book.authors.map((author, idx, arr) => (
    //                     arr.length - 1 === idx
    //                       ? author
    //                       : `${author}, `
    //                     )
    //                   )
    //                 : '(No Authors Listed)'}
    //             </div>
    //           </Col>
    //           <Col size="3">
    //             <span>
    //               <a
    //                 href={book.link}
    //                 target="_blank"
    //                 rel="noopener noreferrer">
    //                 <button
    //                   type="button"
    //                   className="btn btn-info">
    //                   View
    //                 </button>
    //               </a>
    //             </span>
    //             <button
    //               type="button"
    //               className="btn btn-danger"
    //               onClick={() => deleteBtnClicked(book._id)}>
    //               Delete
    //             </button>
    //           </Col>
    //         </div>
    //         <div
    //           className="row justify-content-between">
    //           <div
    //             className="col">
    //             <img
    //               src={book.image}
    //               style={{ maxWidth: "200px", maxHeight: "325px" }}
    //               alt={`Volume cover for ${book.title}`}>
    //             </img>
    //           </div>
              
    //           <div
    //             className="col align-self-center">
    //             {book.description
    //               ? book.description
    //               : "No description provided."}
    //           </div>
    //         </div>
    //       </div>
    //     )
    //     )
    //     : "You haven't saved any books yet!"
    //   }
    // </Container>
  );
}

export default SavedBooksContainer;
