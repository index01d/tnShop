import Products from '~/src/components/views/Products';

import { mainPath } from '~/src/helpers/routes';
import { getProducts } from '~/src/actions/Products';

export default {
  name: 'Products',
  path: mainPath(),
  component: Products,
  prepareData: (store) => store.dispatch(getProducts()),
  exact: true,
  strict: true
};