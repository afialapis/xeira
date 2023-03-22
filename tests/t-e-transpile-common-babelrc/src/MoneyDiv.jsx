const React = require('react')
const PropTypes = require('prop-types')
const {getMoney}= require('./getMoney.cjs')

class MoneyDiv extends React.Component {
  static propTypes = {
    collections: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const { collections } = this.props;

    return ( 
      <div id="money-div">
        {getMoney(collections)}
      </div>
    )
  }
}

module.exports= {
  MoneyDiv
}