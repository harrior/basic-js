import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */


export default function minesweeper (matrix ) {
  let playMatrix = []
  for (let i = 0; i < matrix.length; i++){
    playMatrix.push([])
    for (let j = 0; j < matrix[i].length; j++){
      playMatrix[i].push(mineCounter(matrix, i, j))
    }
  }
  return playMatrix
}

function mineCounter(matrix, i, j){
  if (matrix[i][j])
    return 1

  let count = 0;
  for (let x = -1; x <= 1; x++)
    for (let y = -1; y <= 1; y++)
      if ((matrix[i+x]) && (matrix[i+x][j+y])===true)
        count++;

  return count
}
