import './VideosList.scss';
import videosData from '../../data/video-details.json';
import {useState} from 'react';

const VideosList = ({videosDetailId, setVideosDetail}) => {
    const [videoList, setVideoList] = useState(videosData);
    const selectVideo = (id) => {
        setVideosDetail(id)
    }
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