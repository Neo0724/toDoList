import React from 'react'
import checkImg from './Images/check.png'
import delImg from './Images/remove.png'
import editImg from './Images/edit.png'

export default function ToDoList({ setToDo, toDo, setWords, word, setEdit }) {
  function handleDel() {
    setToDo(prev => {
			console.log(prev)
			prev = prev.filter(prev => prev.val !== toDo.val)
			return prev
		})
  }

	function handleEditBtn() {
		setWords({'words': toDo.val, 'key': toDo.key})
    setEdit(true)

	}


  return (
    <div className="listContainer">
        <div className='list'>{toDo.val}</div>
				<button className="editBtn" onClick={handleEditBtn}><img src={editImg} alt="editImg" className="editImg" /></button>
        <button className='doneBtn'><img src={checkImg} alt="checkImg" className="checkImg" /></button>
        <button className='delBtn' onClick={handleDel}><img className="delImg" src={delImg} alt="delImage" /></button>
    </div>
  )
}
