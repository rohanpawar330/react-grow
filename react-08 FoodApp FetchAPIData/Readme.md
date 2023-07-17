2 Approaches to fetch data
* load -> api call -> render
* load -> render(skeleton ui) -> api call -> render

2nd way is more efficient as api call will take 500ms then ui will render after that
in 2nd approach rendering ui is efficient as the algo in react is pretty fast so it ok to render it 2 times

`useEffect` for fetching api 
load -> render -> useeffect -> render
useEffect is called after component is loaded automatically.

### Shimmer UI
a dummy ui or skeleton ui which resembles as data is loading

when ever there is change in local state variable i.e. useState() variable react re-render the component
it rerendering the whole component using diff algo or reconcilation algo but updating only the changed field


