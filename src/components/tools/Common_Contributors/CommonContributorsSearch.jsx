import { useState } from 'react'
import { useContext } from 'react'
import AlertContext from '../../../context/Alert/AlertContext'
import ContributorsContext from '../../../context/Contributor_Context/ContributorsContext'
import { getContributors } from '../../../context/Contributor_Context/ContributorsActions'

function CommonContributorsSearch () {
    const [text, setText] = useState('')
    const [text2, setText2] = useState('')
    const {users2, users3, dispatch } = useContext(ContributorsContext)
    const {setAlert}  = useContext(AlertContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(text==='' || text2 === '')
        {
            setAlert('Please enter the both the URLs and press Search', 'error')
        }else {
            //Todo UserSearch
            const newText = text.substring(19);
            const ownerRepoName = newText.toString().split("/")
            const newText2 = text2.substring(19);
            const ownerRepoName2 = newText2.toString().split("/")
            dispatch({type: 'Set_Loading'})
            const users2 = await getContributors(ownerRepoName[0],ownerRepoName[1])
            const users3 = await getContributors(ownerRepoName2[0],ownerRepoName2[1])
            dispatch({type: 'Get_Contributors2', payload: users2})
            dispatch({type: 'Get_Contributors3', payload: users3})
        }
    }


    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mg-8 gap-8">
            <div>
                {(users2.length === 0 && users3.length === 0) && (
                    <div className="mb-4">
                        <p className="text-2xl font-bold mb-8">Common Contributors</p>
                        <p className="text-lg">Paste 2 project links to find common contributors</p>
                        <p>For Ex - https://github.com/AnshulSharmaLM10/Github_Finder</p>
                    </div>)
                }
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-none mb-2 gap-4">
                            <input className="w-full pr-40 bg-grey-200 input input-bordered xl:input-lg lg:input-lg md:input-md" placeholder="Paste 1st link here" value={text} onChange={(e) => setText(e.target.value)} />
                            <input className="w-full pr-40 bg-grey-200 input input-bordered xl:input-lg lg:input-lg md:input-md" placeholder="Paste 2nd link here" value={text2} onChange={(e) => setText2(e.target.value)}/>
                        </div>
                        <button className="w-full btn xl:btn-lg lg:btn-lg md:btn-md">Search</button>
                    </div>
                </form>
           </div>
           {(users2.length > 0) && (
            <div>
                <button onClick={() =>  {
                    setText('')
                    setText2('')
                    dispatch({type: 'CLEAR_USERS2'})}
                } type="submit" className="btn btn-ghost xl:btn-lg lg:btn-lg md:btn-md">Clear</button>
             </div>)}
        </div>
    )
}

export default CommonContributorsSearch