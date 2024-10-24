import React from 'react'

const TodoApp = () => {
  return (
    <>
      <div className='todo-header'>
        <h2>Hello My name is <strong>ShamShad Ahamad</strong></h2>
      </div>
      <div className="todo-app">
        <h1 className='todo'>Lets UnderStand Todo App</h1>
    
        <img width='50%' height='50%' src="../src/todo-img.png" alt="todo-image" />
      </div>
      <div className="information">
        <h1>Todo App-</h1>
        <hr />
        <p>The above Image show the basic information of todo App where a routine can be followed by the user and add their routines in the given todo App</p>
        <h2>Understand the use-</h2>
        <hr />
        <p>It is very easiar format of todo App, and you can easily understand the working of this app only you click the link <a href="#">todo  App</a> and you can reach automaticaly mentioned page and you can add your informations. </p>
        <p>Informations contains : </p>
        <p>your work : <input type="text" placeholder='work' /></p>
        <p>Your Due Date : <input type="date" /></p>
        <p>after entering informations you have to click the add button , immediatly your work and due date is add in your flock list.</p>
        <p>After complete your work you can remove your due work from the flock
          just Click on the remove button,
          and also you can add new works in your flock. Enjoy it Sharply with me</p>
      </div>

      <p style={{color : "green" , textAlign:"center"}}>Created by <u><strong style={{color :"brown"}}> &copy;Shamshad Ahamad </strong></u></p>




    </>

  )
}

export default TodoApp
