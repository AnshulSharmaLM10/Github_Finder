import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Alert from './components/layout/Alert'
import User from './pages/User'
import Home from './pages/Home'
import About from './pages/About'
import Tools from './pages/Tools'
import Notfound from './pages/Notfound'
import CommonContributors from './components/tools/Common_Contributors/CommonContributors'
import ProjectContributors from './components/tools/Project_Contributers/ProjectContributors'
import { ContributorsProvider } from './context/Contributor_Context/ContributorsContext'
import { GithubProvider } from './context/GitHub_Context/GithubContext'
import { AlertProvider } from './context/Alert/AlertContext'

function App() {
  return (
    <GithubProvider>
    <AlertProvider>
    <ContributorsProvider>
    <Router>
        <div className='flex flex-col justify-between h-screen'>
            <Navbar />

            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} /> 
                <Route path='/About' element={<About />} />
                <Route path='/Tools' element={<Tools />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/Notfound' element={<Notfound />} />
                <Route path='/*' element={<Notfound />} />
                <Route path='/ProjectContributors' element={<ProjectContributors />} />
                <Route path='/CommonContributors' element={<CommonContributors />} />
              </Routes>

            </main>

            <Footer />
        </div>
    </Router>
    </ContributorsProvider>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
