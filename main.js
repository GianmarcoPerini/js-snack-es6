
    // FILTER ES6


const check = (arr, a, b) => arr.filter((element ,index) => index >= a && index <= b)

    // FOREACH ES6

/**
 * const check = (arr, a, b) => {
 *     let checkIndex = []
 *     arr.forEach( ( element, index ) => {
 *         if(index >= a && index <= b){
 *             checkIndex.push(element)
 *         }
 *     } )
 *     console.log(checkIndex)
 * }
 */