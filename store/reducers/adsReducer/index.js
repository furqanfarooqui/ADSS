const initialState = { 
  ads: [],
  favoriteAds: []
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_ADS': {
      return { ...state, ads: action.data }
    }
    case 'REMOVE_ADS': {
      return { ...state, ads: null }
    }
    default: {
      return state
    }
  }
}

export default reducer