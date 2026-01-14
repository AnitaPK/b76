import React, { useEffect, useState } from "react";

const ToDoList = () => {
  const [user, setUser] = useState("Sejal");
  console.log(user, "user");
  const [loggedUser, setLoggedUser] = useState();

  const [newToDo, setNewToDo] = useState();
  const [toDos, setToDos] = useState([]);

  function handleSubmit(e) {
    setLoggedUser(user);
  }

  useEffect(() => {
    setLoggedUser(user);
    // code for remove text from input
  }, []);

  function handleAddNewToDO(e) {
    e.preventDefault();
    setNewToDo(e.target.value);
    setToDos([...toDos, newToDo]);
    console.log(toDos);

    setNewToDo("");
  }

  function handleDelete(index) {
    console.log(toDos, index);
    setToDos(() => toDos.filter((v, i) => i != index));
  }

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setUser(e.target.value)} />
        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
      <h4>Welcome {loggedUser}</h4>
      To Do List <br />
      <input
        type="text"
        //   onChange={(e)=>setNewToDo(e.target.value)}
        name={newToDo}
      />
      <button onClick={()=>handleAddNewToDO()}>Add To Do</button>
      <ul>
        {toDos.map((v, i) => (
          <li keys={i}>
            {v} <button onClick={() => handleDelete(i)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
