import UserData from "../components/users/UserData"
import UserSearch from "../components/users/UserSearch"

function Home () {
    return (
        <div>
          <UserSearch />
          <UserData />
        </div>
    )
}

export default Home