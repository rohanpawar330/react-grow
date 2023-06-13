Strcture depends upton the developer either he wants to group based on functionality or file type

2 export types

- export default - it can be only one in file
  and imported without `{}`
  like `export default MyCompoent = ()=>{}`
  `import MyComponent from 'path';`
- named export - it can be multiple in file
  and imported with `{}`
  like `export mycomp1`
  `export myconst2`
  imported as `import {mycomp1,mycomp2} from 'path';`



  --------------------------------

React uses Reconsiliation Algo _( React fiber )_ behind the scene (React 16) it's a new way of identifying the DOM *its' like git diff

The algorithm React uses to diff one tree with another to determine which parts need to be changed.

Virtual DOM or V-DOM is teh representation of actual DOM
like `<Body/>` which is a Object finally converted by React.createElement is a virtual DOM

Diff Algo- finds out the diff btw DOM, i.e old virtual DOM and Virtual DOM and it'll update the DOM on every render cycle
  
`React is fast due to efficient DOM manuplation` because it has Virtual DOM - react algo finds out the diff btw vitual dom using it's algo i.e. Diff algo or React Fiber released in React 16 and do the manuplation  and update the UI


**reconciliation** and **rendering** are separate phases. The reconciler does the work of computing which parts of a tree have changed; the renderer then uses that information to actually update the rendered app.

