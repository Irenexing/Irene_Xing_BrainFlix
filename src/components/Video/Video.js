import './Video.scss';
import { Link } from 'react-router-dom'

const Video = ({activeVideo}) => {
  const { id, image } = activeVideo;
    return (
      <Link to={`/video/${id}`}>
        <section className = "activevideo">
            <div className="activevideo__block">
              <video controls poster={image}>
                <source src="movie.mp4" type="video/mp4"/>
              </video>
            </div>
        </section>
    </Link>
  )
}

export default Video;

