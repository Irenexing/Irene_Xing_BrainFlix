import './CommentsList.scss';


function CommentsList ({videosDetailId}) {
    console.log (videosDetailId.comments)
    return (
        <>
        {videosDetailId.comments.map((comments) => {
            return (
            <section className = "list__block" key={comments.timestamp}>
                <img className= "list__avatar" alt="avatar"/>
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


    // const list = ({videosDetailId}) =>  (
    //     <div>
    //         {videosDetailId.map ((comments) => {
    //         <section className = "list__block">
    //     <img className= "list__avatar" alt="avatar"/>
    // <div className = "list__block-right">
    //     <div className = "list__block-righttop">
    //          <div className ="list__name">{comments.name}</div>
    //         <div className ="list__date">{new Date(comments.timestamp).toLocaleDateString("en-US")}</div>
    //     </div>
    //     <p className="list__paragraph">{comments.comment}</p>
    // </div>
    // </section>})}
    //     </div>)
         
    // return (
    //     <div>{list}</div>
    // );
    
    // }

  export default CommentsList;