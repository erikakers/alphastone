/**
 * @jsx React.DOM
 */

var App.Views.MyComponent = React.createClass({

	render: function() {
		return (
			<p>Awesome Code</p>
		);
	}

});

React.renderComponent( <MyComponent />, document.getElementById('container'));
