import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert';

const todosList = ({ handleRefresh, refresh}) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getAllData();
    } , [refresh]);

    const getAllData = async () => {
        try {
            const response: any = await fetch('http://localhost:3200/api/todos-get');
            const data: any = await response.json();
            setTodos(data);
            handleRefresh(false);

            return data;
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    const updateActivity = async ({ id, activity, completed }) => {
        try {
            completed = !completed;

            const response = await fetch(`http://localhost:3200/api/todos-update-completed?id=${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    completed: completed,
                }),
            });
            handleRefresh(true);
            
            swal(`Activity ${activity} updated!`, "", "success");

            return response;
        } catch (error) {
            throw new Error(`Error: ${error}`);
        }
    }

    const deleteActivity = async ({ id, activity }) => {
        try {
            const response = await fetch(`http://localhost:3200/api/todos-delete?id=${id}`);
            swal(`Activity ${activity} deleted!`, "", "success");
            
            handleRefresh(true);
            return response;
        } catch (error) {
            throw new Error(`Error: ${error}`);
        }
    }

    return (
        <ul className="m-8c py-1 mx-4 bg-green-50 rounded-2xl">
            {todos.map((todo: any, i) => (
                <li key={i} className={`flex my-6 py-3 mb-6 px-6 mx-2 mr-10 text-2xl cursor-pointer list-none hover:bg-slate-300 rounded-xl ${todo.completed ? "line-through bg-orange-300 rounded-xl" : ""}`}>
                    <h3 onClick={() => updateActivity(todo)} className="grow text-slate-700">{todo.activity}</h3>
                    <FontAwesomeIcon icon={faEdit} color="white" className="flex-none align-middle bg-blue-700 p-8 mx-6 text-white rounded-xl text-center hover:bg-slate-700 hover:text-yellow-300" onClick={() => navigate(`/edit-name/${todo.id}`)} />
                    <FontAwesomeIcon icon={faTrash} color="white" className="flex-none align-middle bg-red-700 p-8 text-white rounded-xl text-center hover:bg-slate-700 hover:text-yellow-300" onClick={() => deleteActivity(todo)} />
                </li>
            ))}
        </ul>
    );
}

export default todosList;