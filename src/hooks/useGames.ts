import { useEffect, useState } from "react";
import { apiClient } from "../services/api-client";
import { Genre } from "./useGenres";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {
        platform: Platform;
    }[];
    metacritic: number;
    rating_top: number;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = (selectedGenre : Genre | null, selectedPlatform : Platform | null, 
    selectedSortOrder : string | null, searchInput : string | null) => {
    
        const [games, setGames] = useState<Game[]>([]);
        const [error, setError] = useState('');
        const [isloading, setLoading] = useState(false);
    
    
        useEffect(() => {
            const controller = new AbortController();
            setLoading(true);
            apiClient.get<FetchGamesResponse>('/games', {
                params: {
                genres: selectedGenre?.id,
                platforms: selectedPlatform?.id,
                ordering: selectedSortOrder,
                search: searchInput,
            }, 
            signal: controller.signal})
                .then((response) => {
                    setGames(response.data.results);
                    setLoading(false);})
                .catch((error) => {
                    setLoading(false);
                    if(error.code === 'ERR_CANCELED') {
                        return;
                    }
                    setError(error.message)
                    });

            return () => controller.abort();
        }, [selectedGenre?.id, selectedPlatform?.id, selectedSortOrder, searchInput]);

        return { games, error, isloading};
}

export default useGames;
