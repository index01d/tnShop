import { connect } from 'react-redux';

import Product from './Product';

const mapStateToProps = (state) => ({
  entry: state.product.entry
});

export default connect(mapStateToProps)(Product);