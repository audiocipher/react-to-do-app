var React = require('react');
require('./css/todoItem.css'); // lets us use this css file's styles for our component

// Create TodoItem component
var TodoItem = React.createClass({
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.handleDelete}> x </span>
        </div>
      </li>
    );
  },

  // Custom fuctions
  handleDelete: function(){
    this.props.onDelete(this.props.item);
  }

});

// export component so that we can use it somewhere else
module.exports = TodoItem;
