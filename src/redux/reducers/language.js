import dictionary from '../../assets/lang'
import { SELECT_LANGUAGE } from '../action_const'
import { getCookies, setCookies } from '../../libs/cookies'

const options = { expires: 2 * 365 }

let defaultLocale = getCookies('__lang') || 'en'

let initState = {
    locale: defaultLocale,
    dictionary: dictionary[defaultLocale]
}

const changeLang = (state = initState, action) => {
    switch (action.type) {
        case SELECT_LANGUAGE:
            setCookies('__lang', action.data || defaultLocale, options)
            return Object.assign({}, state, {
                locale: action.data || defaultLocale,
                dictionary: dictionary[action.data || defaultLocale]
            })
        default:
            return state
    }
}

export default changeLang;