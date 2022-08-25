import './Video.scss';
import videosDetailData from '../../data/video-details.json';

const Video = ({videosDetailId}) => {
    let videoDetailsIndex = videosDetailData.find(video => video.id ===videosDetailId);

    return (
    <section className = "activevideo">

            <div className="activevideo__block">
            <video controls poster={videoDetailsIndex.image}>
                <source src="movie.mp4" type="video/mp4"/>
            </video>
            </div>
        
    </section>

    
  )
}

export default Video;

