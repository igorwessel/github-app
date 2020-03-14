import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Repos extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={this.props.className}>
                <h2>{this.props.title}:</h2>
                <ul>
                    {this.props.repos.map( (repo) => (
                        <li key={repo.link}><a href={repo.link}>{repo.name}</a></li>
                    ))}
                </ul>
            </div>
        )
    }
}

Repos.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    repos: PropTypes.array
}

export default Repos
