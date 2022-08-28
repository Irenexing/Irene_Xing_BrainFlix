import './Upload.scss';
import { Link } from "react-router-dom";

function Upload() {

  return (
    <>
    <section className="upload">
        <h2 className="upload__title">Upload Video</h2>
        <form  className="upload__block">
          <div>
          <label className="upload__box-description" for="thumbnail">VIDEO THUMBNAIL</label>
          <img className="upload__photo"src={"../../assets/Images.Upload-video-preview.jpg"} alt={""}/>
        </div>
        <div className="upload__block-right">
            <label className="upload__box-description" for="title">TITLE YOUR VIDEO</label>
            <input className="upload__titlebox" type="text" name="title" placeholder="Add a title to your video"/>
            <label className="upload__box-description" for="description">ADD A VIDEO DESCRIPTION</label>
            <input className="upload__descriptionbox" type="text" name="description" placeholder="Add a description to your video"/>
            <button className="upload__button--tablet">CANCEL</button>
            <button className="upload__button">PUBLISH </button>
            <button className="upload__button--cancel">CANCEL </button>
        </div>
    </form>
</section>
</>
)}


export default Upload;