import React, { Component } from 'react'
import Search from './components/Search'
import UserInfo from './components/UserInfo'
import Actions from './components/Actions'
import Repos from './components/Repos'

class App extends Component {
    render () {
        return (
            <div className='app'>
                <Search />
                <UserInfo />
                <Actions />
                <Repos 
                    className='repos' 
                    title='Repositorios'
                    repos={[{
                        name: 'Nome do repositorio',
                        link: '#'
                    }]}/>
                <Repos 
                    className='starred' 
                    title='Favoritos'
                    repos={[{
                        name: 'Nome do repositorio',
                        link: '#'
                    }]}/>
            </div>
            
        )
    }
}

export default App
