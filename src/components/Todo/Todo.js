import React, { useState } from "react";
import {
  addTodo,
  deleteTodo,
  removeTodo,
} from "../../redux/todo/action/todoAction";
import { useDispatch, useSelector } from "react-redux";
import "./Todo.css";

const Todo = () => {
  const [todoItem, setTodoItem] = useState("");
  //console.log(todoItem);
  const allList = useSelector((state) => state.todoReducer.list);
  console.log(allList);
  const dispatch = useDispatch();

  return (
    <div className="container py-5">
      <h5 className="add-todo"> Add New Todo 🖐 </h5>
      <div className="add-item">
        <input
          className="form-control"
          type="text"
          name="name"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button
          className="btn btn-success"
          onClick={() => dispatch(addTodo(todoItem), setTodoItem(""))}
        >
          {" "}
          💃 Add Item
        </button>
      </div>
      <div className="show-items">
        {allList.map((item) => {
          return (
            <div className="each-item" key={item.id}>
              {"     "}
              <p className="item">{item.data}</p>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(deleteTodo(item.id))}
              >
                Delete Item
              </button>
            </div>
          );
        })}
      </div>

      <div className="remove-todo">
        <button
          className="btn btn-info btn-sm"
          onClick={() => dispatch(removeTodo())}
        >
          Remove ALL
        </button>
      </div>
    </div>
  );
};

export default Todo;
