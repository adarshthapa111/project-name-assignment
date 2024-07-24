import { Table } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Hero = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/tasks");
        setTasks(response.data);
      } catch (err) {
        console.log("Thre is an error fetching data!!", err);
      }
    };
    fetchData();
  }, []);

  const handleDeleteOrder = async (id) => {
    // Show confirmation dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this task!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        // Send delete request to the server
        await axios.delete(`http://localhost:8080/delete-task/${id}`);
        // Update state to remove the task from the list
        setTasks(tasks.filter((task) => task.id !== id));
        Swal.fire("Deleted!", "Your task has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting task: ", error);
        Swal.fire("Error!", "Failed to delete task.", "error");
      }
    }
  };

  return (
    <>
      <div className="p-4">
        <h1 className="font-semibold text-sm p-4">List of Tasks</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs text-gray-800 font-semibold uppercase tracking-wider">
                Checkmark
              </th>
              <th className="px-6 py-3 text-left text-xs text-gray-800 font-semibold uppercase tracking-wider">
                Task Title
              </th>
              <th className="px-6 py-3 text-left text-xs text-gray-800 font-semibold uppercase tracking-wider">
                Task Description
              </th>
              <th className="px-6 py-3 text-left text-xs text-gray-800 font-semibold uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tasks.map((entry) => (
              <tr key={entry.id}>
                <td className="flex items-center px-10 py-4">
                  <label>
                    <input type="checkbox" id="myCheckbox" className="p-2" style={{ width: '20px', height: '20px' }} />
                  </label>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm capitalize">
                  {entry.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                  {entry.description}
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-white bg-red-500 p-2 rounded-lg text-sm font-medium"
                    onClick={() => handleDeleteOrder(entry.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Hero;
