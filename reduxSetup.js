const INITIAL_STATE = { mood: "(￣ω￣●)"};

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "happy":
            return {...state, mood: action.payload} 
        case "angry":
            return {...state, mood: action.payload} 
        case "confused":
            return {...state, mood: action.payload} 
        case "sad":
            return {...state, mood: action.payload} 
        default:
            return state
    }
}

const store = Redux.createStore(rootReducer);