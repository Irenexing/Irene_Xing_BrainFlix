import './VideoList.scss';

function VideoList({videosData}) {
    
    return (
    <section className = "videolist">
        <h2 className="videolist__header"> NEXT VIDEOS</h2>
        {videosData?.map ((video)=> {return (
            <div className="videolist__block">
            <img className="videolist__photo" src={video.image} alt="video-image"/>
            <div className="videolist__block-right">
                <div className="videolist__title">{video.title}</div>
                <div className="videolist__author">{video.channel}</div>
            </div>
        </div>
        )})}
        
    </section>
    )
}
export default VideoList;