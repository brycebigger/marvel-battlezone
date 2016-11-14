var React = require('react');
var Link = require('react-router').Link;
var Versus = require('./Versus.jsx');
require('../../sass/Battlezone.scss')

function getActiveClass (path) {
	var current = window.location.hash.slice(1);
	return current === path ? 'active' : '';
}

var App = React.createClass({
	render: function () {
		return (
			<div>
				<header className="battlezone-header">
					
				</header>
				<Versus wookie="" className="wookie" />
			</div>
		);
	}
});

module.exports = App;