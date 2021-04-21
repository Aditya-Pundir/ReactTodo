import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    addTodo(title, desc);
    setTitle("");
    setDesc("");
  };
  return (
    <div className="container my-3">
      <h3 className="pt-5 my-3">Add a TODO</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="todoTitle" className="form-label">
            TODO Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="todoTitle"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="todoDesc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="todoDesc"
            required
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add TODO
        </button>
      </form>
    </div>
  );
};
