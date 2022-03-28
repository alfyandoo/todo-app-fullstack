import { useState } from "react";
import swal from 'sweetalert';

const Header = ({ handleRefresh }) => {
    const [activity, setActivity] = useState("");

    const addActivity = async () => {
        if (activity.trim() === "") {
            swal("Activity cannot be empty!", "", "error");
            return;
        }

        const newActivity = { activity, completed: false };

        try {
            const response = await fetch("http://localhost:3200/api/todos-post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newActivity),
            });
            handleRefresh(true);
            setActivity("");
            swal(`Activity ${activity} added!`, "", "success");

            return response;
        } catch (error) {
            throw new Error(`Error: ${error}`);
        }
    };

    return (
        <div className="bg-green-200 rounded-2xl">
            <h1 className="text-center font-extrabold">Add Todo List</h1>
            <div className="grid grid-cols-3">
                <input
                    className="col-span-2 my-3 m-4 text-2xl border-0 border-green-500 rounded-2xl px-6 text-gray-700 placeholder-gray-500 focus:shadow-outline hover:placeholder-gray-400"
                    type="text"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    placeholder="type your activity.."
                />
                <button className="h-16 col-span-1 my-3 m-4 text-base cursor-pointer bg-blue-500 hover:bg-slate-700 hover:text-yellow-300 hover:text-xl text-white font-bold rounded-2xl border-0" onClick={addActivity}>Add</button>
            </div>
        </div>
    );
};

export default Header;