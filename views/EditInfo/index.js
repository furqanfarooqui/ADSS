import { useState } from "react"
import { editInfo } from "../../config/firebase"


function EditInfo ({user, setAllPost}) {
    const {fullName, email, age} = user
    const [editedData, setEditedData] = useState({})
    let a = fullName

    console.log("Edit user data: ", fullName)

    const submit = async () =>{
        await editInfo(user,editedData)
        setAllPost()
    }

    const onChangeValues = (key, e) =>{
        const value = e.target.value
        setEditedData({ ...editedData, [key]: value})
    }

    return <div>
        <h1>Edit your information here </h1>
        <h2>Change Full Name</h2>
        <input placeholder={a} onChange={e => onChangeValues("editedFullName", e)}></input><br/>
        <h2>Change email</h2>
        <input placeholder={email} onChange={e => onChangeValues("editedEmail", e)}></input><br/>
        <h2>Change age</h2>
        <input placeholder={age} onChange={e => onChangeValues("editedAge", e)}></input><br/>


        <button onClick={submit}>Edit</button><br/>
        <button onClick={setAllPost}>back</button>
    </div>
}

export default EditInfo