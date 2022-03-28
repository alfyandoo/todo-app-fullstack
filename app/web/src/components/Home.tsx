import { useState, useEffect } from 'react';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [getAll, setGetAll] = useState(true);

    useEffect(() => {
        getAllData();
    }, [getAll]);

    const getAllData = async () => {
        try {
            const response = await fetch('http://localhost:3200/api/todos-get');
            const data = await response.json();
            setTodos(data);
            setGetAll(false);

            return data;
        } catch (error) {
            throw new Error(`Error: ${error}`);
        }
    }

    const getCompletedTrue = async () => {
        try {
            const response = await fetch("http://localhost:3200/api/todos-get-completed-true");
            const data = await response.json();
            setTodos(data);
            setGetAll(false);

            return data;
        } catch (error) {
            throw new Error(`Error: ${error}`);
        }
    }

    const getCompletedFalse = async () => {
        try {
            const response = await fetch("http://localhost:3200/api/todos-get-completed-false");
            const data = await response.json();
            setTodos(data);
            setGetAll(false);

            return data;
        } catch (error) {
            throw new Error(`Error: ${error}`);
        }
    }

    return (
        <div>
            <h1 className="text-center font-extrabold">My Todo List</h1>

            <div className="grid grid-cols-3">
                <button onClick={getAllData} className="h-16 text-base cursor-pointer my-3 m-4 bg-blue-500 hover:bg-slate-700 hover:text-yellow-300 hover:text-xl text-white font-bold rounded-2xl border-0">All</button>
                <button onClick={getCompletedTrue} className="h-16 text-base cursor-pointer my-3 m-4 bg-blue-500 hover:bg-slate-700 hover:text-yellow-300 hover:text-xl text-white font-bold rounded-2xl border-0">Completed</button>
                <button onClick={getCompletedFalse} className="h-16 text-base cursor-pointer my-3 m-4 bg-blue-500 hover:bg-slate-700 hover:text-yellow-300 hover:text-xl text-white font-bold rounded-2xl border-0">Not Yet</button>
            </div>

            <ul id="todo-list" className="m-8c py-5 mx-4 bg-green-50 rounded-2xl">
                {todos.map((todo: any, i: any) => (
                    <li key={i} className={`my-6 py-9 px-6 mr-9 text-3xl font-semibold list-none hover:bg-slate-300 rounded-2xl ${todo.completed ? "line-through bg-orange-300 rounded-xl" : ""}`}>
                        <div className="text-slate-700">{todo.activity}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;