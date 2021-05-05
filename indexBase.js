const { createStore } = require('redux')
// acciones /actions
const INCREMENTAR = 'incrementar'
const DECREMENTAR = 'decrementar'

// actionCreators
const incrementar = () => ({ type: INCREMENTAR})
const decrementar = () => ({ type: DECREMENTAR})

const inicialState = 0
// reducer
const contador = (state = inicialState, action) => {
    switch (action.type) {
        case INCREMENTAR:
            return state + 1
        case DECREMENTAR:
            return state - 1
        default:
            return state
    }
}
//
const store = createStore(contador)

store.subscribe(() => console.log(store.getState()))

store.dispatch(incrementar())
store.dispatch(incrementar())
store.dispatch(incrementar())
store.dispatch(incrementar())
store.dispatch(incrementar())