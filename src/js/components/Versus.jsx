var React = require('react');
var Fighter = require('./Fighter.jsx');

var Versus = React.createClass({
  render: function() {
    return( 
      <div className="versus">
        <Fighter player='1' data=''/>
        <div className="vsText">VS.</div>
        <Fighter player='2' data=''/>
      </div>
    );
  }
});

module.exports = Versus;