const booksSummary = document.getElementById('booksSummary') as HTMLHeadingElement;
const booksList = document.getElementById('booksList') as HTMLUListElement;

export interface Book {
  title: string;
  author: string;
  read: boolean;
}

export function renderBooks(books: Book[]) {
  booksSummary.innerHTML = `There are ${books.length} books in your list`;
  booksList.innerHTML = books.reduce(
    (html, { title, author, read }, index) =>
      html +
      `
        <li>
          <input type="checkbox" data-index="${index}" value="true" ${read ? 'checked' : ''}>
          <span class="${read ? 'crossed' : ''}">${title}, ${author}</span>
          <button data-index="${index}">Remove</button>
        </li>
      `,
    '',
  ) as string;
}
