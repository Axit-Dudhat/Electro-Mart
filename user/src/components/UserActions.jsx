import React from 'react'
import '../styles/UserActions.css'
import { Link } from 'react-router-dom'

const UserActions = () => {
  
  return (
    <div className="user-actions">
      <Link to='/AddTocart'>
        <button className="action-button">
          <img 
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-24/tmsQ6mxQCy.svg" 
            alt="Cart" 
            className="action-icon"
            />
        </button>
      </Link>
    </div>
  )
}

export default UserActions
