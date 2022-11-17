import ContributorsData from "./ContributorData";
import ContributorsSearch from "./ContributorsSearch"
import { ContributorsProvider } from '../../../context/Contributor_Context/ContributorsContext'
import RepoData from "./RepoData";

function ProjectContributos () {

    return (
        <ContributorsProvider>
        <div>
            <ContributorsSearch />
            <RepoData />
            <ContributorsData />
        </div>
        </ContributorsProvider>
    )
}

export default ProjectContributos
