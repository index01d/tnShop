const INITIAL_STATE = {
  entries: [],
  isError: false,
  isFetching: false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PRODUCTS_REQUEST':
      return Object.assign({}, INITIAL_STATE, { isFetching: true });

    case 'PRODUCTS_SUCCESS':
      return Object.assign({}, INITIAL_STATE, { entries: action.items });

    case 'PRODUCTS_FAILURE':
      return Object.assign({}, INITIAL_STATE, { isError: true, error: action.error });

    default:
      return state;
  }
}