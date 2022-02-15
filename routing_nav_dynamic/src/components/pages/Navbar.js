import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container'>
        <a class='navbar-brand' href='#'>
          Capgemini
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>

        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav mr-auto'>
            <li class='nav-item active'>

              <Link class='nav-link' exact to='/'>
                Home
              </Link>

            </li>

            <li class='nav-item'>

              <Link class='nav-link' exact to='/about'>
                About
              </Link>

            </li>

            <li class='nav-item'>

              <Link class='nav-link' exact to='/contact'>
                Contact
              </Link>

            </li>

            {/* newly added */}
            <Link className='btn btn-outline-light' exact to='/user/add'>
              Add User
            </Link>

          </ul>

          <form class='form-inline my-2 my-lg-0'>

            <input
              class='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />

            <button
              class='btn btn-outline-warning my-2 my-sm-0 text-white'
              type='submit'
            >
              Search
            </button>
            
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
