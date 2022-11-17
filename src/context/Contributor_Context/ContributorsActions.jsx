import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_GITTHUB_API_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITTHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}` }
})

export const getContributors = async(owner,reponame) => {
    const response = await github.get(`/repos/${owner}/${reponame}/contributors`)

    return response.data
}

export const getRepoData = async(owner,reponame) => {
    const response = await github.get(`/repos/${owner}/${reponame}`)

    return response.data
}