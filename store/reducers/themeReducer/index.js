function reducer(state = { theme: 'red' }, action) {
  console.log('reducer called ->', action)
  switch(action.type) {
    case 'UPDATE_THEME': {
      return { ...state, theme: action.data}
    }
    case 'REMOVE_THEME': {
      return { ...state, theme: null }
    }
    default: {
      return state
    }
  }
}

export default reducer