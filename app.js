const React = require('react');
const ReactDom = require('react-dom');
const App = React.createClass({
  render: function() {
    return <h1>Hello from React!</h1>;
  }
});

module.exports = {
    render: function (el) {
        ReactDom.render(<App/>, el);
    }
};
