import React, { useEffect, useState } from 'react';
import TodoForm from '../LEEN/LEEN';
import TodoList from '../List/List';
import { v4 as uuidv4 } from 'uuid';
import './todo.scss';

function ToDo(props) {

  const [list, setList] = useState([]);

  const addItem = (item) => {
    item._id = uuidv4();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem);
      setList(newList);
    }

  };

  const deleteItem = id => {
    let localList = list.filter(i => i._id !== id);
    setList(localList);
  };



  // useEffect(() => {
  //   let list = [
  //     { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A', date:'06/28/2021'},
  //     { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A', date:'06/28/2021' },
  //     { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B', date:'06/28/2021' },
  //     { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C', date:'06/28/2021' },
  //     { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B', date:'06/28/2021' },
  //   ];

  //   setList(list);
  // }, []);

  useEffect(() => {
    let todoCount = list.filter(item => !item.complete).length;
    document.title = `To Do List: ${todoCount}`;
  });

  return (
    <>

      <h3>
        There are {list.filter(item => !item.complete).length} Items To Complete
      </h3>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleDelete={deleteItem}
            handleComplete={toggleComplete}
          />
        </div>
      </section>
    </>
  );
}

export default ToDo;