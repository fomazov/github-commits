import React, { useReducer } from 'react'
import axios from 'axios'
import { GithubContext } from './githubContext'
import { githubReducer } from './githubReducer'
import { GET_COMMITS, GET_COMMIT, SET_LOADING } from '../types'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const withCreds = (url) => {
  return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export const GithubState = ({ children }) => {
  const initialState = {
    info: {},
    commits: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const getCommit = async (ref) => {
    setLoading()

    const response = await axios.get(
      withCreds(
        `https://api.github.com/repos/fomazov/github-commits/commits/${ref}?`,
      ),
    )

    dispatch({
      type: GET_COMMIT,
      payload: response.data,
    })
  }

  const getCommits = async () => {
    setLoading()

    const response = await axios.get(
      withCreds('https://api.github.com/repos/fomazov/github-commits/commits?'),
    )

    dispatch({
      type: GET_COMMITS,
      payload: response.data,
    })
  }

  const setLoading = () => dispatch({ type: SET_LOADING })

  const { info, commits, loading } = state

  return (
    <GithubContext.Provider
      value={{
        setLoading,
        getCommit,
        getCommits,
        info,
        commits,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
