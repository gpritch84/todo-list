import React from 'react';

const Task = (props) => {
    const { task, setList, index, list } = props;
    const onClick = () => {
        setList(() => list.filter(task => list.indexOf(task) !== index));
    }
    const onChange = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list])
        }

    return (
        <div className="container bg-info">
            <h4>{task.name}</h4>
            <div className="container">
                <label htmlFor="checkbox">Completed</label>
                <input onChange={onChange} type="checkbox" checked={task.isComplete}></input>
                <button onClick={onClick} className="btn btn-sm btn-danger">Delete</button>
            </div>
        </div>
    )
}

export default Task;