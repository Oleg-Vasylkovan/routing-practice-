const WordWithColor = props =>{

    return(
        <div>
            <h1 className="text-center" style={{color:props.color, backgroundColor:props.bgc}}>{props.word}</h1>
        </div>
    );
}
export default WordWithColor;