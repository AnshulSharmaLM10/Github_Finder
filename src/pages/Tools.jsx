import { Link } from 'react-router-dom'

function Tools () {
    return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1'>
            <Link className="w-full h-14 lg:h-20 xl:h-24 md:h-16 text-xl font-semibold justify-center items-center rounded-md card bg-base-200 hover:bg-base-300" to="/ProjectContributors">
                 Project Contributors
            </Link>
            <Link className="w-full h-14 lg:h-20 xl:h-24 md:h-16 text-xl font-semibold justify-center items-center rounded-md card bg-base-200 hover:bg-base-300" to="/CommonContributors">
                 Common Contributors
            </Link>
        </div>
    )
}

export default Tools
