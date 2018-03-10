const date = (state = null, action) => {
    if (action.type === 'ADD_SELECTED_DATE') {
        return action
    }

    return state
};

export default date;