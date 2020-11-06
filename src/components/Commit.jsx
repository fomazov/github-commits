import React from 'react'
import { Link } from 'react-router-dom'

export const Commit = ({ commit }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{commit.commit.message}</h5>
      <pre>
        <a href={commit.html_url} target="_blank">
          {commit.sha}
        </a>
      </pre>
      <Link to={'/commit/' + commit.sha} className="btn btn-primary">
        More...
      </Link>
    </div>
  </div>
)
