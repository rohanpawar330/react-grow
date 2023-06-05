install `react` & `react-dom` via `npm`

and if then running will get React not defined, we need to `import` the React & ReactDOM.... then also it'll throw an error as js will not understand the `import xyz from './xyz';` as it's anormal js so we need to make it a module by specifying type in script tag as `type="module"`...

To run parcel : `npx parcel index.html`
To build : `npx parcel build index.html` -> index.html is our entry point, it'll give error in package,json as npm auto give entry to App.js as a entry piont so remove that.



## Parcel
Doing:->
1. Dev Build
2. Local server
3. HMR - Hot module replacement "as soon as we save something in file it refreshes the build"
    It uses _File Watching_ algo which keep the track of everything and it's written in C++ 
    It gives faster buld or faster dev exp because it cache things to make it build faster
4. Caching - Fast building
5. Image optimzation - loading img on browser
6. Minification
7. Bundling
8. Compress
9. Code spiliting
10. Diffrencial bundling - it helps your app run in diff browser and mobile browser and older browser as well
11. zero config tool
12. Diagnoistics - any symentic errors
13. Error handling
14. Tree shaking algo
15. diffrent dev and prod build


### Browsers List

Parcel takes care of this, it'll restict what version of broswer you need to give support.


