import { useEffect, useState } from "react";
import { apiClient } from "../services/api-client";
import { AxiosResponse } from "axios";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => {
    const [platforms, setPlatforms] = useState<Platform[]>([]);
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
    return {platforms, error};
}

export default usePlatforms;