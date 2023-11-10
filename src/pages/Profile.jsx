import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../components/Ui/Button'

function ProfilePage() {
  return (
    <div>
      <h1>Profile page</h1>
      <Link to={'/'}>
        <Button variant="fill" size="xl">
          FirstPage
        </Button>
      </Link>
    </div>
  )
}

export default ProfilePage
