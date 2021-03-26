import React,{Component} from 'react'

import todo from './store/ducks/todo'

class TodoList extends Component{
    render() {
        return(
            <section>
            <form onSubmit={this.handleSubmit}>
              <input ref={el => (this.input = el)} />
              <button type="submit">Novo</button>
            </form>
    
            <ul>
              {todos.map(todo => (
                <li key={todo.id}>
                  {todo.complete ? <s>{todo.text}</s> : todo.text}
                  <div>
                    <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
                    <button onClick={() => removeTodo(todo.id)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )
    }
}

export default TodoList