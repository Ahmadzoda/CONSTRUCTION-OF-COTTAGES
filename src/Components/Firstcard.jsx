 function Firstcard (props){
    return (
        <div className="firstcard">
            <div className="first-card">
                <div className="first-img"><img src={props.img} alt="" /></div>
                <div className="first-text"><h1>{props.text}</h1></div>

                <div className="first-texts">
                    <div className="first-left"><p>{props.lefttext}</p></div>
                    <div className="first-right"><p>{props.righttext}</p></div>
                </div>

                <div className="first-texts">
                    <div className="first-left"><p>{props.leftte}</p></div>
                    <div className="first-right"><p>{props.rightte}</p></div>
                </div>


                <div className="first-texts">
                    <div className="first-left"><p>{props.leftxt}</p></div>
                    <div className="first-right"><p>{props.rightxt}</p></div>
                </div>

                <div className="first-money"><h1>{props.money}</h1></div>
            </div>
        </div>
    )
 }

 export default Firstcard;