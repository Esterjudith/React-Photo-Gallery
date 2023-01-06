import './App.css';
import axios from 'axios'
import { useState } from 'react'


function App() {

   const[image, setImage] = useState(null)   

   const handleUpload = () => {
    console.log("handle uploads")
    axios.post('http://localhost:3001/image-upload', image)
   }
   
   const getFileInfo = (e) => {
     console.log('File info working!')
     console.log(e.target.files[0])
     const formData = new FormData()
     formData.append('my-image-file', e.target.files[0], e.target.files[0].name)
     setImage(formData)
   }
    return (
        <div className="App">
       
            <h1>Image upload</h1>
            <input type="file" onChange={getFileInfo} />
            <button onClick={handleUpload}>Upload Image</button>
          
        </div>
    );
}

export default App;
