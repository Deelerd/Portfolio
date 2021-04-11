import Cookies from 'js-cookie'

export function getCookies(name) {
    return Cookies.get(name)
}

export function setCookies(name, value, expire) {
    return Cookies.set(name, value, expire)
}