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
  const [postDataLoading, setpostDataLoading] = useState(false);
  const [postDatas, setPostDatas] = useState();  
  const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false); 



// export const postData = async ({
//   setpostDataLoading,
//   setPostDatas,
//   title,
//   image,
// }) => {
//   try {
//     const datas = { title, image: image.filesUploaded[0].url };
//     setpostDataLoading(true);
//     let res = await axios.post(`${URL}/`, datas);
//     if (res) {
//       setpostDataLoading(false);
//       setPostDatas(res.data);
//     }
//   } catch (error) {
//     alert(error.response.data.msg);
//     setpostDataLoading(false);
//   }
// };

 const submitHandler = (event) => {
    event.preventDefault()
    postData({image, setPostDatas, setpostDataLoading})
 }

  useEffect(()=> {
    getData({setResult,setGetDataLoading})
    if(postDatas){
        setImage("")
        getData({ setResult, setGetDataLoading })
    }
  }, [postDatas])


  return (    
    <div className="App">
      <form
        onSubmit={submitHandler}>
       <div>  
       {/* filestack upload button*/}
        <button 
          onClick={() =>
            isPickerOverlayVisible
              ? setIsPickerOverlayVisible(false)
              : setIsPickerOverlayVisible(true)
          }
        >
          Upload
        </button>     
          {/* submit button  */}
          <button type='submit'>
            {postDataLoading ? "Loading..." : "SUBMIT"}
          </button>
      </div>
      <div>        
              {isPickerOverlayVisible && <PickerOverlay 
              apikey={process.env.REACT_APP_FILESTACK_API_KEY}
              onSuccess={(res) => console.log(res)}       
              onUploadDone={(res) => console.log(res)} 
                       
              />}
            

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
