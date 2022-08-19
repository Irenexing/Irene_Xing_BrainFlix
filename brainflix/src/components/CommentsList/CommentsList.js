import './CommentsList.scss';

function CommentsList() {

return (
    <>
    <section className = "list__block">
        <div className = "list__block-left">
            <img className= "list__avatar"/>
        </div>
        <div className = "list__block-right">
            <div className = "list__block-righttop">
                <div className ="list__name"></div>
                <div className ="list__date">
let newDate = new Date(videoDetails[i].timestamp);
date.innerText = newDate.toLocaleDateString("en-US");
                </div>
                <p className="list__paragraph"></p>
            </div>
        </div>
    </section>
    </>
)

}

  export default CommentsList;