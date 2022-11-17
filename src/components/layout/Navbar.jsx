import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Proptypes from 'prop-types'
import ThemeUI from './ThemeUI'

function Navbar({title }) {
    return (
        <div className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
            <div className='container mx-auto'>
                <div className='flex-none px-2 mx-2'>
                    <FaGithub className='inline pr-2 text-4xl'/>
                    <Link to='/' className='text-lg font-bold align-midle'>
                        {title}
                    </Link>
                </div>
                <div className="flex justify-end flex-1 px-2">
                    <div className="flex items-stretch">
                    <Link to='/' className='btn'>Home</Link>
                    <Link to='/Tools' className='btn'>Tools</Link>
                    <Link to='/About' className='btn'>About</Link>
                    <ThemeUI />
                    </div>
                </div>
            </div>
        </div>        
    )
}

Navbar.defaultProps = {
    title: 'GitHub Finder',
}

Navbar.prototype = {
    title: Proptypes.string,
}

export default Navbar

