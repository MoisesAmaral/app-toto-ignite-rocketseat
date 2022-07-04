import React, {useState} from "react";


function Form(props){

    const [name, setName] = useState('');

    function handleChange(e){
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
      }    

    return (
        <form onSubmit={handleSubmit}className="App-section-input-newTask">
          <input
            type="text"
            id="new-todo-input"          
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
          />
          <button type="submit" className="App-button">
            Add
          </button>
      </form>
    )
}

export default Form;