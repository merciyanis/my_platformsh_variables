# platformsh_variables

This module will give you access to the `PLATFORM_ROUTES` and `PLATFORM_RELATIONSHIPS` environement variable in your front app.
Actually access to `PLATFORM_RELATIONSHIPS` is restricted to the `api` relationship.

## Install
`npm install my_platformsh_variables`

In package.json add:

```
"buildenvvar": "platform-var"
```

In `.platform.app.yaml`
add:
```
mounts:
  '/build_platform': 'shared:files/build_platform'
  '/.tmp_platformsh': 'shared:files/tmp_platformsh'
```

Add `npm run buildenvvar` in the `deploy` hook.

and change your root location to the folder `build_platform`.

```
  web:
    locations:
      /:
        root: "build_platform"
```

In your production webpack config, add `platformsh_variables` as external like:
```
externals: {
  'my_platformsh_variables': 'my_platformsh_variables'
},
```

## Use
```
import { routesVariable, apiRelationship } from 'my_platformsh_variables';

```
In development mode, the variable will be mocked (see lib/mock.js)

## Publish

Just change the version in the `package.json` and push the code to the `main` branch.

Publish action is based on this action : [NPM Publish](https://github.com/marketplace/actions/npm-publish)
