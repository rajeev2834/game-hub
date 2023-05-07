import { useEffect, useState } from "react";
import { apiClient } from "../services/api-client";


interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    
        const [games, setGames] = useState<Game[]>([]);
        const [error, setError] = useState('');
    
        useEffect(() => {
            const controller = new AbortController();
            apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
                .then(response => setGames(response.data.results))
                .catch((error) => {
                    if(error.code === 'ERR_CANCELED') {
                        return;
                    }
                    setError(error.message)
                    });

            return () => controller.abort();
        }, []);

        return { games, error };
}

export default useGames;
