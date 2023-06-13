## Babel

- JS Compiler
- responsible for all jsx code convertion to pure js

Different attributes for html elements like tabindex etc.

In single line no need to wrap code but for multiple lines needs to wrap `jsx` code to `()` and babel needs to understand it's start and end point.

## React Components

1. React Class Component - old way
2. React Functional Component - new way

### React Functional Component

- it's just like normal arrow function way `()=>{}`
- A function that returns a React Element or JSX code is called Functional Component

```
const HeadingComponent =()=>{
    retrun <h1>Hello</h1>
 }

```

which starts with _CapitalLetter_ only and return a jsx code.

### Render a Component
- <HeadingComponent/>

- jsx helps in preventing cross site attact -> `{}`
- JSX sanatise data before injecting it into component
- calling Title in different type all these are same as it's a function
- JSX have only one parent element at root level
- using Fragments `<> </>`
