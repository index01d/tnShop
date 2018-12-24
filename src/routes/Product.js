import Product from 'components/views/Product';

import { productPath } from 'helpers/routes';
import { getProduct } from 'actions/Product';

export default {
  name: 'Product',
  path: productPath(),
  component: Product,
  prepareData: (store, query, params) => store.dispatch(getProduct(params.productId)),
  exact: true,
  strict: true
};