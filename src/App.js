import CreateContainer from './CreateContainer';
import React from 'react';
import { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  const [toDoArr, setToDo] = useState([])
  const [word, setWord] = useState({'words': '', 'key': ''})
  const [edit, setEdit] = useState(false)
  return (
    <div className="wholeThing">
        <CreateContainer setToDo={setToDo} toDo={toDoArr} word={word} setWord={setWord} edit={edit} setEdit={setEdit}/>
        {toDoArr.length >= 1? toDoArr.map(toDo => <ToDoList setToDo={setToDo} toDo={toDo} setWords={setWord} word={word} setEdit={setEdit}/>) : null}
    </div>
  )
}

export default App;
