import './style.css'
import { useEffect, useState } from "react"
import content from '../../content.js'

type ImageGalleryProps = {
  images: string[]
}

const ImageGallery = (props: ImageGalleryProps) => {
  const [images, setImages] = useState<string[]>([""]);
  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    setImages(props.images)
  }, [props.images]);

  useEffect(() => {
    console.log(imageIndex)
  }, [imageIndex]);


  /* function to change image in gallery 
   * 
   * @param {boolean} direction The direction to change image. Either "true" -> next or "false" -> previous
   */
  function handleChangeImageIndex(direction: boolean) {
    if (!direction) {
      setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
    }
    if (direction) {
      setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
    }
  }


  return (
    <div className="gallery-container">
      <button onClick={() => handleChangeImageIndex(false)}>Back</button>
      <img src={images[imageIndex]} alt='' />
      <button onClick={() => handleChangeImageIndex(true)}>Next</button>
    </div>
  );  
}

export default ImageGallery;