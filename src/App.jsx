import { getFuturamaQuotes, thenGetQuotes } from "./services/promise-me";

export default function App() {
  const handleClick = (callback) => {
    const result = callback();
    console.log(result);
  };

  return (
    <>
    <button onClick= {async () => console.log(getFuturamaQuotes())}>
      Async Get Quotes
    </button>
    <button onClick={async () => console.log(thenGetQuotes()
    )}>
      .then() Get Quotes
    </button>
    </>
  );
}
// a higher order function takes a function as parameters and returns a function 
// the return will show the result in the console
// whenever async keyword is used, it will always return a promise
// syntactic sugar are features of a programming language or api easier

// with the console log example, non blocking (.then approach) completed the order of console log 1(start),3(end),2(middle) but async is blocking so it showed the console log in order 1(start),2(middle),3(end)