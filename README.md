## Prerequisites

What things you need to install the software and how to install them


| Location                                                     | Suggested Version       |
| -------------                                                |:-------------:|
| <a href="https://nodejs.org/en/">NodeJS</a>                     | >= 6.0.0 |
| <a href="https://nodejs.org/en/">npm</a>                        | >= 4.0.0 |


## Installing
```
npm i
```

## Running
**Development**

Hot reloading for client / server
```
npm run dev
```

**Production**

You can deploy this application on [Heroku](https://www.heroku.com/) and [Dokku](http://dokku.viewdocs.io/dokku/) without making any changes, other than the API URL in [project_prod.js](/env/project_prod.js)

Bundles, minifies and cache busts the project to a build folder and runs node in production. This can be used as part of your deployment script.

```
npm start
```

You can also deploy this application to static hosts such as [Amazon S3](https://aws.amazon.com/s3/) buckets by modifying the `package.json` start script to use `html_bundle` instead of `bundle`.

**E2E Testing**

This project uses [Nightwatch](http://nightwatchjs.org/) for automated end to end testing with chromedriver.
```
npm test
```

## Built With
- React
- Webpack
- Node
- Nightwatch

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/kyle-ssg/c36a03aebe492e45cbd3eefb21cb0486) for details on our code of conduct, and the process for submitting pull requests to us.

## Getting Help

If you encounter a bug or feature request we would like to hear about it. Before you submit an issue please search existing issues in order to prevent duplicates.

## Get in touch

If you have any questions about our projects you can email <a href="mailto:projects@solidstategroup.com">projects@solidstategroup.com</a>.
