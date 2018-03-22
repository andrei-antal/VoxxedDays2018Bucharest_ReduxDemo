import { ADD_BOOKS, REMOVE_BOOKS, READ_BOOKS } from './actions';

const initialBooksState = {
  data: [{ title: '1984', author: 'George Oreell', read: false }],
};

export function reducer(
  state = initialBooksState,
  action: { type: string; payload: any },
) {
  switch (action.type) {
    case ADD_BOOKS: {
      const book = action.payload;
      const data = [...state.data, book];
      return {
        ...state,
        data,
      };
    }
    case REMOVE_BOOKS: {
      const index = +action.payload;
      const data = [...state.data.slice(0, index), ...state.data.slice(index + 1)];
      return {
        ...state,
        data,
      };
    }
    case READ_BOOKS: {
      const index = +action.payload;
      const book = state.data[index];
      const data = [
        ...state.data.slice(0, index),
        { ...book, read: !book.read },
        ...state.data.slice(index + 1),
      ];
      return {
        ...state,
        data,
      };
    }
  }
  return state;
}
