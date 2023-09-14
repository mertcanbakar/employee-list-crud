/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

const DialogForm = ({data, setData, setModal, id, setId, buttonType, setButtonType, loading}) => {
  const [newData, setNewData] = useState({})
 
  const [informations, setInformations] = useState({
    id: `${data?.length >= 10 ? '0': '00'}${data.length + 1}`,
    name: null,
    surname: null,
    mail: null,
    number: null,
    gender: null,
    job: null
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    setInformations({
      id: null,
      name: null,
      surname: null,
      mail: null,
      number: null,
      gender: null,
      job: null
    })
    setData([informations, ...data])
    setModal(false)
    loading(true)
    setTimeout(() => {
      loading(false);
    }, 300);
  }
  const handleEdit = () => {
   const updatedData = data.map(item => {
     if (item.id === id) {
       return {
         ...item,
         name: informations.name || item.name,
         surname: informations.surname || item.surname,
         mail: informations.mail || item.mail,
         number: informations.number || item.number,
         gender: informations.gender || item.gender,
         job: informations.job || item.job
       };
     }
     return item;
   });
   setData(updatedData);
   setModal(false);
   setId('')
   setButtonType('new')
   loading(true)
   setTimeout(() => {
    loading(false);
  }, 300);
  }
  const handleDelete = () => {
   const updatedData = data.filter(item => item.id !== id);
   setData(updatedData);
   setModal(false);
   setId('')
   setButtonType('new')
   loading(true)
   setTimeout(() => {
    loading(false);
  }, 300);
  }
  const handleCancel = () => {
    setId('')
    setButtonType('new')
    setNewData({})
    setInformations({
      id: null,
      name: null,
      surname: null,
      mail: null,
      number: null,
      gender: null,
      job: null
    })
    setModal(false)
  }
  useEffect(() => {
    if(id !== ''){
      setNewData(data.find((data) => data.id === id))
    }
  }, [])
  return (
    <div className="modal-container">
      <div className="modal">
      <div className="modal-header">{buttonType === 'new' ? 'Yeni Çalışan Ekle' : buttonType === 'edit' ? 'Çalışanı Düzenle' : 'Çalışanı Sil'}</div>
      <div className="form-area">
          <form action="submit" onSubmit={handleSubmit}>
          <span className="fullname">
          <input className="form-input" type="text" value={informations.name !== null ? informations.name : newData?.name} onChange={e => setInformations({...informations, name: e.target.value})} placeholder="Ad"/>
          <input className="form-input" type="text" value={informations.surname !== null ? informations.surname : newData?.surname} onChange={e => setInformations({...informations, surname: e.target.value})} placeholder="Soyad"/>
          </span>
         <span className="others">
            <input className="form-input" type="text" value={informations.job !== null ? informations.job : newData?.job } onChange={e => setInformations({...informations, job: e.target.value})} placeholder="Meslek"/>
            <input className="form-input" type="mail" value={informations.mail !== null ? informations.mail : newData?.mail} onChange={e => setInformations({...informations, mail: e.target.value})} placeholder="example@mail.com"/>
            <input className="form-input" type="number" value={informations.number !== null ? informations.number : newData?.number} onChange={e => setInformations({...informations, number: e.target.value})} placeholder="5*********"/>
            <select className="select-box" name="gender" id="gender" value={informations.gender !== null ? informations.gender : newData?.gender} onChange={e => setInformations({...informations, gender: e.target.value})} >
              <option value="">Cinsiyet seçiniz.</option>
              <option value="Erkek">Erkek</option>
              <option value="Kadın">Kadın</option>
            </select>
         </span>
          <div className="actions">
            {buttonType === 'new' ? (
              <button className="submit" type="submit">Kaydet</button>
            ) : buttonType === 'edit' ? (
              <button onClick={handleEdit} className="upgrade">Güncelle</button>
            ) : (
              <button onClick={handleDelete} className="delete">Sil</button>
            )}
            <button onClick={handleCancel} className="cancel">İptal</button>
          </div>
          </form>
      </div>
      </div>
    </div>
  )
}

export default DialogForm