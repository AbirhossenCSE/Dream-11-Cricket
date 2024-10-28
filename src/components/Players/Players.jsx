import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import './Players.css'

// const Players = () => {
//     const [players, setPlayers] = useState([]);
//     const [selectedPlayers, setSelectedPlayers] = useState([]);
//     const [showSelected, setShowSelected] = useState(false);

//     useEffect(() => {
//         fetch('player.json')
//             .then(res => res.json())
//             .then(data => setPlayers(data))
//     }, []);

//     // Function to add player to selected list
//     const handleSelectPlayer = (player) => {
//         if (!selectedPlayers.some(selected => selected.id === player.id)) {
//             setSelectedPlayers([...selectedPlayers, player]);
//         }
//     };

//     // Function to toggle between showing all or selected players
//     const toggleShowSelected = () => {
//         setShowSelected(!showSelected);
//     };

//     // Display players based on selection status
//     const displayedPlayers = showSelected ? selectedPlayers : players;

//     return (
//         <div>
//             <div className="w-10/12 mx-auto flex justify-between my-5">
//                 <h2>Player: {displayedPlayers.length}</h2>
//                 <div className="gap-5">
//                     <button 
//                         onClick={() => setShowSelected(false)} 
//                         className="border-2 p-2 rounded-xl"
//                     >
//                         Available
//                     </button>
//                     <button 
//                         onClick={toggleShowSelected} 
//                         className="ml-4 border-2 p-2 rounded-xl"
//                     >
//                         Selected
//                     </button>
//                 </div>
//             </div>

//             <div className="grid lg:grid-cols-3 w-10/12 mx-auto gap-4 p-4">
//                 {
//                     displayedPlayers.map(player => 
//                         <Player 
//                             key={player.id} 
//                             player={player} 
//                             onSelect={() => handleSelectPlayer(player)} 
//                         />
//                     )
//                 }
//             </div>
//         </div>
//     );
// };

const Players = () => {
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
                        className={`border-2 p-2 rounded-xl ${!showSelected ? "bg-gray-200" : ""}`}
                    >
                        Available
                    </button>
                    <button 
                        onClick={toggleShowSelected} 
                        className={`ml-4 border-2 p-2 rounded-xl ${showSelected ? "bg-gray-200" : ""}`}
                    >
                        Selected
                    </button>
                </div>
            </div>

            {/* Selected Players List */}
            {showSelected && (
                <div className="selected-players-list w-10/12 mx-auto mb-4 p-4 border-2 rounded-xl">
                    <h3 className="text-lg font-bold">Selected Players</h3>
                    <ul>
                        {selectedPlayers.map(player => (
                            <li key={player.id} className="flex justify-between items-center p-2 border-b">
                                <div>

                                    <div>
                                        <p className="font-bold">{player.name}</p>
                                        <p>{player.batting_style}</p>
                                    </div>
                                </div>
                                
                                <button 
                                    onClick={() => handleRemovePlayer(player.id)} 
                                    className="text-red-500"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Display full player card only if not in selected view */}
            <div className={`grid lg:grid-cols-3 w-10/12 mx-auto gap-4 p-4 ${showSelected ? "hidden" : ""}`}>
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
        </div>
    );
};

export default Players;