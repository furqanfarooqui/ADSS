import {
  collection, query, onSnapshot
} from "firebase/firestore";
import { getAllAds } from '../../../config/firebase'

/*
About the error during class, I was providing `async` to below action function that's why
it was returning Promise and then throwing error.
WRONG: async function updateAds
*/

function updateAds() {
  /* 
  // Get realtime data and dispatch it to reducer:

  return async (dispatch) => {

    const q = query(collection(db, "ads"))
    onSnapshot(q, (querySnapshot) => {
      const currentAds = []
      querySnapshot.forEach(doc => {
        currentAds.push({ ...doc.data(), id: doc.id })
      })
      dispatch({
        type: 'UPDATE_ADS',
        data: currentAds
      })
    })
  }
  */

  return async (dispatch) => {
    const currentAds = await getAllAds()
    dispatch({
      type: 'UPDATE_ADS',
      data: currentAds
    })
  }
}

function getAndUpdateAds() {

}

export {
  updateAds
}