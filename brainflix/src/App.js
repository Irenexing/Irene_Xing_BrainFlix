import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import VideoDetails from './components/VideoDetails/VideoDetails';
import VideosList from './components/VideosList/VideosList';
import Comments from './components/Comments/Comments';
import CommentsList from './components/CommentsList/CommentsList';
import videosDetailData from './data/video-details.json';
import videosData from './data/videos.json';
import {useState} from 'react';

function App() {
  const [videosDetailId, setVideosDetail]= useState(videosDetailData[0]);
  console.log (videosDetailId);
  return (
    <>
    <Header/>
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

export default App;
