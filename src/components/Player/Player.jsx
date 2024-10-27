
const Player = ({player}) => {
    const {id, img, name, country, type, rating, batting_style, bowling_style, price } = player;
    return (
        <div>
            <div className="w-10/12 mx-auto">
                <img  src={img} alt="" />
                <h2>{name}</h2>
                <div className="flex justify-between border-b-2">
                    <p><small>{country}</small></p>
                    <p><small>{type}</small></p>
                </div>
                <p><small>Ratting: {rating}</small></p>
                <div className="flex justify-between">
                    <p><small>{batting_style}</small></p>
                    <p><small>{bowling_style}</small></p>
                </div>
                <div className="flex justify-between">
                    <p><small>Price: {price}</small> </p>
                    <button className="border text-sm p-1 rounded-xl">Chose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;