import { useEffect, useState } from "react";
import Player from "../Player/Player";
import './Players.css';
import Swal from "sweetalert2";

const Players = ({ coinCount, setCoinCount }) => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [showSelected, setShowSelected] = useState(false);

    useEffect(() => {
        fetch('player.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);

    const handleSelectPlayer = (player) => {
        if (player.price > coinCount) {
            Swal.fire({
                title: 'Insufficient Balance',
                text: 'You do not have enough coins to select this player.',
                icon: 'error',
                confirmButtonText: 'Okay',
            });
            return;
        }

        if (selectedPlayers.length < 6 && !selectedPlayers.some(selected => selected.id === player.id)) {
            setSelectedPlayers([...selectedPlayers, player]);
            setCoinCount(coinCount - player.price);
        }
    };

    const handleRemovePlayer = (playerId) => {
        const playerToRemove = selectedPlayers.find(player => player.id === playerId);
        if (playerToRemove) {
            setSelectedPlayers(selectedPlayers.filter(selected => selected.id !== playerId));
            setCoinCount(coinCount + playerToRemove.price);
        }
    };

    const toggleShowSelected = () => {
        setShowSelected(!showSelected);
    };

    const displayedPlayers = showSelected ? selectedPlayers : players;

    return (
        <div>
            <div className="w-10/12 mx-auto flex justify-between my-5">
                <h2>Player: {displayedPlayers.length}</h2>
                <div className="gap-5">
                    <button 
                        onClick={() => setShowSelected(false)} 
                        className={`border-2 p-2 rounded-xl ${!showSelected ? "bg-yellow-300" : ""}`}
                    >
                        Available
                    </button>
                    <button 
                        onClick={toggleShowSelected} 
                        className={`ml-4 border-2 p-2 rounded-xl ${showSelected ? "bg-yellow-300" : ""}`}
                    >
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>

            {showSelected && (
                <div className="selected-players-list w-10/12 mx-auto mb-4 border-2 rounded-xl">
                    <h3 className="text-lg font-bold mb-2">Selected Players ({selectedPlayers.length} / 6)</h3>
                    <ul>
                        {selectedPlayers.map(player => (
                            <li key={player.id} className="flex justify-between items-center p-2 border-2 mb-2 rounded-xl">
                                <div className="flex gap-2">
                                    <div className="p-2">
                                        <img className="w-16" src={player.img} alt="Player" />
                                    </div>
                                    <div>
                                        <p className="font-bold">{player.name}</p>
                                        <p>{player.batting_style}</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => handleRemovePlayer(player.id)} 
                                    className="text-red-500"
                                >
                                    <img src="https://img.icons8.com/?size=40&id=102350&format=png&color=000000" alt="Remove" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className={`grid lg:grid-cols-3 w-10/12 mx-auto gap-4 ${showSelected ? "hidden" : ""}`}>
                {displayedPlayers.map(player => 
                    <Player 
                        key={player.id} 
                        player={player} 
                        onSelect={() => handleSelectPlayer(player)} 
                        isSelected={selectedPlayers.some(selected => selected.id === player.id)} 
                        canSelectMore={selectedPlayers.length < 6}
                        coinCount={coinCount}
                    />
                )}
            </div>
            <div className="w-10/12 mx-auto">
                <button 
                    onClick={() => setShowSelected(false)} 
                    className={`border-2 p-2 ml-12 rounded-xl bg-yellow-300`}
                >
                    Add More Players
                </button>
            </div>
        </div>
    );
};

export default Players;

