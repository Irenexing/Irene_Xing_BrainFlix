import './VideoDetails.scss';
import { Link } from 'react-router-dom';

const VideoDetails = ({ activeVideo }) => {

    return (
        <Link to = {`/video/${activeVideo.id}`}>
            <section className = "activevideo">
                <div className="activevideo__block">
                    <div className="activevideo__title">{activeVideo.title}</div>
                    <div className="activevideo__block-bottom">
                        <div className="activevideo__block-bottomleft">
                            <div className="activevideo__channel">By {activeVideo.channel}</div>
                            <div className="activevideo__timestamp">{new Date(activeVideo.timestamp).toLocaleDateString("en-US")}</div>
                        </div>
                        <div className="activevideo__block-bottomright">
                            <div className="activevideo__views">
                             <img className="activevideo__views-icon" src={require("../../assets/Icons/views.svg").default} alt={"viewicon"}/>
                             <div className="activevideo__viewsnumber">{activeVideo.views}</div>
                             </div>
                        <div className="activevideo__likes">
                        <img className="activevideo__likes-icon" src={require("../../assets/Icons/likes.svg").default} alt={"likesicon"}/>
                        <div className="activevideo__likesnumber">{activeVideo.likes}</div>
                        </div> 
                    </div>
                </div>
                <div className="activevideo__description">{activeVideo.description}</div> 
            </div>
        
    </section>
    </Link>
    
  )
}

export default VideoDetails;