import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
// import VideosList from './components/VideosList/VideosList';
import Comments from './components/Comments/Comments';
import CommentsList from './components/CommentsList/CommentsList';
import videosDetailData from './data/video-details.json';
// import videosData from './data/videos.json';
import {useState} from 'react';

function App() {
  const [videosDetailId, setVideosDetail]= useState(videosDetailData[0]);
  // const [videosId, setVideosData]= useState(videosData[0].id);
  return (
    <>
    <Header/>
    <Video 
    videosDetailId={videosDetailId.id}
    setVideosDetail={setVideosDetail}
    />
    <Comments/>
    <CommentsList 
    videosDetailId={videosDetailId}
    setVideosDetail={setVideosDetail}
    />

    {/* <VideosList 
    videosId={videosId}
    setVideosData={setVideosData}
    /> */}
    </>
  );
}

export default App;
