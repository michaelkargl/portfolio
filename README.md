# Portfolio

## Tags

<!-- Languages, Frameworks, Libraries, Hosting Platforms, CI/CD, IaC, Scripting languages -->

Gatsby, GatsbyJS, DecapCMS, ReactJS, React, JavaScript, HTML, CSS,
GitHab, GiHub Pages, Typescript, Luxon, Moment.js, PWA, IDB,
IndexedDB, IDB-KeyVal, React Hooks, Yarn, React95, @include-media

## 🍎 Requirements

- Install _[Powershell][pwsh-installation]_
- Install node
    1. Install _[nvm]_ (linux) or `nvm-windows`
    1. ```shell
       nvm install "$(cat .nvmrc)"
       nvm use "$(cat .nvmrc)"
       node --version
       npm --version
       ```
    1. Install yarn
       ```shell
       npm install --global yarn
       yarn
       ```

[pwsh-installation]: https://learn.microsoft.com/de-de/powershell/scripting/install/installing-powershell?view=powershell-7.5
[nvm]: https://github.com/nvm-sh/nvm
[nvm-windows]: https://github.com/coreybutler/nvm-windows


## ⌨️ Quick start

1. Clone the repository
1. ```shell
   # install dependencies
   yarn
   # Run local dev server
   # This starts both CMS and local server and can take a second
   yarn run start
   ```

1. Open your browser and visit <http://localhost:8000>
1. To access the CMS admin panel, visit <http://localhost:8000/admin>

> If the URLs wont work, please check configuration for the right port or the URL printed in the console after serving
> it locally.

## CMS

The project uses a CMS to form its content. To be able to write files to the local git repository
it needs an API to connect to. This api is started automatically with

```shell
yarn run start
```

together with the development server.

> Note: With the local setup, there isn't any login necessary but sometimes
> something goes wrong and you land on a login page. Sometimes a simple page reload
> work, othertimes you might have to re-run. Safest way is to run the cms separately.

## Deploy

Deployment is setup to happen on every push to `gh-pages`. Try out if the application
looks good by serving your public folder first.

```
npm run serve
```
