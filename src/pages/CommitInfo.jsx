import React, { useContext, useEffect, Fragment } from 'react'
import { GithubContext } from '../context/github/githubContext'
import { Link } from 'react-router-dom'

export const CommitInfo = ({ match }) => {
  const { getCommit, loading, info } = useContext(GithubContext)
  const urlSha = match.params.sha

  useEffect(() => {
    getCommit(urlSha)
    // eslint-disable-next-line
  }, [])

  const { sha, html_url, url } = info

  if (loading) {
    return <p className="text-center">Loading...</p>
  }
  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        Back to list
      </Link>
      <div class="card" style={{ width: '18rem' }}>
        <div class="card-body">
          <h5 class="card-title">{sha}</h5>
          <p class="card-text">(commmit sha)</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a href={url} target="_blank">
              Click here to view full response
            </a>
          </li>
        </ul>
        <div class="card-body">
          <a href={html_url} class="card-link" target="_blank">
            Click here to view commit via GitHub UI
          </a>
        </div>
      </div>
    </Fragment>
  )
}
