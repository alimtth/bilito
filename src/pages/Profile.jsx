import Link from 'next/link'
import Button from '../components/Ui/Button'

function ProfilePage() {
  return (
    <div>
      <h1>Profile page</h1>
      <Link href='/'>
        <Button variant="fill" size="xl">
          FirstPage
        </Button>
      </Link>
    </div>
  )
}

export default ProfilePage
