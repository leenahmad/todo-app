import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';

import { v4 as uuid } from 'uuid';
import List from './list';
import Form from './form';
import Header from '../Header';
import {Navbar, Alignment } from "@blueprintjs/core";
const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <Header/>
      <Navbar >
        <Navbar.Group align={Alignment.CENTER}>
      <header >
        <h2>To Do List: {incomplete} items pending</h2>
      </header>
      </Navbar.Group>
      </Navbar>
    
      <Form handleSubmit={handleSubmit} handleChange={handleChange}  />
      <List toggleComplete={toggleComplete} list={list} deleteItem={deleteItem} setList={setList}/>
     
    </>
  );
};

export default ToDo;