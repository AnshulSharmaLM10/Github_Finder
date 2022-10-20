import { useContext } from 'react'
import { useState } from 'react'
import GithubContext from '../../context/GitHub_Context/GithubContext'
import AlertContext from '../../context/Alert/AlertContext'

function UserSearch () {
    const [text, setText] = useState('')

    const {users, searchUsers, clearUsers} = useContext(GithubContext)
    const {setAlert}  = useContext(AlertContext)

    const handleChange = (e) => {
        setText(e.target.value)
        console.log(text)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text==='')
        {
            setAlert('Please enter the username and press GO', 'error')
        }else {
            //Todo UserSearch
            searchUsers(text)
            setText('')
        }
    }
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mg-8 gap-8">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input className="w-full pr-40 bg-grey-200 input input-bordered xl:input-lg lg:input-lg md:input-md text-white" placeholder="Search" value={text} onChange={handleChange}/>
                            <button className="absolute top-0 right-0 rounded-l-none w-36 btn xl:btn-lg lg:btn-lg md:btn-md">Go</button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length >0 && (
                <div>
                    <button onClick={clearUsers} type="submit" className="btn btn-ghost btn-lg">Clear</button>
                 </div>)}
            
        </div>
    )
}

export default UserSearch