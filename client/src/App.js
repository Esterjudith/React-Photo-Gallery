import './App.css';
import React, { useEffect, useState } from 'react';
import PhotoGallery from './components/PhotoGallery';
import Loading from './components/Loading';
import { PickerOverlay } from 'filestack-react';
import { getData, postData } from './API/Api'


const App = () => {
  
  const[image, setImage] = useState("")
  const[result, setResult] = useState([])
  const[getDataLoading, setGetDataLoading] = useState(true)  
  const[postDataLoading, setpostDataLoading] = useState(false);
  const[postDatas, setPostDatas] = useState();  
  const[title, setTitle] = useState("")
  const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false); 




 const submitHandler = (event) => {
    event.preventDefault()
    !image ? 
    alert("image require") :
    title.length < 3
    ? alert("title is too short")
    :postData({image, setPostDatas, setpostDataLoading})
 }

  useEffect(()=> {
    getData({setResult,setGetDataLoading})
    if(postDatas){
        setImage("")
        setTitle("")
        getData({ setResult, setGetDataLoading })
    }
  }, [postDatas])


  return (    
    <div className="App">
      <form
        onSubmit={submitHandler}>
      
        <button 
          onClick={() =>
            isPickerOverlayVisible
              ? setIsPickerOverlayVisible(false)
              : setIsPickerOverlayVisible(true)
          }
          type="button"
        >
          Pick Image
        </button> 
       

        <input 
        type="text"        
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Image Title" />

          {/* submit button  */}
          <button type='submit'>
            {postDataLoading ? "Loading..." : "SUBMIT"}
          </button>
   
        <div>        
              {isPickerOverlayVisible && (
              <PickerOverlay 
              apikey={process.env.REACT_APP_FILESTACK_API_KEY}
              onSuccess={(res) => {
                setImage(res)
                console.log(res)
                setIsPickerOverlayVisible(false)}} 
                onError={(res) => console.log(res)}
               pickerOptions={{
                maxFiles: 1,
                accept: ["image/*"],
                errorsTimeout: 2000,
                maxSize: 1 * 900 * 900,
              }}       
         />)}        
      </div>
     </form>       
      {
        getDataLoading && <Loading/>
      }
      <PhotoGallery result={result}/>
    </div>
  );
};

export default App;





// import './App.css';
// import axios from 'axios'
// import { useState } from 'react'


// function App() {    

//    const[image, setImage] = useState(null)   

//    const handleUpload = () => {
//     console.log("handle uploads")
//     axios.post('http://localhost:3001/image-upload', image)
//    }
   
//    const getFileInfo = (e) => {
//      console.log('File info working!')
//      console.log(e.target.files[0])
//      const formData = new FormData()
//      formData.append('my-image-file', e.target.files[0], e.target.files[0].name)
//      setImage(formData)
//    }
//     return (
//         <div className="App">
       
//             <h1>Image upload</h1>
//             <input type="file" onChange={getFileInfo} />
//             <button onClick={handleUpload}>Upload Image</button>
          
//         </div>
//     );
// }

// export default App;
