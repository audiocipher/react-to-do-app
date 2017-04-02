var React = require('react');

require('./css/addItem.css'); // lets us use this css file's styles for our component

var AddItem = React.createClass({

  render: function(){
    return(
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="What do I need to do?" required ref="newItem" />
        <input type="submit" value="Add" id="text-field" />
      </form>
    );
  },

  // Custom functions
  handleSubmit: function(e){
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
    this.refs.newItem.value = '';
  }

});

// export component so that we can use it somewhere else
module.exports = AddItem;
