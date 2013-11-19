/**
 * @jsx React.DOM
 */

var MyComponent = React.createClass({

	render: function() {
		return (
			<p>Howdy World</p>
		);
	}

});

React.renderComponent( <MyComponent />, document.getElementById('content'));
