import './VideosList.scss';
import {useState} from 'react';
import axios from "axios";

const VideosList = ({videosDetailId, setVideosDetail}) => {
    const [videoList, setVideoList] = useState(videosData);
    const selectVideo = (id) => {
        setVideosDetail(id)
    }
    axios("https://project-2-api.herokuapp.com/videos/?api_key=bde328b1-b3fa-4401-baca-139fd5295d25")
    return (
    <section className = "videolist">
        <h2 className="videolist__header"> NEXT VIDEOS</h2>
        {videosData
        .filter((video) => video.id !== videosDetailId.id)
        .map ((video)=> {return (
            <div className="videolist__block" key={video.id} onClick={() => setVideosDetail(video)}>
            <img className="videolist__photo" src={video.image} alt="video"/>
            <div className="videolist__block-right">
                <div className="videolist__title">{video.title}</div>
                <div className="videolist__author">{video.channel}</div>
                </div>
            </div>
        )})}
    </section>
    )
}
export default VideosList;