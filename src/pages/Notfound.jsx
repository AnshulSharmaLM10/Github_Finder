import { FaHome } from 'react-icons/fa'
import { Link } from "react-router-dom"

function Notfound () {
    return (
        <div>
        <h2 className="text-6xl mb-4">Invalid URL</h2>  
        <Link to='/' className="btn btn-secondary">
            <FaHome className='mr-2' />
            Back To Home
        </Link>

        </div>
    )
}

export default Notfound