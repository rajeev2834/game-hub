import {Menu, MenuButton, MenuItem, MenuList, Button} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import { useSortOrderStore } from "../hooks/store";



const sortSelector = () => {

    const {sortSelector, setSortSelector} = useSortOrderStore();

    const sortOrder = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Dated added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average rating'},
    ]

   
    const currentSortOrder = sortOrder.find(({value}) => value === sortSelector);

    return (
        <>
            <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                Order by: {currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrder.map(({value, label}) => (
                    <MenuItem onClick={() => setSortSelector(value)} key={value} value={value}>{label}</MenuItem>
                ))}
            </MenuList>
            </Menu>
        </>
      )
}

export default sortSelector;