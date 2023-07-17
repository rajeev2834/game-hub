import { create } from "zustand";

import { Genre } from "./useGenres";
import { Platform } from "./useGames";

interface SearchStore{
    search: string,
    setSearchInput: (search: string) => void
}

export const useSearchStore = create<SearchStore>((set) => ({
    search: "",
    setSearchInput: (search: string) => set({ search }),
}));

interface GenreStore{
    genres: Genre | null,
    setGenres: (genres: Genre) => void,
}

export const useGenreStore = create<GenreStore>((set) => ({
    genres: null ,
    setGenres: (genres: Genre) => set({ genres }),
}));

interface PlatformStore{
    platforms: Platform | null,
    setPlatforms: (platforms: Platform) => void,
}

export const usePlatformStore = create<PlatformStore>((set) => ({
    platforms: null ,
    setPlatforms: (platforms: Platform) => set({ platforms }),
}));

interface SortOrderStore{
    sortSelector: string | null,
    setSortSelector: (sortOrder: string) => void,
}

export const useSortOrderStore = create<SortOrderStore>((set) => ({
    sortSelector: null ,
    setSortSelector: (sortSelector: string) => set({ sortSelector }),
}));