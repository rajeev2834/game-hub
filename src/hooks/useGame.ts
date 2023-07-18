import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../services/api-client";
import { Game } from "./useGames";

const useGame = (slug: string) => useQuery<Game, Error>({
    queryKey: ['games', slug],
    queryFn: () => {return apiClient.get<Game>(`/games/${slug}`)
    .then((response) => {
        return response.data;
    });
},
staleTime: 1000 * 60 * 5,
});

export default useGame;