import React from "react";

export default class TodoList extends React.Component {
  state = {
    items: [],
    currentTodo: "",
  };

  handleTodo = (event) => {
    this.setState({ currentTodo: event.target.value });
  };
  handleAdd = () => {
    this.setState({ items: [...this.state.items, this.state.currentTodo] });
    this.setState({ currentTodo: "" });
  };
  clearList = () => {
    this.setState({ items: [] });
  };
  handleRemove = (event, index) => {
    let key = index;

    let todoItems = this.state.items;
    let slicedArr = todoItems.splice(key, 1);

    this.setState({ items: todoItems });
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                onClick={(event) => {
                  this.handleRemove(event, index);
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <input
          type="text"
          onChange={this.handleTodo}
          value={this.state.currentTodo}
        />
        <button onClick={this.handleAdd}>ADD</button>
        <button onClick={this.clearList}>CLEAR</button>
      </div>
    );
  }
}

/* Create a TodoList component that renders a ul tag with a li tag for each item contained in the items state variable. 
The items state variable should be an array of strings. The TodoList component should also contain an input tag and a button. 
When the button is clicked, the event handler should add the value of the input tag to the items array. */
