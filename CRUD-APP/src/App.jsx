import NavBar from "./components/NavBar";
import TableList from "./components/TableList";
import ModalForm from "./components/ModalForm";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [newClientData, setNewClientData] = useState(null);
  const [tableData, setTableData] = useState([]);

  const handleOpen = (mode, client) => {
    setNewClientData(client);
    setIsOpen(true);
    setModalMode(mode);
  };

    const fetchClients = async() => {
    try{ 
      const response = await axios.get('http://localhost:3000/api/clients');
      setTableData(response.data.sort((a,b) => a.id - b.id));
    }catch(error){
      console.error(error.message);
    }
  };

    useEffect(() => {

    fetchClients();

  },[tableData]);

  const handleSubmit = async (clientData) => {
    if (modalMode === "add") {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/clients",
          clientData
        );
        console.log("New Client Added!", response.data);
        setTableData((prevData) => [...prevData, response.data])
      } catch (error) {
        console.error("Error adding new client:", error);
      }
    } 
    else {
      console.log('Updating client data:', newClientData.id);
      try {
        const response = await axios.put(
          `http://localhost:3000/api/clients/${newClientData.id}`,
          clientData
        );
        console.log("Client Updated!", response.data);
        setTableData((prevData) => prevData.map((client) => (client.id === newClientData.id ? response.data : client)))
      } catch (error) {
        console.error("Error updating new client:", error);
      }
    }
  };

  return (
    <>
      <div className="font-medium text-[5vw] text-slate-500 dark:text-slate-200">
        <NavBar onOpen={() => handleOpen("add")} onSearch={setSearchTerm} />
        <TableList 
        setTableData={setTableData}
        tableData={tableData}
        handleOpen={handleOpen} searchTerm={searchTerm} />
        <ModalForm
          isOpen={isOpen}
          mode={modalMode}
          OnSubmit={handleSubmit}
          newClientData={newClientData}
          onClose={() => setIsOpen(!isOpen)}
        />
      </div>
    </>
  );
}

export default App;
