import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  //useState with blank array
  const [users, setUser] = useState([])

  //to perform some action on a page
  //we will call loadUser on page load with 0
  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    //await will wait untill the request is not completed
    const result = await axios.get('http://localhost:3001/users')
    //set the data to Home page
    setUser(result.data)
    // setUser(result.data.reverse()); // gives reverse order display list means ended newly will displayed at first
  }

  //delete user method
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`)
    //call load Users
    loadUsers()
  }

  return (
    <div className='container'>
      <div className='py-4'>

        <h1> Home Page </h1>

        <table class='table border shadow'>
          <thead class='thead-dark'>
            <tr>
              <th scope='col'>S_No.</th>
              <th scope='col'>Name</th>
              <th scope='col'>User Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope='row'>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>

                  <Link
                    class='btn btn-primary mr-2'
                    to={`/user/view/${user.id}`}
                  >
                    View
                  </Link>

                  <Link
                    class='btn btn-outline-primary mr-2'
                    exact
                    to={`/user/edit/${user.id}`}
                  >
                    Edit
                  </Link>

                  <Link
                    class='btn btn-danger mr-2'
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Home

// import React from 'react'
// import { Redirect } from 'react-router-dom'

// const Home=(props)=>
// {

//     return (
//         <div className="container">
//             <div className="py-4">
//                 <h1>Home Page</h1>

//                     {/* <Redirect to="/success" /> */}

//             </div>
//         </div>
//     )
// }

// export default Home;
