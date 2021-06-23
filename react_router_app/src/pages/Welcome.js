import React from 'react'
import { Route } from 'react-router-dom'


const Welcome = () => {
  return (
    <div>
      <h1>
        The Welcome Page
        <Route path="/welcome/user">
          <p>Welcome user</p>
        </Route>

      </h1>
    </div>
  )
}

export default Welcome
