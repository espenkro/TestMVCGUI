var CommentBox = React.createClass({
    displayName: 'CommentBox',
    render: function () {
        return (
          React.createElement('div', { className: "commentBox" },
            "Testing button: React.createElement('div', {className: commentBox },"
          )
        );
    }
});
var buttonStyle = {
    margin: '10px 10px 10px 0'
};

var Button = React.createClass({
    render: function () {
        return(
            <button
            className="btn btn-default"
        style={buttonStyle}
    onClick={this.props.handleClick}>{this.props.label}</button>
    );
}
});
//module.exports = Button;
/*
const Button = ({ children, color }) => ({
    type: 'button',
    props: {
        className: 'button button-' + color,
        children: {
            type: 'b',
            props: {
                children: children
            }
        }
    }
});
*/

ReactDOM.render(
  React.createElement(CommentBox, null),
  //React.createElement(Button,null),
  document.getElementById('content')
);