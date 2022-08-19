import './Video.scss';
import videosDetailData from '../../data/video-details.json';

const Video = ({videosDetailId}) => {
    let videoDetailsIndex = videosDetailData.find(video => video.id===videosDetailId);

    return (
    <section className = "activevideo">
            <div className="activevideo__block">
            <video className="activevideo__photo" src={videoDetailsIndex.video} alt={"activevideo"}/>
                <div className="activevideo__title">{videoDetailsIndex.title}</div>
                <div className="activevideo__block-bottom">
                    <div className="activevideo__block-bottomleft">
                        <div className="activevideo__channel">{videoDetailsIndex.channel}</div>
                        <div className="activevideo__timestamp">{new Date(videoDetailsIndex.timestamp).toLocaleDateString("en-US")}</div>
                    </div>
                    <div className="activevideo__block-bottomrright">
                        <div className="activevideo__views">
                            <img className="activevideos__views-icon" src={"../../assets/Icons/views.svg"} alt={"viewicon"}/>
                            <div className="activevideo__viewnumber">{videoDetailsIndex.views}</div>
                        </div>
                        <div className="activevideo__likes">
                        <img className="activevideos__likes-icon" src={"../../assets/Icons/likes.svg"} alt={"likesicon"}/>
                        <div className="activevideo__likesnumber">{videoDetailsIndex.likes}</div>
                        </div>
                    </div>
                </div>
                <div className="activevideo__description">{videoDetailsIndex.descrption}</div>
            </div>
        
        
    </section>

    
  )
}

export default Video;

