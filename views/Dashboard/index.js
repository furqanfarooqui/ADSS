import { useState } from 'react'
import CreateAd from '../Createad'
import AllPosts from '../AllPosts'
import { logout } from '../../config/firebase';
import './index.css';

function Dashboard( {user} ) {
    const [screen, setScreen] = useState("allposts")
    console.log(user)

    const search = () => {
        // console.log(user)
        alert("searching")
    }

    const SetCreateAd = () =>{
        setScreen("createad")
    } 

    const setAllPost = () =>{
        setScreen("allposts")
    }

    return <div className='App'>
        <h1>This is the home page</h1>
        <button onClick={logout} >Logout</button><br/>
        <input placeholder='Search products by name'/><button onClick={search}>Search</button><br/>

        {screen === "createad" ? <CreateAd setAllPost={setAllPost}  user={user}/> : <button onClick={(SetCreateAd)}>Create an AD</button>}
        {screen === "allposts" && <AllPosts/>}
        
    </div>
}

export default Dashboard
