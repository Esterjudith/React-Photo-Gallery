import React, { useState } from 'react'
import { PickerOverlay } from 'filestack-react';



function ImageUpload() {
 const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false); 


    return (
        <div>
              <div>        
        <button 
          onClick={() =>
            isPickerOverlayVisible
              ? setIsPickerOverlayVisible(false)
              : setIsPickerOverlayVisible(true)
          }
        >
          Upload
        </button>        
      </div>
      <div>        
              {isPickerOverlayVisible && <PickerOverlay 
              apikey={process.env.REACT_APP_FILESTACK_API_KEY}
              onSuccess={(res) => console.log(res)}       
              onUploadDone={(res) => console.log(res)}
              />}

      </div>

        </div>
    )
}

export default ImageUpload