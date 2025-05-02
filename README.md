# Portfolio


## Tags

<!-- Languages, Frameworks, Libraries, Hosting Platforms, CI/CD, IaC, Scripting languages -->

Gatsby, GatsbyJS, DecapCMS, ReactJS, React, JavaScript, HTML, CSS,
GitHab, GiHub Pages, Typescript, Luxon, Moment.js, PWA, IDB,
IndexedDB, IDB-KeyVal, React Hooks, Yarn 

## 🍎 Requirements

- Install _[Powershell][pwsh-installation]_
- Install node
    1. Install _[nvm]_ (linux) or `nvm-windows`

    2. ```pwsh
     nvm install "$(cat .nvmrc)"
     nvm use "$(cat .nvmrc)"
     node --version
     npm --version
     ```
    3. Install yarn

       ```pwsh
       npm install --global yarn
       yarn
       ```

[pwsh-installation]: https://learn.microsoft.com/de-de/powershell/scripting/install/installing-powershell?view=powershell-7.5
[nvm]: https://github.com/nvm-sh/nvm
[nvm-windows]: https://github.com/coreybutler/nvm-windows


## ⌨️ Quick start

1. Clone the repository
1. ```pwsh
   # install dependencies
   yarn
   # run local dev server
   yarn run start

   # if you want to access the CMS
   yarn run serve:cms
   ```

1. Open your browser and visit <http://localhost:8000>
1. To access the CMS admin panel, visit <http://localhost:8000/admin>

> If the URLs wont work, please check configuration for the right port or the URL printed in the console after serving
> it locally.

## CMS

The project uses a CMS to form its content. To be able to write files to the local git repository
it needs an API to connect to. This api can be started by doing 

```pwsh
yarn run serve:cms
```

> Note: Sometimes the auto login doesn't work. In which case do a page refresh.
> It should automatically open the CMS admin panel.

## Deploy

At the moment, deployment is done manually to the `gh-pages` branch:

```pwsh
yarn run deploy
```
