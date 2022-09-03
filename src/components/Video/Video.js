import './Video.scss';
import { Link } from 'react-router-dom'

const Video = ({activeVideo}) => {
  const { id, image } = activeVideo;

    return (

        <section className = "activevideo">
            <div className="activevideo__block">
              <video controls poster={image}>
                <source src="movie.mp4" type="video/mp4"/>
              </video>
            </div>
        </section>

  )
}

export default Video;

