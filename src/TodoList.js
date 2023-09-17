import React from "react";

export default class TodoList extends React.Component {
  state = {
    items: ["ciao", "oaic"],
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
  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((todo) => (
            <li>{todo}</li>
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
