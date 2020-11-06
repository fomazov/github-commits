import { GET_COMMITS, GET_COMMIT, SET_LOADING } from '../types'

const handlers = {
  [GET_COMMITS]: (state, { payload }) => ({
    ...state,
    commits: payload,
    loading: false,
  }),
  [GET_COMMIT]: (state, { payload }) => ({
    ...state,
    info: payload,
    loading: false,
  }),
  [SET_LOADING]: (state) => ({ ...state, loading: true }),
  DEFAULT: (state) => state,
}

export const githubReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
