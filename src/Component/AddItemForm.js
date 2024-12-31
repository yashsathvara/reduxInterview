import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, editItem } from '../Redux/Action';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddItemForm = ({ itemData = null, onClose }) => {
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (itemData) {
      setFormData({
        id: itemData.id,
        firstName: itemData.firstName,
        lastName: itemData.lastName,
        email: itemData.email,
      })
    }
  }, [itemData])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (itemData) {
        const res = await axios.put(`http://localhost:5000/item/${itemData.id}`, formData)
        dispatch(editItem(res.data))
        if (onClose) return onClose();
      }
      else {
        const res = await axios.post("http://localhost:5000/item", formData)
        dispatch(addItem(res.data))
        navigate("/")
      }
    } catch (error) {
      console.log("Item Error: ", error)
    }
  };

  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      <form className="w-50 border p-4 rounded-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputID" className="form-label">
            ID
          </label>
          <input
            type="tel"
            className="form-control"
            id="exampleInputID"
            value={formData.id}
            onChange={(e) =>
              setFormData((prevData) => ({ ...prevData, id: e.target.value }))
            }
            disabled={itemData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputFirstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputFirstName"
            value={formData.firstName}
            onChange={(e) =>
              setFormData((prevData) => ({ ...prevData, firstName: e.target.value }))
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputLastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputLastName"
            value={formData.lastName}
            onChange={(e) =>
              setFormData((prevData) => ({ ...prevData, lastName: e.target.value }))
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formData.email}
            onChange={(e) =>
              setFormData((prevData) => ({ ...prevData, email: e.target.value }))
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
