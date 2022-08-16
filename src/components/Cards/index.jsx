import Card from "../Card";

const Cards = (props) => {
    console.log(props, 'props')
    const { info } = props;
    return (
        <div className="cards">
            {
                info.map((item, index) => {
                    return (
                        <Card key={index} text={item} />
                    )
                })
            }
        </div>
    )
}


export default Cards;