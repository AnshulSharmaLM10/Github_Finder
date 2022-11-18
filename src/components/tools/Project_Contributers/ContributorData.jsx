import { useContext } from 'react'
import Loader from '../../layout/Loader'
import UserItems from '../../users/UserItems'
import ContributorsContext from '../../../context/Contributor_Context/ContributorsContext'

function ContributorsData () {
    const { repo, users, loading} = useContext(ContributorsContext)
    
    if(!loading){
        return (
            <div>
            {users.length > 0 && (
              <h2 className="card-title mb-0">
            Owner :
          </h2>
             )}
             <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 '>
             {users.map(user => {
              if (user.login === repo.owner.login) {
                  return <UserItems key={user.id} user={user} />
               }
            })}
              </div>
              <div>
              {users.length > 1 && (
                <div>
                <h2 className="card-title mb-0">
                Contributors :
              </h2>
              <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 '>
              {users.map(user => {
                    if (user.login !== repo.owner.login) {
                       return <UserItems key={user.id} user={user} />
                    }
             })}
              </div>
                </div>
              )}
              </div>
            </div>
        )
    } else{
        return <Loader />
    }
}

export default ContributorsData