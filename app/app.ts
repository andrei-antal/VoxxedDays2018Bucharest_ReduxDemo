import * as helpers from './helpers';
import { Store } from './store/store';
import { reducer } from './store/reducers';
import { ADD_BOOKS, AddBooks, ReadBooks, RemoveBooks } from './store/actions';

const booksList = document.getElementById('booksList') as HTMLUListElement;
const bookForm = document.getElementById('bookForm') as HTMLFormElement;
const unsubscribeBookStore = document.getElementById(
  'unsubscribeBookStore',
) as HTMLButtonElement;

const store = new Store({
  books: reducer,
});

store.subscribe(state => {
  console.log(state);
});

store.subscribe(state => {
  helpers.renderBooks(state.books.data);
});

booksList.addEventListener('click', event => {
  const targetElement = event.target as HTMLElement;
  const targetElementName = targetElement.nodeName.toLowerCase();
  // remove book
  if (targetElementName === 'button') {
    const index = targetElement.getAttribute('data-index');
    store.dispatch(new RemoveBooks(index));
  }
  // read book
  if (targetElementName === 'input') {
    const index = targetElement.getAttribute('data-index');
    store.dispatch(new ReadBooks(index));
  }
});

// add book
bookForm.addEventListener('submit', event => {
  event.preventDefault();
  const bookTitle = (bookForm.elements[0] as HTMLInputElement).value.trim();
  const bookAuthor = (bookForm.elements[1] as HTMLInputElement).value.trim();

  if (bookTitle !== '' && bookAuthor !== '') {
    //add book
    const payload = { title: bookTitle, author: bookAuthor };
    store.dispatch(new AddBooks(payload));
    bookForm.reset();
  }
});
