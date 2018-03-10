const authors = (state = null, action) => {
    if (action.type === 'UPDATE_SELECTED_AUTHORS') {
        return action
    }

    return state
};

export default authors;