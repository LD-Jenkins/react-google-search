(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{30:function(e,t,n){e.exports=n(61)},54:function(e,t,n){},55:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(26),c=n.n(l),o=n(27),i=n(1),s=n(11);function u(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function m(e){var t=e.fluid,n=e.justifyContent,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":""," ").concat(n," mt-4")},a)}function f(e){var t=e.size,n=e.children;return r.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},n)}var d=n(8),v=n.n(d),h=n(14),E=n(12),p=n.n(E),b={getBooks:function(){return p.a.get("/api/books")},deleteBook:function(e){return p.a.delete("/api/books/"+e)},saveBook:function(e){return p.a.post("/api/books",e)},searchBooks:function(){var e=Object(h.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/proxy/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var g=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){b.getBooks().then((function(e){l(e.data)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(u,{fluid:!0},n.length?n.map((function(e){return r.a.createElement("div",{className:"row m-4 p-2 border border-dark",key:e._id},r.a.createElement("div",{className:"row justify-content-between mb-3"},r.a.createElement(f,{size:"4"},r.a.createElement("div",null,e.title),r.a.createElement("div",{style:{fontSize:".75rem"}},"\xa0by\xa0",e.authors.length?e.authors.map((function(e,t,n){return n.length-1===t?e:"".concat(e,", ")})):"(No Authors Listed)")),r.a.createElement(f,{size:"3"},r.a.createElement("span",null,r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{type:"button",className:"btn btn-info"},"View"))),r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return t=e._id,void b.deleteBook(t).then((function(e){console.log(e),b.getBooks().then((function(e){l(e.data)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}));var t}},"Delete"))),r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:e.image,style:{maxWidth:"200px",maxHeight:"325px"},alt:"Volume cover for ".concat(e.title)})),r.a.createElement("div",{className:"col align-self-center"},e.description?e.description:"No description provided.")))})):"You haven't saved any books yet!")};var k=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-light"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Search & Save"),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/"},"Search Books")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/saved"},"See Saved Books"))))))},N=n(29);n(54);var y=function(e){return r.a.createElement("span",null,r.a.createElement("button",Object.assign({className:"btn btn-success"},e,{tabIndex:"0",style:{float:"right"}}),"SAVE"))};n(55);function j(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function x(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}function w(e){return r.a.createElement("input",Object.assign({className:"form-control"},e))}function I(e){return r.a.createElement("button",Object.assign({type:"button",className:"btn btn-secondary",style:{float:"right"}},e),e.children)}var O=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),o=Object(s.a)(c,2),i=o[0],d=o[1],E=function(){var e=Object(h.a)(v.a.mark((function e(t){var a,r,c,o,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.parentNode.parentNode.firstChild.firstChild.innerText,r=n.find((function(e){return e.volumeInfo.title===a})),c={title:r.volumeInfo.title,authors:r.volumeInfo.authors?r.volumeInfo.authors:[],description:r.volumeInfo.description?r.volumeInfo.description:"",image:r.volumeInfo.imageLinks.thumbnail,link:r.volumeInfo.infoLink},e.next=6,b.saveBook(c);case 6:"OK"===e.sent.statusText&&(o=Object(N.a)(n),i=o.findIndex((function(e){return e.volumeInfo.title===c.title})),o[i].wasClicked=!0,l(o));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(u,{fluid:!0},r.a.createElement(m,{justifyContent:"justify-content-center"},r.a.createElement(f,{size:"md-6"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement(w,{name:"title",placeholder:"Title (required)",onChange:function(e){return t=e.target.value,void d(t);var t}}),r.a.createElement(I,{disabled:!i.length,onClick:function(e){return e.preventDefault(),void b.searchBooks(i).then((function(e){l(e.data.items)})).catch((function(e){return console.log(e)}))}},"Search Title")))),r.a.createElement(m,null,r.a.createElement(f,{size:"xs-6 xs-12"},n.length?r.a.createElement(j,null,n.map((function(e){return r.a.createElement(x,{key:e.id},r.a.createElement("a",{href:e.volumeInfo.infoLink},r.a.createElement("strong",null,e.volumeInfo.title?e.volumeInfo.title:"")),r.a.createElement("span",null,"\xa0by\xa0",e.volumeInfo.authors?e.volumeInfo.authors.map((function(e,t,n){return n.length-1===t?e:"".concat(e,", ")})):"(No Authors Listed)"),r.a.createElement(y,{onClick:function(e){return E(e)},disabled:!!e.wasClicked}))}))):r.a.createElement("h3",{style:{textAlign:"center"}},"Searching a book title will display results here!"))))};var B=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:["/","/books"]},r.a.createElement(O,null)),r.a.createElement(i.a,null,r.a.createElement(g,null)))))};c.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.8c828c5c.chunk.js.map