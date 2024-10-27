import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import './Players.css'

const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('player.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])
    return (
        <div>
            <h2>Player: {players.length} </h2>

            <div className="grid lg:grid-cols-3 w-10/12 mx-auto gap-6 p-4">
                {
                    players.map(player => <Player key={player.id} player={player}></Player> )
                }
            </div>
        </div>
    );
};

export default Players;