import './Home.scss';
import Video from './components/Video/Video';
import VideoDetails from './components/VideoDetails/VideoDetails';
import VideosList from './components/VideosList/VideosList';
import Comments from './components/Comments/Comments';
import CommentsList from './components/CommentsList/CommentsList';
import {useState} from 'react';

function Home() {
  const [videosDetailId, setVideosDetail]= useState(videosDetailData[0]);
  console.log (videosDetailId);
  return (
    <>
    <Video 
    videosDetailId={videosDetailId.id}
    setVideosDetail={setVideosDetail}
    />
    <div className="desktop-container">
    <div>
    <VideoDetails
    videosDetailId={videosDetailId.id}
    setVideosDetail={setVideosDetail}
    />
    <Comments/>
    <CommentsList 
    videosDetailId={videosDetailId}
    setVideosDetail={setVideosDetail}
    />
    </div>
    <div>
    <VideosList 
    videosDetailId={videosDetailId}
    setVideosDetail={setVideosDetail}
    />
    </div>
    </div>
    </>
  );
}

export default Home;