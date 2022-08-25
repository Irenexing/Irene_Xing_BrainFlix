import './VideoDetails.scss';
import videosDetailData from '../../data/video-details.json';

const VideoDetails = ({videosDetailId}) => {
    let videoDetailsIndex = videosDetailData.find(video => video.id===videosDetailId);

    return (
    <section className = "activevideo">

            <div className="activevideo__block">
                <div className="activevideo__title">{videoDetailsIndex.title}</div>
                <div className="activevideo__block-bottom">
                    <div className="activevideo__block-bottomleft">
                        <div className="activevideo__channel">By {videoDetailsIndex.channel}</div>
                        <div className="activevideo__timestamp">{new Date(videoDetailsIndex.timestamp).toLocaleDateString("en-US")}</div>
                    </div>
                    <div className="activevideo__block-bottomright">
                        <div className="activevideo__views">
                            <img className="activevideo__views-icon" src={require("../../assets/Icons/views.svg").default} alt={"viewicon"}/>
                            <div className="activevideo__viewsnumber">{videoDetailsIndex.views}</div>
                        </div>
                        <div className="activevideo__likes">
                        <img className="activevideo__likes-icon" src={require("../../assets/Icons/likes.svg").default} alt={"likesicon"}/>
                        <div className="activevideo__likesnumber">{videoDetailsIndex.likes}</div>
                        </div> 
                    </div>
                </div>
                <div className="activevideo__description">{videoDetailsIndex.description}</div> 
            </div>
        
    </section>

    
  )
}

export default VideoDetails;