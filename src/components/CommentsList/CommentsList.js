import './CommentsList.scss';


function CommentsList ({videosDetailId}) {
   
    return (
        <>
        {videosDetailId.comments.map((comments) => {
            return (
            <section className = "list__block" key={comments.timestamp}>
                <div className= "list__avatar"></div>
                <div className = "list__block-right">
                    <div className = "list__block-righttop">
                        <div className ="list__name">{comments.name}</div>
                        <div className ="list__date">{new Date(comments.timestamp).toLocaleDateString("en-US")}</div>
                     </div>
                    <p className="list__paragraph">{comments.comment}</p>
                </div>
            </section>
        )})

        }
        </>
    )}



  export default CommentsList;