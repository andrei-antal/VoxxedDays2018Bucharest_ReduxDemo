export const ADD_BOOKS = '[Book] Add books';
export const REMOVE_BOOKS = '[Book] Remove books';
export const READ_BOOKS = '[Book] Read books';

class Action {
  constructor(public payload) {}
}

export class AddBooks extends Action {
  type = ADD_BOOKS;
}

export class RemoveBooks extends Action {
  type = REMOVE_BOOKS;
}

export class ReadBooks extends Action {
  type = READ_BOOKS;
}
