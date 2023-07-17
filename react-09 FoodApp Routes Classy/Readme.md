`useEffect` ->
`useEffect(()=>{})` -- it's called everytime when component render
`useEffect(()=>{},[])` -- it's called only once when component rendered first time.
`useEffect(()=>{},[keyValue])` -- it's called everytime when it detect the keyvalue change in dependency array

--------------------------------------

#### Don't use useState
* outside the functional component
* inside conditional block
* inside for-loop


### react-router-dom
it's used for routing in react
with this SPA can be achived

it also provides useRouterError
that gives error handling for incorrect routes and all details about it

`<Link to="/path">COntact</Link>` link helps in SPA it does not refresh the component insted it replce the inderlying compoent

`<Outlet/>` is the tag in place of which it's child routes component loads like `router-outlet` in angular

```js
createBrowserRoute([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>
        children:[{
            path:"/about",
            element:<About/>
        }]
    }
])```

