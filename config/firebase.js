// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth"
import { addDoc, collection, getFirestore, setDoc, doc, getDoc, getDocs, query, orderBy, where } from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2UpKRMVrNJLYnEsaYMmsU1-PlFQmMbkI",
  authDomain: "fir-testing-a3d3e.firebaseapp.com",
  projectId: "fir-testing-a3d3e",
  storageBucket: "fir-testing-a3d3e.appspot.com",
  messagingSenderId: "163215599389",
  appId: "1:163215599389:web:db388e0b355301285623f4"
};

// Initialize Firebase
initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore();
const storage = getStorage()

async function registerUser({email, password, fullName, age}) {
  const {user: {uid}} = await createUserWithEmailAndPassword(auth, email, password)
    
      await setDoc(doc(db, "users", uid), {
        fullName, email, age, uid
      })
    return uid
}

async function loginUser(email, password) {
  const {user: {uid}} = await signInWithEmailAndPassword(auth, email, password)

  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  console.log(docSnap)

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    console.log("Loggedin");
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
    return {uid, ...docSnap.data() }
}

async function storeData(data) {
  //Upload files to storage
  let { images } = data
  let imagesUrl = []

  for(let i = 0; i < images.length; i++) {
    const storageRef = ref(storage, 'ads/' + images[i].name)
    await uploadBytes(storageRef, images[i])
    const url = await getDownloadURL(storageRef)
    imagesUrl.push(url)
  }
  data.images = imagesUrl
  await addDoc(collection(db, 'ads'), data)
  alert('Data added successfully!')
}

async function callData(searchedItem){
  console.log("firebase searched data: ", searchedItem)
  let dataCopyArray = []

  if(searchedItem){
    const q = query(collection(db, "ads"), where("title", "==", searchedItem))
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
    let dataCopy = doc.data()
    dataCopyArray.push(dataCopy)
  });
  }
  else{
    const q = query(collection(db, "ads"), orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
    let dataCopy = doc.data()
    dataCopyArray.push(dataCopy)
  });
  }

  return  dataCopyArray
}

async function editInfo (user, edit){
  console.log("firebase edit: ",edit)
  let dataCopyArray = []
  let newData = {}

  alert("info eddited")
  await alert(user.uid)
  
  // const docRef = doc(db, "users", "ECN7bDhbQFh2COpvQydCKQW6UV02");
  // const docSnap = await getDoc(docRef);

  const q = query(collection(db, "users"))
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot)


    querySnapshot.forEach((doc) => {
    let dataCopy = doc.data()
    dataCopyArray.push(dataCopy)
  });

  for(let i=1; i < dataCopyArray.length; i++){
    console.log(dataCopyArray[i].uid)
    if(dataCopyArray[i].uid == user.uid){
      console.log("if chala")
      newData = dataCopyArray[i]
      console.log(dataCopyArray[i])
    }
  }
  console.log(newData)
  newData.fullName = edit.fullName
  newData.email = edit.email
  newData.age = edit.age
  console.log(newData)
  // await deleteDoc(doc(db, "users", user.uid));
  await setDoc(doc(db, "users", user.uid), newData)
  alert('Data edited successfully!')

}

async function deleteData(user){
  alert("Firebase data deleted")
  await alert(user.uid)
}

async function updateData(user){
  alert("Firebase data updated")
  await alert(user.uid)
  // await deleteDoc(doc(db, "users", user.uid));
}

function logout(){
  alert("Successfully logged out")
  window.location.reload() 
}

export {
  registerUser,
  loginUser,
  storeData,
  logout,
  callData,
  deleteData,
  updateData,
  editInfo
}
