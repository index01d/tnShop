import Product from '~/src/components/views/Product';

import { productPath } from '~/src/helpers/routes';
import { getProduct } from '~/src/actions/Product';

export default {
  name: 'Product',
  path: productPath(),
  component: Product,
  prepareData: (store, query, params) => store.dispatch(getProduct(params.productId)),
  exact: true,
  strict: true
};