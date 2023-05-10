import {Menu, MenuButton, MenuItem, MenuList, Button} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

interface Props{
    onSelectSort: (order: string) => void;
    selectedSortOrder: string | null;
}
const sortSelector = ({onSelectSort, selectedSortOrder}: Props) => {
    const sortOrder = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Dated added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average rating'},
    ]

    const currentSortOrder = sortOrder.find(({value}) => value === selectedSortOrder);

    return (
        <>
            <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                Order by: {currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrder.map(({value, label}) => (
                    <MenuItem onClick={() => onSelectSort(value)} key={value} value={value}>{label}</MenuItem>
                ))}
            </MenuList>
            </Menu>
        </>
      )
}

export default sortSelector;