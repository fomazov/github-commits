import React, { useContext, useEffect, Fragment } from 'react'
import { Commit } from '../components/Commit'

import { GithubContext } from '../context/github/githubContext'

export const Home = () => {
  const { loading, getCommits, commits } = useContext(GithubContext)

  useEffect(() => {
    getCommits()
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        commits.map((commit) => (
          <div className="mb-3" key={commit.sha}>
            <Commit commit={commit} />
          </div>
        ))
      )}
    </Fragment>
  )
}
