import React, { useState } from 'react'
import ImageUpload from './imageUpload'
import ImagePreview from './imagePreview'
import { enhancedImageAPI } from '../utilities/ImageEnhanceAPI'

const Home = () => {
  const [uploadImage, setUploadImage] = useState("")
  const [enhancedImage, setEnhancedImage] = useState("")
  const [loading, setLoading] = useState(false)

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file))
    setLoading(true)

    try {
      const enhancedURL = await enhancedImageAPI(file)
      setEnhancedImage(enhancedURL.image)
      setLoading(false)
    } catch(error) {
        console.log(error)
        alert("Error while enhancing the image. Please try again after some time.")
    }
  }

  return (
    <>
        <ImageUpload
          UploadImageHandler={UploadImageHandler} />
        <ImagePreview
          loading={loading}
          uploaded={uploadImage}
          enhanced={enhancedImage?.image} />
    </>
  )
}

export default Home