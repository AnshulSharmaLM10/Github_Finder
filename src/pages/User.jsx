import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa"
import { useContext } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import {  useNavigate } from "react-router-dom"
import RepoList from "../components/repo/RepoList"
import Loader from "../components/layout/Loader"
import GithubContext from "../context/GitHub_Context/GithubContext"
import { getUserAndRepos } from "../context/GitHub_Context/GithubActions.jsx"

function User () {
    const {repos, user, loading, dispatch} = useContext(GithubContext)
    const navigate = useNavigate();

    const params = useParams()

    useEffect( () => {
        dispatch({type: 'Set_Loading'})

        const getUserData = async () => {
            const userData = await getUserAndRepos(params.login)
            dispatch({type: 'Get_User_And_Repos', payload: userData})
        }

        getUserData()
    }, [dispatch, params.login])

    const {
        name,
        type,
        avatar_url,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    } = user

    if(loading) {
        return <Loader />
    } 

    return (
        <>
            <div className="w-full mx-auto lg:w-10/12">
                <div className="mb-4">
                    <button className="btn btn-ghost" onClick={() => navigate(-1)}>Go back</button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                    <div className="custom-card-image mb-6 md:mb-0">
                        <div className="rounded-lg shadow-xl card image-full">
                            <figure>
                                <img src={avatar_url} alt=''></img>
                            </figure>
                            <div className="card-body justify-end">
                                <h2 className="card-title mb-0">
                                    {name}
                                </h2>
                                <p>{login}</p>                            
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="mb-6">
                            <h1 className="text-3xl card-title">
                                {name}
                                <div className="ml-2 mr-1 badge badge-success">
                                    {type}
                                </div>
                                {hireable && (
                                    <div className="mx-1 badge badge-info">
                                        hireable
                                    </div>
                                )}
                            </h1>
                            { bio !== null && <p>{bio}</p>}
                            <div className="mt-4 card-actions">
                                    <a href={html_url} target='_blank' rel='noreferrer' className="btn -btn-outline">Vist GitHub Profile</a>
                            </div>                         
                        </div>

                        <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                            {blog && (
                                <div className="stat">
                                    <div>
                                        <div className="stat-title text-md">Website</div>
                                        <div className="text-lg stat-value">
                                            <a href={`https://${blog}`} target='_blank' rel='noreferrer' >{blog}</a>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {twitter_username && (
                                <div className="stat">
                                    <div>
                                        <div className="stat-title text-md">Twitter</div>
                                        <div className="text-lg stat-value">
                                            <a href={`https://twitter.com/${twitter_username}`} target='_blank' rel='noreferrer' >{twitter_username}</a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
                    <div className="stat">  
                        <div className="stat-figure text-secondary">
                            <FaUsers className="text-3xl md:text-5xl " />           
                        </div>
                        <div className="stat-title pr-5">
                            Followers
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            {followers}
                        </div>
                    </div>

                    <div className="stat">  
                        <div className="stat-figure text-secondary">
                            <FaUserFriends className="text-3xl md:text-5xl " />           
                        </div>
                        <div className="stat-title pr-5">
                            Following
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            {following}
                        </div>
                    </div>

                    <div className="stat">  
                        <div className="stat-figure text-secondary">
                            <FaCodepen className="text-3xl md:text-5xl " />           
                        </div>
                        <div className="stat-title pr-5">
                            Public Repos
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            {public_repos}
                        </div>
                    </div>

                    <div className="stat">  
                        <div className="stat-figure text-secondary">
                            <FaStore className="text-3xl md:text-5xl " />           
                        </div>
                        <div className="stat-title pr-5">
                            Public Gists
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            {public_gists}
                        </div>
                    </div>
                </div>

                <RepoList repos={repos} />

            </div>
        </>
    )
}

export default User