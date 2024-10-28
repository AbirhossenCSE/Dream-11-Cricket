import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import './Players.css'

const Players = ({ coinCount, setCoinCount }) => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [showSelected, setShowSelected] = useState(false);

    useEffect(() => {
        fetch('player.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);

    // Function to add player to selected list
    const handleSelectPlayer = (player) => {
        if (selectedPlayers.length < 6 && !selectedPlayers.some(selected => selected.id === player.id)) {
            setSelectedPlayers([...selectedPlayers, player]);
        }
    };

    // Function to remove player from selected list
    const handleRemovePlayer = (playerId) => {
        setSelectedPlayers(selectedPlayers.filter(selected => selected.id !== playerId));
    };

    // Toggle between showing all or selected players
    const toggleShowSelected = () => {
        setShowSelected(!showSelected);
    };

    // Display players based on selection status
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
                        Selected ({showSelected.length})
                    </button>
                </div>
            </div>

            {/* Selected Players List */}
            {showSelected && (
                <div className="selected-players-list w-10/12 mx-auto mb-4 border-2 rounded-xl">
                    <h3 className="text-lg font-bold mb-2">Selected Players ({displayedPlayers.length} / 6) </h3>
                    <ul>
                        {selectedPlayers.map(player => (
                            <li key={player.id} className="flex justify-between items-center p-2 border-2 mb-2 rounded-xl">
                                <div className="flex gap-2">
                                    <div className="p-2">
                                        <img className="w-16" src={player.img} alt="" />
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
                                    <img src="https://img.icons8.com/?size=40&id=102350&format=png&color=000000" alt="" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Display full player card only if not in selected view */}
            <div className={`grid lg:grid-cols-3 w-10/12 mx-auto gap-4 ${showSelected ? "hidden" : ""}`}>
                {displayedPlayers.map(player => 
                    <Player 
                        key={player.id} 
                        player={player} 
                        onSelect={() => handleSelectPlayer(player)} 
                        isSelected={selectedPlayers.some(selected => selected.id === player.id)} 
                        canSelectMore={selectedPlayers.length < 6}
                    />
                )}
            </div>
            <div className="w-10/12 mx-auto">
                <button 
                    onClick={() => setShowSelected(false)} 
                    className={`border-2 p-2 ml-12 rounded-xl bg-yellow-300`}
                    >
                    Add More Player
                </button>
            </div>
        </div>
    );
};

export default Players;

