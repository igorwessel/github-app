import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Search from './Search'
import UserInfo from './UserInfo'
import Actions from './Actions'
import Repos from './Repos'

class AppContent extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='app'>
                <Search handleSearch={this.props.handleSearch}/>
                {!!this.props.userinfo && <UserInfo userinfo={this.props.userinfo}/>}
                {!!this.props.userinfo && 
                <Actions 
                    handleClickSeeRepository={this.props.handleClickSeeRepository}
                    handleClickSeeRepoStarred={this.props.handleClickSeeRepoStarred}/>}
                {!!this.props.repos.length &&
                this.props.showRepositories && 
                <Repos 
                    className='repos' 
                    title='Repositorios'
                    repos={this.props.repos}/>}
                {!!this.props.starred.length &&
                this.props.showStarred && 
                <Repos 
                    className='starred' 
                    title='Favoritos'
                    repos={this.props.starred}/>}
            </div>
        )
    }
}

AppContent.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
}

export default AppContent