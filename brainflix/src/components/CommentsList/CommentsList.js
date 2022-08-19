import './CommentsList.scss';

import videosDetailData from '../../data/video-details.json';

const CommentsList = ({videosDetailId}) => {
    let CommentsIndex = videosDetailData.find(comments => comments.id===videosDetailId);

return (
    <section className = "list__block">
            <img className= "list__avatar" alt="avatar"/>
        <div className = "list__block-right">
            <div className = "list__block-righttop">
                <div className ="list__name">{CommentsIndex.comments.name}</div>
                <div className ="list__date">{new Date(CommentsIndex.comments.timestamp).toLocaleDateString("en-US")}</div>
            </div>
                <p className="list__paragraph">{CommentsIndex.comments.comment}</p>
        </div>
    </section>
)

}

  export default CommentsList;