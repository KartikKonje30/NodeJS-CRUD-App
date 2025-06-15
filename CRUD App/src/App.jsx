import NavBar from "./components/NavBar"
import TableList from "./components/TableList"
import ModalForm from "./components/ModalForm"
import { useState } from "react"


function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');

  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalMode(mode)
  }

  const handleSubmit = () => {
    if(modalMode === "add"){
      console.log("Model mode ADD");
    }
    else{
      console.log("Modal mode EDIT");
    }
  }

  return (
    <>
      <div className="font-medium text-[5vw] text-slate-500 dark:text-slate-200">
        <NavBar onOpen={() => handleOpen('add') } />
        <TableList handleOpen={handleOpen} />
        <ModalForm 
        isOpen={isOpen} 
        mode={modalMode}
        OnSubmit={handleSubmit}
        onClose={() => setIsOpen(false)} />
      </div>
    </>
  )
}

export default App
