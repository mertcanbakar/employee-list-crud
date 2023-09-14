/* eslint-disable react/prop-types */
import {MdDelete, MdEdit} from 'react-icons/md'
import Loader from './Loader'

const List = ({data, setButtonType, setId, modal, loading}) => {
  const handleDelete = (id) => {
    setButtonType('delete')
    setId(id)
    modal(true)
  }
  const handleEdit = (id) =>{
    setButtonType('edit')
    setId(id)
    modal(true)
  }

  return (
    <>
      <table className="table">
    <thead className="table-header">
        <tr>
            <th className="id">ID</th>
            <th className="name">Ad</th>
            <th className="surname">Soyad</th>
            <th className="gender">Cinsiyet</th>
            <th className="job">Meslek</th>
            <th className="mail">Mail</th>
            <th className="phone">Telefon</th>
            <th className="buttons"></th>
        </tr>
    </thead>
    {loading ? <Loader /> : (
      <tbody className="header-list-items">
      {data.map((informations, index) => (
        <tr key={index}>
            <th className="id">{informations.id}</th>
            <th className="name">{informations.name}</th>
            <th className="surname">{informations.surname}</th>
            <th className="gender">{informations.gender}</th>
            <th className="job">{informations.job}</th>
            <th className="mail">{informations.mail}</th>
            <th className="phone">{informations.number}</th>
            <th className="buttons">
              <button onClick={() => handleDelete(informations.id)} className='delete-btn'><MdDelete /></button>
              <button onClick={() => handleEdit(informations.id)} className='edit-btn'><MdEdit/></button>
            </th>
        </tr>
      ))}
      </tbody>
    )}
</table>
</>
  )
}

export default List