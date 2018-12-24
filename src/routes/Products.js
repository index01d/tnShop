import Products from 'components/views/Products';

import { mainPath } from 'helpers/routes';
import { getProducts } from 'actions/Products';

export default {
  name: 'Products',
  path: mainPath(),
  component: Products,
  prepareData: (store) => store.dispatch(getProducts()),
  exact: true,
  strict: true
};