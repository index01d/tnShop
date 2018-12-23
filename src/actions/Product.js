import { CONTENTFUL, ENTRY } from '~/src/middleware/API';

export const getProduct = (id) => ({
  [CONTENTFUL]: {
    method: ENTRY,
    id,
    types: [
      'PRODUCT_REQUEST',
      'PRODUCT_SUCCESS',
      'PRODUCT_FAILURE'
    ]
  }
});