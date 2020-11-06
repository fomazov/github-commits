import React, { useContext, useEffect, Fragment } from 'react'
import { GithubContext } from '../context/github/githubContext'
import { Link } from 'react-router-dom'

export const CommitInfo = ({ match }) => {
  const { getCommit, loading, info } = useContext(GithubContext)
  const urlRef = match.params.ref

  useEffect(() => {
    getCommit(urlRef)
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <p className="text-center">Loading...</p>
  }
  console.log(info)
  const { sha, commit } = info
  const { message } = commit

  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        Back to home
      </Link>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{message}</h5>
          <pre>{sha}</pre>
        </div>
      </div>
    </Fragment>
  )
}
