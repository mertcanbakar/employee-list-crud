/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react"
import DialogForm from "./Components/Modals/DialogForm"
import List from "./Components/List"

function App() {
  const [modal, setModal] = useState(false)
  const [informations, setInformations] = useState([])
  const [buttonType, setButtonType] = useState('new')
  const [id, setId] = useState('')
  const [loading, setLoading] = useState(false)

  const handleNewModal = () => {
    setModal(true)
  }

  return (
    <div className="container">
     <div className="list-area">
     <div className="page-info">
        <h2>Çalışan Listesi CRUD</h2>
      </div>
      <div className="header">
        <input className="search" type="text" placeholder="Çalışanları ara..." />
        <button className="new-add" onClick={handleNewModal}>Yeni Çalışan</button>
      </div>
      {modal && <DialogForm id={id} setId={setId} buttonType={buttonType} setButtonType={setButtonType} data={informations} setData={setInformations} modal={modal} setModal={setModal} loading={setLoading}/>}
      <div className="list">
        <List setId={setId} setButtonType={setButtonType} data={informations} setData={setInformations} modal={setModal} loading={loading}/>
      </div>
     </div>
    </div>
  )
}

export default App
