import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, setItem } from '../Redux/Action'
import AddItemForm from './AddItemForm'
import axios from 'axios'

const ListItem = () => {

  const [editItem, setEditItem] = useState(null)
  const Data = useSelector((store) => { return store.items })
  const dispatch = useDispatch()

  useEffect(() => {
    const featchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/item")
        console.log(res.data)
        dispatch(setItem(res.data))
      } catch (error) {
        console.log("Featch Data Error: ", error)
      }
    }
    featchData()
  }, [dispatch])

  const handleEdit = (item) => {
    setEditItem(item)
  }

  const handelRemove = async (id) => {
    await axios.delete(`http://localhost:5000/item/${id}`)
    dispatch(removeItem(id))
  }

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Data.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td className='d-flex gap-3'>
                  <button className='btn btn-success' onClick={() => handleEdit(item)}>Edit</button>
                  <button className='btn btn-danger' onClick={() => handelRemove(item.id)}>Remove</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      {
        editItem && (
          <AddItemForm itemData={editItem} onClose={() => setEditItem(null)} />
        )
      }

    </div>
  )
}

export default ListItem
