import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import {useState} from 'react';
import Comments from './components/Comments/Comments';
import videosDetailData from './data/video-details.json';
import videosData from './data/videos.json';


function App() {
  const [videosDetail, setvideosDetail]= useState(videosDetailData) 
  return (
    <>
    <Header/>
    <Video videosDetailData={videosDetailData}/>
    <Comments/>
    <nextVideos videosData={videosData}/>
    </>
  );
}

export default App;
