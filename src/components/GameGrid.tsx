import { Typography } from '@mui/material';
import useGames from '../hooks/useGames';

const GameGrid = () => {
    const {games, error} = useGames();

    return (
        <>
            {error && <Typography variant="h6">{error}</Typography>}
            <ol>
                {games.map(game =>
                    <li key={game.id}>{game.name}</li>
                    )}
            </ol>
        </>
      )
}

export default GameGrid;