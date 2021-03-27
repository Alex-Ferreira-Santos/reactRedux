export const Types = {
    ADD: 'ADD',
    COMPLETE: 'COMPLETE',
    DELETE: 'DELETE',
}

const INITIAL_STATE = []

export default function todo(state = INITIAL_STATE,action){
    switch(action.type){
        case Types.ADD:
            return [...state,{id: 1,text: action.payload.text, complete: false}]
        case Types.COMPLETE:
            return state.map( todo => todo.id === action.payload.id? {...todo, complete: !todo.complete} : todo)
        case Types.DELETE:
            return state.filter(todo => todo.id !== action.payload.id)
        default:
            return state
    }
}

export const Creators = {
    add: text => ({
        type: Types.ADD,
        payload:{
            text
        }
    }),
    complete: id =>({
        type: Types.COMPLETE,
        payload:{
            id
        }
    }),
    remove: id => ({
        type: Types.DELETE,
        payload:{
            id
        }
    })
}
