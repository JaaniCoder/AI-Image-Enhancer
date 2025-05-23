import Loader from "./Loader"

const ImagePreview = (props) => {
  return (
    <div className="grid mt-8 grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Original Image */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <h2 className="text-black text-xl font-semibold text-center bg-lime-600 py-2">Original Image</h2>
            {props.uploaded ? ( <img src={props.uploaded} alt="" className="w-full h-full object-cover" />
            ) : (
            <div className="flex text-gray-700 border-2 items-center justify-center h-80 bg-gray-200">No Image Selected</div>) }
        </div>
        {/* Enhanced Image */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <h2 className="text-black text-xl font-semibold text-center bg-blue-600 py-2">Enhanced Image</h2>
            {props.enhanced && !props.loading && ( <img src={props.enhanced} alt="" className="w-full h-full object-cover" /> )}
            {props.loading ? ( <Loader /> )
            : (
            <div className="flex text-gray-700 border-2 items-center justify-center h-80 bg-gray-200">No Enhanced Image</div> )}
        </div>
    </div>
  )
}

export default ImagePreview