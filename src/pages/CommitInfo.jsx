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

  if (loading) {
    return <p className="text-center">Loading...</p>
  }
  const { sha } = info

  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        Back to list
      </Link>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{sha}</h5>
        </div>
      </div>
    </Fragment>
  )
}
