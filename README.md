# Portfolio

[![build-test-deploy](https://github.com/michaelkargl/portfolio/actions/workflows/build-test-deploy.yml/badge.svg)](https://github.com/michaelkargl/portfolio/actions/workflows/build-test-deploy.yml)

## Tags

<!-- Languages, Frameworks, Libraries, Hosting Platforms, CI/CD, IaC, Scripting languages -->

Gatsby, GatsbyJS, DecapCMS, ReactJS, React, JavaScript, HTML, CSS,
GitHab, GiHub Pages, Typescript, Luxon, Moment.js, PWA, IDB,
IndexedDB, IDB-KeyVal, React Hooks, Yarn, React95, @include-media

| Service    | DEV                               | PROD                                                 |
|------------|-----------------------------------|------------------------------------------------------|
| Portfolio  | <http://localhost:8000>           | <https://michaelkargl.github.io/portfolio/>          |
| CMS        | <http://localhost:8000/admin>     | <https://michaelkargl.github.io/portfolio/admin>     |
| Storybook  | <http://localhost:6006>           | <https://michaelkargl.github.io/portfolio/storybook> |
| Repository | <https://github.com/michaelkargl> | <https://github.com/michaelkargl>                    |

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
1. To access Storybook, visit <http://localhost:6006>

> If the URLs don't work, please check the configuration for the right ports or the URLs printed
> in the console after serving it locally.

## CMS

The project uses a CMS to form its content. To be able to write files to the local git repository
it needs an API to connect to. This api is started automatically with

```shell
yarn run start
```

### Adding new entries

Decap CMS handles everything in one [config.yml](./static/admin/config.yml) file.
Add here all the [Collections and Fields](https://decapcms.org/docs/configure-decap-cms/) as needed and 
access them through the graphql interface:

```graphql
 query MyQuery {
      allMarkdownRemark {
        edges {
          node{
            frontmatter {
              title
              aboutMe
              training
              skillsByTime
              skillsByScore
              links
            }
          }
        }
      }
    }
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

## Storybook

To ease development, you can take use of storybook. It is deployed under `/storybook`.

```shell
# runs the storybook instance side-by side
yarn run start

# run explicitly
yarn run storybook
```

## On NPX / YPX

Since we are using `yarn`, npx will not utilize the yarn cache. There are
two options

1. Use `npx` and have 2 caches
2. Use `ynpx`

For the secondd choice, there's a `package.json` command

```sh
# Example npx invocation with yarn
yarn run ynpx create-react-app
```

## Troubleshooting

### `yarn run start` runs into errors

I found that, when `Ctrl+C`ing out, the servers don't fully stop. This blocks the necessary ports and causes lots of
unnecessary errors.

```powrshell
Get-Process node | Stop-Process
```

usually fixes these errors.