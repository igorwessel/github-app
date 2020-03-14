import React, { Component } from 'react'
import AppContent from './components/AppContent'
import ajax from '@fdaciuk/ajax'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            userinfo: null,
            repos: [],
            starred: [],
            showRepositories: false,
            showStarred: false
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClickSeeRepository = this.handleClickSeeRepository.bind(this)
        this.handleClickSeeRepoStarred = this.handleClickSeeRepoStarred.bind(this)
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
                    this.getRepos('repos')
                    this.getRepos('starred')
                })

        }
    }

    getRepos(type){
        ajax().get(`https://api.github.com/users/${this.state.userinfo.username}/${type}`)
            .then( (result) => {
                const repositories = result.map( repository => {
                    return {
                        name: repository.name,
                        link: repository.html_url
                    }
                })      
                this.setState({
                    [type]: repositories
                })
            })
    }

    handleClickSeeRepository(e) {
        this.setState({
            showRepositories: !this.state.showRepositories
        })
    }

    handleClickSeeRepoStarred(e) {
        this.setState({
            showStarred: !this.state.showStarred
        })
    }

    render () {
        return (
            <AppContent
                userinfo={this.state.userinfo}
                repos={this.state.repos}
                starred={this.state.starred}
                showRepositories={this.state.showRepositories}
                showStarred={this.state.showStarred}
                handleSearch={this.handleSearch}
                handleClickSeeRepository={this.handleClickSeeRepository}
                handleClickSeeRepoStarred={this.handleClickSeeRepoStarred}
            />
        )
    }
}

export default App
