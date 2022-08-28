import './VideosList.scss';
import { Link } from "react-router-dom";

const VideosList = ({videos,activeVideo}) => {
    return (
        
            <section className = "videolist">
             <h2 className="videolist__header"> NEXT VIDEOS</h2>
            {videos
            .filter((video) => video.id !== activeVideo.id)
             .map ((video)=> {return (
                <Link to={`/${video.id}`} key={video.id}>
            <div className="videolist__block"  >
                <img className="videolist__photo" src={video.image} alt="video"/>
                <div className="videolist__block-right">
                    <div className="videolist__title">{video.title}</div>
                    <div className="videolist__author">{video.channel}</div>
                 </div>
            </div>
            </Link>
        )  })}
        </section>
  
    )
}
export default VideosList;