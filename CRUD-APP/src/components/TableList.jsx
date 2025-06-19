import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function TableList({ handleOpen, searchTerm }) {

  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async() => {
      try{ 
        const response = await axios.get('http://localhost:3000/api/clients');
        setTableData(response.data);

      }catch(error){
        setError(error.message);
      }
    };

    fetchData();

  },[]);

  const filteredData = tableData.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.job.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDelete = async(id) => {
   const confirmDelete = window.confirm("Are you sure you want to delete this client?");
   if(confirmDelete){
    try{
        await axios.delete(`http://localhost:3000/api/clients/${id}`);
        setTableData((prevTableData) => prevTableData.filter((client) => client !== id));
    }catch(error){
      setError(error.message)
    }
   }
  }

  return (
    <>
    {
      error && <div className="alert alert-error">{error}</div>
    }
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((client) => {
              return (
                <tr key={client.id} className="hover:bg-base-300">
                  <th>{client.id}</th>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.job}</td>
                  <td>{client.rate}</td>
                  <td>
                    <button
                      className={` btn btn-rounded rounded-full w-20 ${
                        client.isactive
                          ? `btn-primary`
                          : `btn-outline btn-primary`
                      }`}
                    >
                      {client.isactive ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleOpen("edit", client)}
                      className="btn btn-secondary w-28 flex gap-2"
                    >
                      Update
                      <FaEdit className="w-4 h-4" />
                    </button>
                  </td>
                  <td>
                    <button 
                    onClick={() => handleDelete(client.id)}
                    className="btn btn-outline btn-error w-28 flex gap-2">
                      Delete
                      <MdDelete className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
