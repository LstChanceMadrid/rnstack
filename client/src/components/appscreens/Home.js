import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as homeActions from '../../actions/homeActions'

class Home extends Component {
  render() {
    return (
      <div>
        <View>
            <Text>project data</Text>
        </View>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        projectData : state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(homeActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)