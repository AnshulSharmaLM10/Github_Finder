import { useState } from 'react'
import { useContext } from 'react'
import AlertContext from '../../../context/Alert/AlertContext'
import ContributorsContext from '../../../context/Contributor_Context/ContributorsContext'
import { getContributors, getRepoData } from '../../../context/Contributor_Context/ContributorsActions'


function ContributorsSearch () {
    const [text, setText] = useState('')
    const {users, dispatch } = useContext(ContributorsContext)
    const {setAlert}  = useContext(AlertContext)

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(text==='')
        {
            setAlert('Please enter the URL and press Search', 'error')
        }else {
            //Todo UserSearch
            const newText = text.substring(19);
            const ownerRepoName = newText.toString().split("/")
            dispatch({type: 'Set_Loading'})
            const repo = await getRepoData(ownerRepoName[0],ownerRepoName[1])
            const users = await getContributors(ownerRepoName[0],ownerRepoName[1])
            dispatch({type: 'Get_Contributors', payload: users})
            dispatch({type: 'Get_RepoData', payload: repo})
        }
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mg-8 gap-8">
            <div>
                {users.length === 0 && (
                    <div className="mb-4">
                    <p className="text-2xl font-bold mb-8">Project Contributors</p>
                    <p className="text-lg">Paste the link below in the given format</p>
                    <p>For Ex - https://github.com/AnshulSharmaLM10/Github_Finder</p>
                </div>)}
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input className="w-full pr-40 bg-grey-200 input input-bordered xl:input-lg lg:input-lg md:input-md" placeholder="Paste link here" value={text} onChange={handleChange}/>
                            <button className="absolute top-0 right-0 rounded-l-none w-44 btn xl:btn-lg lg:btn-lg md:btn-md">Search</button>
                        </div>
                    </div>
                </form>
           </div>
           {users.length >0 && (
            <div>
                <button onClick={() =>  {
                    setText('')
                    dispatch({type: 'CLEAR_USERS'})}
                } type="submit" className="btn btn-ghost xl:btn-lg lg:btn-lg md:btn-md">Clear</button>
             </div>)}
        </div>
    )
}

export default ContributorsSearch
