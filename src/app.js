import React, { Component } from 'react'
import AppContent from './components/AppContent'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            userinfo: null,
            repos: [],
            starred: []
        }
    }

    render () {
        return (
            <AppContent
                userinfo={this.state.userinfo}
                repos={this.state.repos}
                starred={this.state.starred}
            />
        )
    }
}

export default App
