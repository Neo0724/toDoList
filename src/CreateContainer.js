import React from 'react'
import {v4 as uuidv4} from 'uuid';
import addImg from './Images/add.png'
import checkImg from './Images/check.png'

export default function CreateContainer({ setToDo, toDo, setWord, word, edit, setEdit}) {
  function handleAddBtn() {
    if (word.words.length >= 1) {
      setToDo(prev => {
        return ([
          ...prev,
          {'key': uuidv4(), 'val': word.words, 'done': false}
        ])
      })
    }

    setWord({'uuid': '', 'words': ''})
  }

  function handleChange(e) {
    e.preventDefault()
    setWord(prev => {
      return ({
        ...prev,
        'words': e.target.value
      })
    })
  }

  function handleEditBtn() {
    setToDo(prev => {
      let newToDo = prev.map(prev => {
        if (prev.key === word.key) {
          prev.val = word.words
          return prev
        } else {
          return prev
        }
      })

      return newToDo

      
    })

    setEdit(false)
  }

  return (
    <div className='create'>
      <input type="text" className="inputToDo" 
        typeof = 'text'
        placeholder = 'Insert the item here ...'
        onChange = {(e) => handleChange(e)}
        value = {word.words}
      />
      {edit? <button className="editDoneBtn" onClick={handleEditBtn}>Done</button> : <button className="addBtn" onClick={handleAddBtn}>+</button>}

    </div>
  )
}
