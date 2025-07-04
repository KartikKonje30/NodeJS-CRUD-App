import React, { useEffect, useState } from "react";

function ModalForm({ isOpen, onClose, mode, OnSubmit, newClientData }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [rate, setRate] = useState('');
  const [status, setStatus] = useState(false);

  const handleStatusChange = (e) => {
    setStatus(e.target.value === 'Active');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const clientData = { name, email, job, rate: Number(rate), isactive: status}
      await OnSubmit(clientData)
      onClose();
    }catch(error){
      console.error("Error adding new client:", error)
    }
  }
  
  useEffect(() => {

    if(mode === 'edit' && newClientData){
      setName(newClientData.name);
      setEmail(newClientData.email);
      setJob(newClientData.job);
      setRate(newClientData.rate);
      setStatus(newClientData.status);
    }
    else{
      setName('');
      setEmail('');
      setJob('');
      setRate('');
      setStatus(false);
    }

  },[mode, newClientData]);

  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box" onSubmit={handleSubmit}>
          <h3 className="font-semibold text-lg py-4 ">
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h3>
          <form method="dialog" onSubmit={handleSubmit}>
            {/* if there is a button in form, it will close the modal */}

            <label className="input my-4 w-full input-bordered flex items-center gap-2">
              Name
              <input type="text" className="grow" value={name} onChange={(e) => setName(e.target.value)} />
            </label>

            <label className="input my-4 w-full input-bordered flex items-center gap-2">
              Email
              <input type="text" className="grow" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            
            <label className="input my-4 w-full input-bordered flex items-center gap-2">
              Job
              <input type="text" className="grow" value={job} onChange={(e) => setJob(e.target.value)} />
            </label>

            <div className="my-4 w-full flex justify-between gap-4">
            <label className="input input-bordered flex items-center">
              Rate
              <input type="number" className="grow" value={rate} onChange={(e) => setRate(e.target.value)} />
            </label>
            <select value={status ? "Active" : "Inactive"} onChange={handleStatusChange} className="select select-bordered max-w-xs">
              <option>Active</option>
              <option>Inactive</option>
            </select>
            </div>

            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <button className="btn btn-success">
              {mode === "edit" ? "Save Changes" : "Add Client"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default ModalForm;
