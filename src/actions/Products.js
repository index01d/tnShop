import { CONTENTFUL, ENTRIES } from '~/src/middleware/API';

export const getProducts = () => ({
  [CONTENTFUL]: {
    method: ENTRIES,
    types: [
      'PRODUCTS_REQUEST',
      'PRODUCTS_SUCCESS',
      'PRODUCTS_FAILURE'
    ]
  }
});