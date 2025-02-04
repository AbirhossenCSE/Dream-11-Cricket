import Swal from 'sweetalert2';

const Player = ({ player, onSelect, isSelected, canSelectMore, coinCount }) => {
    const { img, name, country, type, rating, batting_style, bowling_style, price } = player;

    const handleSelectPlayer = () => {
        // Check if the player price is greater than the available coins
        if (price > coinCount) {
            Swal.fire({
                title: 'Insufficient Balance',
                text: 'You do not have enough coins to select this player.',
                icon: 'error',
                confirmButtonText: 'Okay',
            });
            return;
        }

        if (!isSelected && canSelectMore) {
            onSelect();
            Swal.fire({
                title: 'Player Selected!',
                text: `You have successfully selected ${name}.`,
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
            });
        }
    };

    return (
        <div>
            <div className="w-12/12 mx-auto rounded-xl">
                <img className='rounded-lg' src={img} alt={name} />
                <div className="p-2">
                    <div className="flex items-center">
                        <img src="https://img.icons8.com/?size=25&id=ywULFSPkh4kI&format=png&color=000000" alt="" />
                        <h2 className="pt-2 ml-2 font-bold">{name}</h2>
                    </div>
                    <div className="flex justify-between border-b-2">
                        <p className="flex p-2 items-center">
                            <small>
                                <img src="https://img.icons8.com/?size=13&id=2754&format=png&color=000000" alt="" />
                            </small>
                            <small className="items-center ml-1 pb-1">{country}</small>
                        </p>
                        <p><small>{type}</small></p>
                    </div>
                    <div className='p-2 space-y-1'>
                        <p className="font-bold"><small>Rating: {rating}</small></p>
                        <div className="flex justify-between ">
                            <p><small>{batting_style}</small></p>
                            <p><small>{bowling_style}</small></p>
                        </div>
                        <div className="flex justify-between">
                            <p><small>Price: ${price}</small></p>
                            <button
                                onClick={handleSelectPlayer}
                                className={`bg-gray-300 text-sm p-2 rounded-xl ${isSelected ? 'bg-green-400' : ''}`}
                                disabled={isSelected || !canSelectMore}
                            >
                                {isSelected ? 'Selected' : 'Choose Player'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;


