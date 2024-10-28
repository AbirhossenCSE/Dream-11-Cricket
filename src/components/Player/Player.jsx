
// const Player = ({player, onSelect}) => {
//     const {id, img, name, country, type, rating, batting_style, bowling_style, price } = player;
//     return (
//         <div>
//             <div className="w-10/12 mx-auto p-2 border-2 border-black ">
//                 <img  src={img} alt="" />
//                 <div className="p-2">
//                     <div className="flex items-center">
//                         <img src="https://img.icons8.com/?size=25&id=ywULFSPkh4kI&format=png&color=000000" alt="" />
//                         <h2 className="pt-2 ml-2" >{name}</h2>
//                     </div>
//                     <div className="flex justify-between border-b-2">
//                         <p className="flex"><small><img src="https://img.icons8.com/?size=13&id=2754&format=png&color=000000" alt="" /></small> <small className="items-center ml-1 pb-1">{country}</small></p>
//                         <p><small>{type}</small></p>
//                     </div>
//                     <p className="font-bold"><small>Ratting: {rating}</small></p>
//                     <div className="flex justify-between">
//                         <p><small>{batting_style}</small></p>
//                         <p><small>{bowling_style}</small></p>
//                     </div>
//                     <div className="flex justify-between">
//                         <p><small>Price: ${price}</small> </p>
//                         <button onClick={onSelect} className="border text-sm p-1 rounded-xl">Chose Player</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
const Player = ({ player, onSelect, isSelected, canSelectMore }) => {
    const { img, name, country, type, rating, batting_style, bowling_style, price } = player;

    return (
        <div>
            <div className="w-10/12 mx-auto p-2 border-2 border-black">
                <img src={img} alt={name} />
                <div className="p-2">
                    <div className="flex items-center">
                        <img src="https://img.icons8.com/?size=25&id=ywULFSPkh4kI&format=png&color=000000" alt="" />
                        <h2 className="pt-2 ml-2">{name}</h2>
                    </div>
                    <div className="flex justify-between border-b-2">
                        <p className="flex">
                            <small>
                                <img src="https://img.icons8.com/?size=13&id=2754&format=png&color=000000" alt="" />
                            </small>
                            <small className="items-center ml-1 pb-1">{country}</small>
                        </p>
                        <p><small>{type}</small></p>
                    </div>
                    <p className="font-bold"><small>Rating: {rating}</small></p>
                    <div className="flex justify-between">
                        <p><small>{batting_style}</small></p>
                        <p><small>{bowling_style}</small></p>
                    </div>
                    <div className="flex justify-between">
                        <p><small>Price: ${price}</small></p>
                        <button 
                            onClick={onSelect} 
                            className={`border text-sm p-1 rounded-xl ${isSelected ? 'bg-green-400' : ''}`} 
                            disabled={isSelected || !canSelectMore}
                        >
                            {isSelected ? 'Selected' : 'Chose Player'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;