import { useEffect, useState } from "react";
import { apiClient } from "../services/api-client";
import { Genre } from "./useGenres";
import { useQuery } from "@tanstack/react-query";

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

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useGames = (selectedGenre : Genre | null, selectedPlatform : Platform | null, 
    selectedSortOrder : string | null, searchInput : string | null) => {

        return useQuery<FetchResponse<Game>, Error> ({
            queryKey: ['games', selectedGenre?.id, selectedPlatform?.id, selectedSortOrder, searchInput],
            queryFn: () => {
                return apiClient.get<FetchResponse<Game>>('/games', {
                    params: {
                        genres: selectedGenre?.id,
                        parent_platforms: selectedPlatform?.id,
                        ordering: selectedSortOrder,
                        search: searchInput,
                    },
                }).then((response) => {
                    return response.data;
                });
            },
            staleTime: 1000 * 60 * 5,
        });
        /*const [games, setGames] = useState<Game[]>([]);
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

        return { games, error, isloading};*/
}

export default useGames;
