import { connect } from 'react-redux';

import Products from './Products';

const mapStateToProps = (state) => ({
  entries: state.products.entries
});

export default connect(mapStateToProps)(Products);