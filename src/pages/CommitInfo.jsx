import React, { useContext, useEffect, Fragment } from 'react'
import { GithubContext } from '../context/github/githubContext'
import { Link } from 'react-router-dom'

export const CommitInfo = ({ match }) => {
  console.log(useContext(GithubContext))
  const { getCommit, loading, info } = useContext(GithubContext)
  const urlSha = match.params.sha

  useEffect(() => {
    getCommit(urlSha)
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <p className="text-center">Loading...</p>
  }
  const {
    sha,
    html_url,
    author: { avatar_url },
    commit,
  } = info
  const {
    author: { name, date },
    message,
  } = commit
  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        Back to list
      </Link>
      <div class="card" style={{ width: '18rem' }}>
        <img class="card-img-top" src={avatar_url} alt={name} />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{message}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{sha}</li>
        </ul>
        <div class="card-body">
          <a href={html_url} class="card-link">
            Sha
          </a>
        </div>
      </div>
    </Fragment>
  )
}
