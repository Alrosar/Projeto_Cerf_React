const Card = (props) => {
    console.log(props)
    const { text } = props;


    return (
        <div>{text}</div>
    )
}


export default Card;