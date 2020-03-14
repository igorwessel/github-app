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
                <Search />
                {!!this.props.userinfo && <UserInfo userinfo={this.props.userinfo}/>}
                {!!this.props.userinfo && <Actions />}
                {!!this.props.repos.length && 
                <Repos 
                    className='repos' 
                    title='Repositorios'
                    repos={this.props.repos}/>}
                {!!this.props.starred.length && 
                <Repos 
                    className='starred' 
                    title='Favoritos'
                    repos={this.props.starred}/>}
            </div>
        )
    }
}

AppContent.propTypes = {
    userinfo: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
}

export default AppContent