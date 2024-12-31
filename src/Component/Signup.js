import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      const res = await axios.post(`http://localhost:5000/userData`, user);
      setUser(res.data)
      navigate("signin")

    } catch (error) {
      console.log("Signup Error: ", error)
    }
  }

  return (
    <div className='w-100 d-flex justify-content-center align-items-center'>
      <form
        className="w-50 border p-4 rounded-4"
        style={{ marginTop: "150px" }}
        onSubmit={handleSubmit}
      >
        <h3 className='mb-3 text-center'>Sign Up Page</h3>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputConfirmPassword1" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputConfirmPassword1"
            onChange={(e) => setUser((prev) => ({ ...prev, confirmPassword: e.target.value }))}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
