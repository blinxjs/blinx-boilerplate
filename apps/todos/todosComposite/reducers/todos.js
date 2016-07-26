const initialState = [];

export default function todos(state = initialState, action) {

    var returnObj;

    switch (action.type) {
        case "R_ADD_TODO":
            returnObj = [
                {
                    id: Date.now(),
                    completed: false,
                    text: action.text
                },
                ...state
            ];
            return returnObj;
        case "R_TOGGLE":
            return Object.assign([], state).map(function(todo) {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        default:
            return state
    }
}