import './Home.scss';
import Video from '../../components/Video/Video';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import VideosList from '../../components/VideosList/VideosList';
import Comments from '../../components/Comments/Comments';
import CommentsList from '../../components/CommentsList/CommentsList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function Home () {

  const [videos, setVideos] = useState([]);

  const [activeVideo, setActiveVideo] = useState(null);

  const { videoId } = useParams ();
  const url = "https://project-2-api.herokuapp.com";
  const apikey = "?api_key=9d0ecb60-9503-43b0-91a2-bdf14a7eb4d7";
  
  useEffect(() => {
      axios.get(`${url}/videos/${apikey}`)
      .then(res => {
        setVideos(res.data);
          }).catch(err => {
          console.log(err)
           })
          },[]);
  
    const activeVideoId = videoId || videos[0]?.id;
 
    useEffect(() => {
      if (activeVideoId) {
      axios.get(`${url}/videos/${activeVideoId}${apikey}`)
      .then(res => {
        setActiveVideo(res.data);
        }).catch(err => {
          console.log(err)
      })}
    },[activeVideoId])

    if (videos === null || activeVideo === null) {
      return <main className="loading">Loading...</main>;
    }

  return (
    <>
    <Video 
    activeVideo={activeVideo}
    setActiveVideo={setActiveVideo}
    />
    <div className="desktop-container">
    <div>
    <VideoDetails
    activeVideo={activeVideo}
    setActiveVideo={setActiveVideo}
    />
    <Comments/>
    <CommentsList 
    activeVideo={activeVideo}
    setActiveVideo={setActiveVideo}
    />
    </div>
    <div>
    <VideosList 
    videos={videos}
    activeVideo={activeVideo}
    />
    </div>
    </div>
    </>
  );
}

export default Home;