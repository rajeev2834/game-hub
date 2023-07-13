import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../services/api-client";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

interface FetchGenreResponse{
    count: number;
    results: Genre[];

}
const useGeneres = () => {

    return useQuery<FetchGenreResponse, Error>({
        queryKey: ['genres'],
        queryFn: () => {
            return apiClient.get<FetchGenreResponse>('/genres')
            .then((response) => response.data );
        }, 
        staleTime: 1000 * 60 * 5,
    });
    
    /*const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isloading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchGenreResponse>('/genres', { signal: controller.signal })
            .then((response) => {
                setGenres(response.data.results);
                setLoading(false);})
            .catch((error) => {
                setLoading(false);
                if(error.code === 'ERR_CANCELED') {
                    return;
                }
                setError(error.message)
                });

        return () => controller.abort();
    }, []);

    return { genres, error, isloading};*/
};

export default useGeneres;