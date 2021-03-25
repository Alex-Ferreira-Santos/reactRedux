import React,{Component} from 'react';


export default class RepositoryList extends Component {

    render() {
        const {repositories} = this.props 
        const { newRepository} = this.state
        return (
            <ul>
                {repositories.map(repository => <li key={repository.id}>{repository.name}</li>)}
            </ul>
        )
    }
}