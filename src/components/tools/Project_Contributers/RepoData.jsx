import ContributorsContext from "../../../context/Contributor_Context/ContributorsContext"
import { FaEye, FaBell, FaStar, FaUtensils } from 'react-icons/fa'
import { useContext } from 'react'

function RepoData () {
    const { users, repo } = useContext(ContributorsContext)

    const {
        name,
        description,
        forks,
        watchers_count,
        stargazers_count,
        subscribers_count,
        created_at,
        updated_at,
        language,
    } = repo

    if(users.length !== 0) {
        return (
            <div className="w-full mx-auto mt-8 pt-4 mb-4 lg:w-14/12 rounded-md card bg-base-300">
               <div className="px-5">
                    <div className="flex">
                        <h1 className="text-xl">Repo Name:</h1>
                        <h1 className="text-xl font-semibold">{name}</h1>
                    </div>
                    <div className="mt-2">
                         <p className="text-lg">{description}</p>
                            {language !== null && (
                            <div className="flex">
                                <p>Language -</p>
                                <p>{language}</p>
                            </div>
                            )}
                    </div>
                    <div className="grid grid-cols-2 mb-3">
                        <p>Created - {created_at}</p>
                        <p>Updated - {updated_at}</p>
                    </div>
                </div>
                <div className="grid grid-cols-4 w-full rounded-lg shadow-md bg-base-200 stats">
                    <div className="stat">  
                        <div className="stat-figure text-secondary">
                            <FaEye className="text-3xl md:text-5xl " />           
                        </div>
                        <div className="stat-title pr-5">
                            Watchers
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            {watchers_count}
                        </div>
                    </div>

                    <div className="stat">  
                        <div className="stat-figure text-secondary">
                            <FaStar className="text-3xl md:text-5xl " />           
                        </div>
                        <div className="stat-title pr-5">
                            Stargazers
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            {stargazers_count}
                        </div>
                    </div>

                    <div className="stat">  
                        <div className="stat-figure text-secondary">
                            <FaBell className="text-3xl md:text-5xl " />           
                        </div>
                        <div className="stat-title pr-5">
                            Subscribers
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            {subscribers_count}
                        </div>
                    </div>

                    <div className="stat">  
                        <div className="stat-figure text-secondary">
                            <FaUtensils className="text-3xl md:text-5xl " />           
                        </div>
                        <div className="stat-title pr-5">
                            Forks
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">
                            {forks}
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default RepoData
