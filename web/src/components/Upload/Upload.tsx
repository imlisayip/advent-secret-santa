import Icon from '../Icon/Icon'

const Upload = () => {
  return (
    <div className="flex h-[100px] w-full items-center border-[6px] border-dashed  border-white px-8">
      <label
        htmlFor="upload"
        className="flex flex-1 items-center text-3xl text-white"
      >
        Avatar
        <input
          type="file"
          id="upload"
          name="upload"
          accept="image/png, image/jpeg"
          className="hidden"
        />
        <div className="normal-sans flex-1 text-center text-lg tracking-normal text-[#CAE3D7]">
          Drag and Drop an Image
        </div>
        <div className="text-white">
          <Icon id="upload" size={32} />
        </div>
      </label>
    </div>
  )
}

export default Upload
