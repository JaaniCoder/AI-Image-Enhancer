const ImageUpload = (props) => {
  const ShowImageHandler = (e) => {
    const file = e.target.files[0]
    if(file) {
      props.UploadImageHandler(file)
    }
  }
  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl'>
        <label htmlFor="fileInput" className='block p-6 w-full cursor-pointer text-center hover:border-fuchsia-600 border-2 transition-all border-dashed border-gray-300 rounded-lg'>
            <input type="file" id='fileInput' className='hidden' onChange={ShowImageHandler} />
            <span className='text-lg font-medium text-gray-700'>Click or Drag to Upload Image</span>
        </label>
    </div>
  )
}

export default ImageUpload