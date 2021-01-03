import {
  ListItem,
  List,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ImageIcon,
  Button,
  Modal,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Todo.css";
import db from "./friebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) { 
    const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const UpadteTodo = () => {
    db.collection('todos').doc(props.todo.id).set({
todo:input
    },{ merge:true })

   setOpen(false);
    
   
    //update the todo with  the new  input text
  };
 

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>open</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          ></input>
          <Button onClick={UpadteTodo}>Upadate Todo</Button>
        </div>
      </Modal>
      <List className="Todo">
        <ListItemAvatar></ListItemAvatar>
        <ListItem>
          <ListItemText
            primary={props.todo.todo}
            secondary="Dummy daedline✔🎂✔"
          />
        </ListItem>
        <Button onClick={(e) => setOpen(true)}>Edit</Button>
        <DeleteForeverIcon
          onClick={(event) => {
            db.collection("todos").doc(props.todo.id).delete();
          }}
        ></DeleteForeverIcon>
      </List>
    </>
  );
}

export default Todo;
