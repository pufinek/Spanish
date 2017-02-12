import VocabularyView from './components/VocabularyView'

export default (store) => ({
  path : 'vocabulary',
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Vocabulary = require('./containers/VocabularyContainer').default
      const reducer = require('./reducer/vocabulary').default

      /*  Add the reducer to the store on key 'vocabulary'  */
      //injectReducer(store, { key: 'vocabulary', reducer })

      /*  Return getComponent   */
      cb(null,Vocabulary)

    /* Webpack named bundle   */
    }, 'vocabulary')
  }
})