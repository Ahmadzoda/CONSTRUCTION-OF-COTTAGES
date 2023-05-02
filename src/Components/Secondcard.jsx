function Secondcard (props){
    return(
        <div className="secondcard">
            <div className="second-card">
                <div className="seconds">
                    <div className="second-left">
                        <div className="second-text"><h1>{props.text}</h1></div>
                        <div className="second-title"><p>{props.title}</p></div>
                    </div>
                    <div className="second-right">
                        <div className="second-image"><img src={props.img} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Secondcard;