var React = require('react'); // works because we installed react using npm install
var ReactDOM = require('react-dom') // works because we installed react-dom using npm install

require('./css/index.css'); // lets us use this css file's styles for our component

import {Router, Route, browserHistory, Link} from 'react-router';

// Module requires for each component
var TodoItem = require('./todoitem'); // require works because we're using webpack
var AddItem = require('./addItem');

// Create a component to handle the routing (feels like a 'main' component)
var App = React.createClass({
  render: function(){
    return(
      <Router history={browserHistory}>
        <Route path={'/'} component={TodoComponent}></Route>
      </Router>
    );
  }
});

// Create ToDomponent
var TodoComponent = React.createClass({ // pass in an object to the createClass method which sets up the component

  getInitialState: function(){ // method that initializes the state of the component
    return { // returns an object that contains properties and values
      todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers']
    }
  },

  // render method is required
  // it returns html code to be inserted into the document where the component is used
  render: function(){ // render method

    let localTodos = this.state.todos; // make a copy of the todos from the state
    localTodos = localTodos.map(function(item, index){

      return(
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );

    }.bind(this));

    return(
      // write html code below
      // all code must be contained in a single parent element

      <div id="todo-list">
        <h1>React To-Do App</h1>
        <AddItem onAdd={this.onAdd}/>
        <ul>
          {localTodos}
        </ul>
      </div>
    );
  }, // end of render function

  // Custom functions
  onDelete: function(item){ // want to delete item
    var updatedTodos = this.state.todos.filter(function(val, index){
      return val !== item; // if return true, keep value. if return false, throw out value
                           // if the val that we're looking at is not equal to the item that we want to delete, then keep it
    });

    this.setState({
      todos: updatedTodos // replacing old todos with updatedTodos in the ToDomponent component
    });
  },

  onAdd: function(item){
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);

    this.setState({
      todos: updatedTodos
    });
  }

});

// put TodoComponent into index.html page
// looks for the element with an id of todo-wrapper and puts the component inside that element
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
