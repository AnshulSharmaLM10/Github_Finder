import { useContext } from 'react'
import Loader from '../layout/Loader'
import UserItems from './UserItems'
import GithubContext from '../../context/GitHub_Context/GithubContext.js'

function UserData () {
    const {users, loading} = useContext(GithubContext)
    
    if(!loading){
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 '>
              {users.map((user) => (
                <UserItems key={user.id} user={user} />
              ))}
            </div>
        )
    } else{
        return <Loader />
    }
}

export default UserData

