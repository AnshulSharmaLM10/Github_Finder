import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react';
import Proptypes from 'prop-types'
import ThemeUI from './ThemeUI'
import { FaBars } from 'react-icons/fa'

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

function Navbar({title }) {
    const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

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
                    {windowSize.innerWidth <= 600 && (
                        <div>
                            <ThemeUI />
                            <div className="dropdown dropdown-end">
                                <div tabindex="0" class="btn gap-1 normal-case btn-ghost">
                                    <span>Menu</span> 
                                    <FaBars className='w-5 h-5' />  
                                </div>
                                <div tabIndex={0} className="menu dropdown-content">
                                    <div className="btn rounded-none"><Link to='/' >Home</Link></div>
                                    <div className="btn rounded-none"><Link to='/Tools' >Tools</Link></div>
                                    <div className="btn rounded-none"><Link to='/About' >About</Link></div>
                                </div>
                            </div>
                        </div>
                    )}
                    {windowSize.innerWidth > 600 && (<div className="flex items-stretch">
                    <Link to='/' className='btn'>Home</Link>
                    <Link to='/Tools' className='btn'>Tools</Link>
                    <Link to='/About' className='btn'>About</Link>
                    <ThemeUI />
                    </div>)}
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

