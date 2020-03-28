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
            <div className='content'>
                <Search isDisabled={this.props.isFetching} handleSearch={this.props.handleSearch}/>
                {!!this.props.userinfo && <UserInfo userinfo={this.props.userinfo}/>}
                {this.props.isFetching && <div>Carregando...</div>}
                {!!this.props.userinfo && 
                <Actions 
                    handleClickSeeRepository={this.props.handleClickSeeRepository}
                    handleClickSeeRepoStarred={this.props.handleClickSeeRepoStarred}/>}
                <div className="repos-container">
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
            </div>
        )
    }
}

AppContent.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func,
    handleClickSeeRepository: PropTypes.func,
    handleClickSeeRepoStarred: PropTypes.func
}

export default AppContent