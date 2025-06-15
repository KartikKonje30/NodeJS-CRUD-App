import React from "react";

function ModalForm({ isOpen, onClose, mode, OnSubmit }) {
  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-semibold text-lg py-4 ">
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h3>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            
            <input></input>

            <button
              onClick={onClose}
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
