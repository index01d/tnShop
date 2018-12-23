import About from '~/src/components/views/About';

import { aboutPath } from '~/src/helpers/routes';

export default {
  name: 'About',
  path: aboutPath(),
  component: About,
  exact: true,
  strict: true
};