import { useContext } from 'react'
import Loader from '../../layout/Loader'
import UserItems from '../../users/UserItems'
import ContributorsContext from '../../../context/Contributor_Context/ContributorsContext'

function CommonContributorsData () {
    const {users2, users3,loading} = useContext(ContributorsContext)

    if(!loading){
        return ( 
            <div className='mt-4'>
            {users2.length && users3.length && (<h2 className="card-title mb-0">
                Common Contributors :
              </h2>)}
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 '>
            {users2.map(user => {
                return users3.map(user2 => {
                    if (user.login === user2.login) {
                       return <UserItems key={user.id} user={user} />
                    }
                });
             })}
            </div>
            </div>
            
         )
    } else{
        return <Loader />
    }
}

export default CommonContributorsData
