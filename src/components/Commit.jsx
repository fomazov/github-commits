import React from 'react'
import { Link } from 'react-router-dom'

export const Commit = () => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Commit short description</h5>
      <Link to={'/commit/' + 'hash'} className="btn btn-primary">
        Open
      </Link>
    </div>
  </div>
)
