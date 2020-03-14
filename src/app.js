import React, { Component } from 'react'
import AppContent from './components/AppContent'
import ajax from '@fdaciuk/ajax'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            userinfo: null,
            repos: [],
            starred: []
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(e){
        const value = e.target.value
        const keyCode = e.which || e.keyCode
        const enter = 13
        if(keyCode === enter) {
            ajax().get(`https://api.github.com/users/${value}`)
                .then( (result) => {
                    this.setState({
                        userinfo: {
                            username: result.name,
                            photo: result.avatar_url,
                            login: result.login,
                            repos: result.public_repos,
                            followers: result.followers,
                            following: result.following
                        }
                    })
                })
        }
    }

    render () {
        return (
            <AppContent
                userinfo={this.state.userinfo}
                repos={this.state.repos}
                starred={this.state.starred}
                handleSearch={this.handleSearch}
            />
        )
    }
}

export default App
