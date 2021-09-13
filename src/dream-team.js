import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function removeSpaces(str){
  str = str.replace(/^\s+|\s+$/g, '')
  return str;
}

export default function createDreamTeam(members) {
  if (!Array.isArray(members))
    return false;
  members = members.filter(item => typeof item === 'string')

  members = members.map(str => str.replace(/^\s+|\s+$/g, ''))
      .map(item=>item.toUpperCase()[0])
      .sort()
      .join('')
  return members;
}
