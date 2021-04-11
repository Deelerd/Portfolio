import dictionary from '../../assets/lang'
import { SELECT_LANGUAGE } from '../action_const'
import { getCookies, setCookies } from '../../libs/cookies'

const options = { expires: 2 * 365 }

let defaultLocale = getCookies('__lang') || 'th'

let initState = {
    locale: getCookies('__lang') || 'th',
    dictionary: dictionary[defaultLocale]
}

const changeLang = (state = initState, action) => {
    switch (action.type) {
        case SELECT_LANGUAGE:
            setCookies('__lang', action.data, options)
            return Object.assign({}, state, {
                locale: action.data,
                dictionary: dictionary[action.data]
            })
        default:
            return state
    }
}

export default changeLang;