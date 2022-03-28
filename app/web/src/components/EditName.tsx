import { useState, useEffect } from 'react';
import swal from 'sweetalert';

const EditName = () => {
    const [editNameValue, setEditNameValue] = useState("");

    useEffect(() => {
        getActivityById();
    }, [params.id]);

    const getActivityById = async () => {
        try {
            const response = await fetch(`http://localhost:3200/api/todos-get-id/${params.id}`);
            const data = await response.json();
            setEditNameValue(data.activity);
            
            return data;
        } catch (error) {
            throw new Error(`Error: ${error}`);
        }
    }

    const editNameActivity = async (id) => {
        try {
            if (editNameValue.trim() === "") {
                swal("Activity cannot be empty!", "", "error");
                return;
            }
            
            // memanggil API untuk menambah data
            const response = await fetch(`http://localhost:3200/api/todos-update-activity?id=${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    activity: editNameValue,
                }),
            });
            swal(`Activity name has been changed to ${editNameValue}`, "", "success");
            
            navigate("/action");
            return response;
        } catch (error) {
            throw new Error(`Error: ${error}`);
        }
    };

    return (
        <div className="bg-green-200 px-10 py-8 rounded-2xl">
            <h1 className="text-center font-extrabold">Edit Name Todo List</h1>
            <div className="grid grid-cols-3">
                <input
                    className="col-span-2 text-2xl my-2 m-4 border-0 border-green-500 rounded-2xl px-6 text-gray-700 placeholder-gray-500 focus:shadow-outline hover:placeholder-gray-400"
                    type="text"
                    value={editNameValue}
                    onChange={(e) => setEditNameValue(e.target.value)}
                    onClick={(e) => e.currentTarget.select()}
                    placeholder="edit your activity.."
                />
                <button className="h-16 col-span-1 my-3 m-4 text-base cursor-pointer bg-blue-500 hover:bg-slate-700 hover:text-yellow-300 hover:text-xl text-white font-bold rounded-2xl border-0" onClick={()=> editNameActivity(params.id)}>Update</button>
            </div>
        </div>
    );
}

export default EditName;