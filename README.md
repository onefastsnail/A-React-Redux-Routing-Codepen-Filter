# Codepen React Redux Filter

## Usage

1. If you need to run a local web server run `./node_modules/.bin/http-server`
3. run `npm install`
3. To develop run `npm run start`
4. Visit [http://127.0.0.1:8080](http://127.0.0.1:8080)

## How it works

* We create our routes as normal
* We then wrap our routes within a provider component supplied from `react-redux` which attaches our state/store to our react application
* On our controller/container components we then use the connect method from `react-redux` to map our actions and props to that components properties.

### Timeline

* Upon bootup we trigger a dispatch with an action creator.
* This action creator submits an async request off to our API.
* 

## Notes
* Using Webpack for speedy development
* JSON is influenced from the CodePen v2 API, an unofficial, public JSON API for CodePen [http://cpv2api.com/](http://cpv2api.com/)

## Contributors
Paul Stewart
