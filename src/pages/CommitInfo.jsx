import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const CommitInfo = () => {
  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        Back to home
      </Link>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Commit full description</h5>
        </div>
      </div>
    </Fragment>
  )
}
