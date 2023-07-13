import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../services/api-client";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

interface FetchResponse<T>{
    count: number;
    results: T[];

}

const usePlatforms = () => {

    return useQuery<FetchResponse<Platform>, Error>({
        queryKey: ['platforms'],
        queryFn: () => {
            return apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents')
            .then((response) => response.data);
        },
        staleTime: 1000 * 60 * 5
    });

    /*const [platforms, setPlatforms] = useState<Platform[]>([]);
    const [error, setError] = useState('');
    const [isloading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<{results :Platform[]}>('/platforms/lists/parents', {
            signal: controller.signal
        }).then((response: AxiosResponse<{results: Platform[]}>) => {
            setPlatforms(response.data.results);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            if(error.code === 'ERR_CANCELED') {
                return;
            }
            setError(error.message);
        });
    },[]);
    return {platforms, error};*/
};

export default usePlatforms;