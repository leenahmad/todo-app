import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';

class ToDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    this.setState({ list: [...this.state.list, item]});
  };

  toggleComplete = id => {

    let item = this.state.list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list = this.state.list.map(listItem => listItem._id === item._id ? item : listItem);
      this.setState({list});
    }

  };



  render() {
    return (
      <>
        <header>
          <h2>
          There are {this.state.list.filter(item => !item.complete).length} Items To Complete
          </h2>
        </header>

        <section className="todo">

          <div>
            <TodoForm handleSubmit={this.addItem} />
          </div>

          <div>
            <TodoList
              list={this.state.list}
              handleComplete={this.toggleComplete}
            />
          </div>
        </section>
      </>
    );
  }
}

export default ToDo;