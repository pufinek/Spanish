import GrammerView from './components/GrammerView'

export default (store) => ({
  path : 'grammer',
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Grammer = require('./containers/GrammerContainer').default
      const reducer = require('./reducer/grammer').default

      /*  Add the reducer to the store on key 'grammer'  */
      //injectReducer(store, { key: 'grammer', reducer })

      /*  Return getComponent   */
      cb(null,Grammer)

    /* Webpack named bundle   */
    }, 'grammer')
  }
})