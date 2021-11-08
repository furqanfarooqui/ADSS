import { useState } from 'react'
import CreateAd from '../Createad'
import AllPosts from '../AllPosts'
import { logout } from '../../config/firebase';
import EditInfo from '../EditInfo';
import './index.css';

function Dashboard( {user} ) {
    const [screen, setScreen] = useState("allposts")
    const [searchedItem, setSearchedItem] = useState("")
    const [copySearchedItem, setCopySearchedItem] = useState("")
    console.log(user)

    const search = async() => {
        // console.log(user)
        await setSearchedItem(copySearchedItem)
        alert("searching: " + copySearchedItem)
    }

    const SetCreateAd = () =>{
        setScreen("createad")
    } 

    const setAllPost = () =>{
        setScreen("allposts")
    }

    const refresh = () =>{
        setCopySearchedItem("")
        setSearchedItem("")
    }

    const editInfo = () =>{
        setScreen("editInfo")
    }

    return <div className='App'>
        <div className='headder'> 
            <button onClick={editInfo} className='user'>Username: {user.fullName}</button>
            <button className='logout' onClick={logout} >Logout</button><br/>
        
        </div>
        <h1>Welcome to the home page</h1>
        <input className='search' placeholder='Search products by name' onChange = {e => setCopySearchedItem(e.target.value)}/>

        <button className='searchButton' onClick={search}>Search</button><br/>

        {screen === "createad" ? <CreateAd setAllPost={setAllPost}  user={user}/> : <button onClick={(SetCreateAd)}>Create an AD</button>}
        <button onClick={refresh}>Refresh Data</button>
        {screen === "allposts" && <AllPosts searchedItem={searchedItem}/>}
        {screen === "editInfo" && <EditInfo user={user} setAllPost={setAllPost}/>}
        <div className='footer'>COPYRIGHT 2021 ALL RIGHTS RESERVED</div>
        
    </div>
}

export default Dashboard
