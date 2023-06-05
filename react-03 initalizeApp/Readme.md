you need to initalize npm in your project to create package.json file that'll contain further dependenciew & devDependencies

dependencies & devDependencies

devDependencies are required in development phase not in production for ex : parcel, webpack to bundle up the application
dependencies are required in productions also

`parcel` will install other dependencies also i.e. transitive dependencies required for parcel to run.

`npm` is a repository where all packages are available via npm cmd and used to fetch and install in our project

`npx` npm cmd that is used to execute the package here x  is the execute 

to execute it in this project:
npx parcel index.html 
or
in package.json -> under script write 
    `"start":"parcel index.html --port=3001"`
in teminal run `npx start` it'll open in respective port

Remove CDN from project as it's a costly operation it every time http request is called so instead install it in node_module so that it'll be ready to use.
and in cdn you need to keep changing url for very version or patch update.


