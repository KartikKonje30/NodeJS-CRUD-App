import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function TableList({ handleOpen }) {

  const [tableData, setTableSet] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async() => {
      try{ 
        const response = await axios.get('http://localhost:3000/api/clients');
        setTableSet(response.data);

      }catch(error){
        console.log('Error Occured:', error);
      }
    };

    fetchData();

  },[]);

  // let clients = [
  //   {
  //     id: 1,
  //     name: "Nikhil Bagwe",
  //     email: "nikhil@gmail.com",
  //     job: "Developer",
  //     rate: "350",
  //     isactive: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Sumedh Shejwal",
  //     email: "sumedh@gmail.com",
  //     job: "Frontend",
  //     rate: "120",
  //     isactive: true,
  //   },
  //   {
  //     id: 3,
  //     name: "Yashraj Kotian",
  //     email: "yashraj@gmail.com",
  //     job: "Fullstack",
  //     rate: "500",
  //     isactive: false,
  //   },
  // ];

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
            {tableData.map((client) => {
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
                      onClick={() => handleOpen("edit")}
                      className="btn btn-secondary w-28 flex gap-2"
                    >
                      Update
                      <FaEdit className="w-4 h-4" />
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-outline btn-error w-28 flex gap-2">
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
