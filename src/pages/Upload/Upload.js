import './Upload.scss';
import { Link } from 'react-router-dom';

function Upload() {
  const Alert = () => {
    alert("Uploaded");
  };

  return (
    <>
    <section className="upload">
        <h2 className="upload__title">Upload Video</h2>
        <form  className="upload__block">
          <div className="upload__block-top">
          <label className="upload__box-description">VIDEO THUMBNAIL</label>
          <img className="upload__photo"src={require("../../assets/Images/Upload-video-preview.jpg")} alt={""}/>
        </div>
        <div className="upload__block-right">
            <label className="upload__box-description" >TITLE YOUR VIDEO</label>
            <input className="upload__titlebox" type="text" name="title" placeholder="Add a title to your video"/>
            <label className="upload__box-description">ADD A VIDEO DESCRIPTION</label>
            <input className="upload__descriptionbox" type="text" name="description" placeholder="Add a description to your video"/>
        </div>
    </form>
            <div className ="upload__buttons">
            <button className="upload__button--tablet">CANCEL</button>
            <Link to="/" type="submit" className="upload__button" onClick={Alert}>PUBLISH </Link>
            <button className="upload__button--cancel">CANCEL </button>
            </div>
</section>
</>
)}


export default Upload;