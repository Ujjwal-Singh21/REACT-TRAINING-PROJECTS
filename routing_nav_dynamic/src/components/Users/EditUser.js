import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const EditUser = () => {
  let history = useHistory()
  const { id } = useParams()

  const [user, setUser] = useState({
    user: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  })
  
  //destruction for user
  const { name, username, email, phone, website } = user

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  //for form submition
  const onSubmit = async e => {
    e.preventDefault()
    await Axios.put(`http://localhost:3001/users/${id}`, user)
    history.push('/')
  }

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
    //const result=await Axios.get("http://localhost:3001/users/" + id);
    const result = await Axios.get(`http://localhost:3001/users/${id}`)
    setUser(result.data)
  }

  return (
    <div className='container'>
      <div className='w-75 mx-auto shadow p-5'>
        <h2 className='text-center mb-4'>Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className='form-group'>

            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter your Name'
              name='name'
              value={name}
              onChange={e => onInputChange(e)}
            />

          </div>
          <div className='form-group'>

            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter your UserName'
              name='username'
              value={username}
              onChange={e => onInputChange(e)}
            />

          </div>
          <div className='form-group'>

            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter your Email Address'
              name='email'
              value={email}
              onChange={e => onInputChange(e)}
            />

          </div>
          <div className='form-group'>

            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter your Phone No'
              name='phone'
              value={phone}
              onChange={e => onInputChange(e)}
            />

          </div>

          <div className='form-group'>

            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter your Website Name'
              name='website'
              value={website}
              onChange={e => onInputChange(e)}
            />

          </div>

          <button className='btn btn-warning btn-block'> Update User </button>

        </form>

      </div>
    </div>
  )
}
export default EditUser
