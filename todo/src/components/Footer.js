import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibleFilters } from '../actions'

const Footer = () => (
    <div>
        <span>Show: </span>
        <FilterLink filter={VisibleFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibleFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibleFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
)

export default Footer