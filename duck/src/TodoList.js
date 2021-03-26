import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Creators as TodoActions} from './store/ducks/todo'

class TodoList extends Component{
    handleSubmit = e => {
        e.preventDefault();
    
        this.props.add(this.input.value);
    
        this.input.value = "";
    };
    
    render() {
        const {todo, complete, remove} = this.props
        return(
            <section>
            <form onSubmit={this.handleSubmit}>
              <input ref={el => (this.input = el)} />
              <button type="submit">Novo</button>
            </form>
    
            <ul>
              {todo.map(todo => (
                <li key={todo.id}>
                  {todo.complete ? <s>{todo.text}</s> : todo.text}
                  <div>
                    <button onClick={() => complete(todo.id)}>Toggle</button>
                    <button onClick={() => remove(todo.id)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )
    }
}

const mapStateToProps = state => ({
    todo: state.todo
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(TodoActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)