import * as helpers from './helpers';

const booksList = document.getElementById('booksList') as HTMLUListElement;
const bookForm = document.getElementById('bookForm') as HTMLFormElement;

booksList.addEventListener('click', event => {
  const targetElement = event.target as HTMLElement;
  const targetElementName = targetElement.nodeName.toLowerCase();
  // remove book
  if (targetElementName === 'button') {
    console.log(targetElement.getAttribute('data-index'));
  }
  // read book
  if (targetElementName === 'input') {
    console.log(targetElement.getAttribute('data-index'));
  }
});

// add book
bookForm.addEventListener('submit', event => {
  event.preventDefault();
  const bookTitle = (bookForm.elements[0] as HTMLInputElement).value;
  const bookAuthor = (bookForm.elements[1] as HTMLInputElement).value;

  if (bookTitle !== '' && bookAuthor !== '') {
    //add book
    const payload = { title: bookTitle, author: bookAuthor };
    console.log(payload);
    bookForm.reset();
  }
});
