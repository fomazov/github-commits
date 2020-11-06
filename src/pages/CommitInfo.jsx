import React, { useContext, useEffect, Fragment } from 'react'
import { GithubContext } from '../context/github/githubContext'
import { Link } from 'react-router-dom'

export const CommitInfo = ({ match }) => {
  const { getCommit, loading } = useContext(GithubContext)
  const urlSha = match.params.sha

  useEffect(async () => {
    await getCommit(urlSha)
    // eslint-disable-next-line
  }, [])

  const { info } = useContext(GithubContext)
  const {
    sha,
    html_url,
    author: { avatar_url },
    commit: {
      message,
      author: { name },
    },
  } = info

  if (loading) {
    return <p className="text-center">Loading...</p>
  }
  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        Back to list
      </Link>
      <div class="card" style={{ width: '18rem' }}>
        <img class="card-img-top" src={avatar_url} alt="" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{message}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{sha}</li>
        </ul>
        <div class="card-body">
          <a href={html_url} class="card-link">
            Link
          </a>
        </div>
      </div>
    </Fragment>
  )
}
