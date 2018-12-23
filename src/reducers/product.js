const INITIAL_STATE = {
  entry: {},
  isError: false,
  isFetching: false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PRODUCT_REQUEST':
      return Object.assign({}, INITIAL_STATE, { isFetching: true });

    case 'PRODUCT_SUCCESS':
      return Object.assign({}, INITIAL_STATE, { entry: action.item });

    case 'PRODUCT_FAILURE':
      return Object.assign({}, INITIAL_STATE, { isError: true, error: action.error });

    default:
      return state;
  }
}