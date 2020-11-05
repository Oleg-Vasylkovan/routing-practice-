const NumberPage = props =>{
    return(
        <div>
        {isNaN(props.number)?
        <div> <h1 className="text-center">The word is:{props.number} </h1></div>:
            <div>
            <h1 className="text-center">The number is:{props.number}</h1>
            </div>}
        </div>
    );
}

export default NumberPage;