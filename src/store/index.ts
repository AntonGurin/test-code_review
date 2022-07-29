import { configureStore } from '@reduxjs/toolkit'
//import App from '../App'


/*  Add to interface for everyone action
    Create new dir 'types' in the src dir. Then keep all interfaces in types dir (1 level down src dir)
    For everyone case we are create const with the same names. Write interfaces for each const.
    Add file 'todos' to 'types' dir and keep here types about todo.
    We could create file ./actions/const for export consts in ours actions.
    All we need exporting from types dir, we are imports in other files e.x. index.ts
    We can create another one case visability_filter
    Case 'ADD_TODO' have to return object.assign({}) | case'ADD_TODO': {return state.todos.push(action.payload)}.
    Add object.assign for each case 
    On the one hand, keeping constants in separate files is not good for navigation or local logic but 
    I think it's a pretty well solution for logic in general.
*/

export default configureStore({
    reducer: {
        list: (state = {todos: []}, action) => {
            switch (action.type) {
                case 'ADD_TODO': {
                    const newState = state;
                    newState.todos.push(action.payload);
                    return newState;
                }
                case 'REMOVE_TODO': {
                    return {
                        ...state,
                        todos: state.todos.filter((t: any, index: number) => index !== action.payload),
                    };
                }
                case 'CHANGE_TODOS': {
                    return {
                        todos: action.payload,
                    };
                }
                default:
                    return state;
            }
        }
    }
}) 
