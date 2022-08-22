import './Comments.scss';


function Comments() {


  return (
    <>
      <section className="comment">
        <form className="form">
            <div className =" form__block">
                <img className="form__avatar"src={require("../../assets/Images/Mohan-muruge.jpg")} alt={"avatar"}/>
                 <div className="form__block-right">
                    <div className="form__block-right--tablet">
                        <label className="form__description">JOIN THE CONVERSATION</label>
                        <input className="form__box" type={"text"} name="comments" placeholder="Add a new comment"/>
                    </div>
                    <button className="form__button">COMMENT</button>
                </div>
             </div>
        </form>
      </section>
      </>
  );
}

export default Comments;
