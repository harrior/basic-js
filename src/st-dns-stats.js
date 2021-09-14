import {NotImplementedError} from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
    let domainsStat = {}
    for (let fullDomain of domains) {
        let domainParts = fullDomain.split('.').reverse()
        for (let i=1; i <= domainParts.length; i++){
            let domain = '.' + domainParts.slice(0,i).join('.')
            domainsStat[domain] = domainsStat[domain] ? domainsStat[domain] + 1 : 1;
        }
    }
    return domainsStat
}
