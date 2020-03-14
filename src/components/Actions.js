import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Actions extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='actions'>
                <button onClick={this.props.handleClickSeeRepository}>Ver repositorios</button>
                <button onClick={this.props.handleClickSeeRepoStarred}>Ver favoritos</button>
            </div>
        )
    }
}

Actions.propTypes = {
    handleClickSeeRepository: PropTypes.func.isRequired,
    handleClickSeeRepoStarred: PropTypes.func.isRequired
}

export default Actions
