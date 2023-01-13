import './App.css';
import React, { useState } from 'react';
import axios from 'axios'


function App(){
    const[image, setImage] = useState()

    function handleChange(e){
        console.log(e.target.files[0])
        setImage(e.target.files[0])
    }

    function handleSubmit(e){
        e.preventDefault()
        const url = 'http://localhost:3001/createImage'
        const formData = new FormData()
        formData.append('image', image)
        formData.append('fileName', image.name)
       
       
      axios.post(url, formData)
         .then((response) => {
            console.log(response.data)
         }).catch((error) =>{
            console.log(error)
         })
    }

    return (
        <div className='App'>
            <form onSubmit = {handleSubmit}>
                <h1>Image Upload</h1>
                <input type="file" name='image' onChange={handleChange}/>
                <button type='submit'>Upload</button>
            </form>
        </div>
    )
}

export default App;




