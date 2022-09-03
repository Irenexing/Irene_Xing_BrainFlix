import './Upload.scss';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from 'react';
const { v4: uuid } = require("uuid");

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

function handleSubmit (event) {

  event.preventDefault();
  const newVideo = {
    id: uuid(),
    title: title,
    channel: "Irene Xing",
    views: "1",
    likes: "1",
    duration: "5:00", 
    description: description,
    image: "Upload-video-preview.jpg",
    timestamp: Date.now(),
    video: "https://project-2-api.herokuapp.com/stream",
    comments:[], 
  }  

  axios.post(`http://localhost:8080/videos/`, newVideo);


};


function handleChangeTitle(event) {
  setTitle(event.target.value);
} 

function handleChangeDescription(event) {
  setDescription(event.target.value);
} 

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
            <input className="upload__titlebox" type="text" name="title" value={title} onChange={handleChangeTitle} placeholder="Add a title to your video"/>
            <label className="upload__box-description">ADD A VIDEO DESCRIPTION</label>
            <input className="upload__descriptionbox" type="text" name="description" value={description} onChange={handleChangeDescription} placeholder="Add a description to your video"/>
          </div>
        </form>
            <div className ="upload__buttons">
              <button className="upload__button--tablet">CANCEL</button>
              <button type="submit" className="upload__button" onClick={handleSubmit}>PUBLISH </button>
              <button className="upload__button--cancel">CANCEL </button>
            </div>
    </section>
  </>
)}


export default Upload;