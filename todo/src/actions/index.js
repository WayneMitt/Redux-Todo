let nextTodoID = 0

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: ++nextTodoID,
    text
    
})

export const setVisibleFilter = filter => ({
    type: 'SET_VISIBLE_FILTER',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const VisibleFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}