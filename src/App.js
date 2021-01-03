import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo'
import db from './friebase'
import firebase from "firebase";

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setinput] = useState('');
  //when the app lode , we need to listen to the database and fetch new todos as they get added?remove
useEffect(() =>{
//this code here fires when the app.js loads

db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
  // console.log(snapshot.docs.map(doc =>doc.data()))
  //this is used to sync the data from the firebase databse
  setTodos(snapshot.docs.map(doc =>({id:doc.id,todo:doc.data().todo})))
})
},[]);


  const addTodo = (event) => {
    event.preventDefault();
    //this will fire off when we click the button 

db.collection('todos').add({
  todo: input,
  timestamp:firebase.firestore.FieldValue.serverTimestamp()
})


    console.log('IM working')
    setTodos([...todos, input])
    setinput('')//claer up the input after cliking add todo button

  }
  console.log(input)
  return (
    <div className="App">
      <h1>Welcome to the world of My the pro</h1>
      <form>

        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setinput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add ToDo
</Button>

        <ul>
          {todos.map(todo =>(
            <Todo todo={todo}/>
            //just like array 
          ))}

        </ul>
      </form>

    </div>
  );
}

export default App;
