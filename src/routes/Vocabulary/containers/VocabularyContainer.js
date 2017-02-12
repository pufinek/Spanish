import { connect } from 'react-redux'
import {} from '../reducer/vocabulary'

import VocabularyView from '../components/VocabularyView'

const mapDispatchToProps = {

}

const mapStateToProps = (state) => ({
  vocabulary : state.vocabulary
})

export default connect(mapStateToProps, mapDispatchToProps)(VocabularyView)