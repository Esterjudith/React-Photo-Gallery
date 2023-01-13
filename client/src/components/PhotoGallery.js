import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";



function PhotoGallery({ result }) {
    const [open, setOpen] = useState(false)


    const items = result.map(({ image }) => ({
        src: image,
        width: 320,
        height: 250
    }))


    const slides = result.map(({ image }) => ({
        src: image
    }))

    //   const handleClick = (index, slides) => setIndex(index);

    return (
        <div>
            <Gallery
                images={items}
                onClick={() => setOpen(true)}
                enableImageSelection={false}
            />
            <Lightbox
                slides={slides}
                open={open}
                // index={index}
                close={() => setOpen(false)}
            />
        </div>
    );
}

export default PhotoGallery