import CommonContributorsData from "./CommonContributorsData"
import CommonContributorsSearch from "./CommonContributorsSearch"
import { ContributorsProvider } from '../../../context/Contributor_Context/ContributorsContext'
import { ContributorsProvider2 } from '../../../context/Contributor_Context/ContributorsContext2'

function CommonContributors () {
    return (
        <ContributorsProvider>
        <ContributorsProvider2>
        <div>
            <CommonContributorsSearch />
            {}
            <CommonContributorsData />
        </div>
        </ContributorsProvider2>
        </ContributorsProvider>
    )
}

export default CommonContributors