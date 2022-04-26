/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
    export async function getFuturamaQuotes() {
        const resp = await fetch('futuramaapi.herokuapp.com/api/quotes');
        const result = await resp.json();
        const quote = result[0];
        const totalResults = result.length;

        return { quote: result[0], totalResults: result.length };
    }
/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */
    export function thenGetQuotes() {
        return fetch('futuramaapi.herokuapp.com/api/quotes').then((resp) => resp.json()
        // above the resp is implicitly returned, no need to type return
        .then((result) => ({ quote: result[0], totalResults: result.length }))
        );
    }

/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */
  export async function tryGetQuotes() {
      try {
        const resp = await fetch('futuramaapi.herokuapp.com/api/quotes');
        const result = await resp.json();
        const quote = result[0];
        const totalResults = result.length;

        return { quote: result[0], totalResults: result.length };
      } catch (error) {
          console.error('an error occurred')
      }
  }

/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */
  
/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */

/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */

/**
 * TODO: Exercise 7: Call your function from exercise 7 using .then
 */

/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */

