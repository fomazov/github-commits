import React, { Fragment } from 'react'
import { Search } from '../components/Search'
import { Commit } from '../components/Commit'
export const Home = () => {
  const commits = new Array(15).fill('').map((_, i) => i)

  return (
    <Fragment>
      <Search />
      {commits.map((commit) => {
        return (
          <div className="mb-3" key={commit}>
            <Commit />
          </div>
        )
      })}
    </Fragment>
  )
}
