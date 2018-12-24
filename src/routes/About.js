import About from 'components/views/About';

import { aboutPath } from 'helpers/routes';

export default {
  name: 'About',
  path: aboutPath(),
  component: About,
  exact: true,
  strict: true
};