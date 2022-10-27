import spinner from './assets/loading2.svg'

function Loader () {
    return (
        <div className='w-100 mt-20'>
            <img src={spinner} alt='Loading...' className='text-center mx-auto'/>
        </div>
    )
}

export default Loader