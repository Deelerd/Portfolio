import { SELECT_LANGUAGE } from '../action_const'

export const selectLang = (lang) => {
  return dispatch => {
    return dispatch({ type: SELECT_LANGUAGE, data: lang })
  }
}