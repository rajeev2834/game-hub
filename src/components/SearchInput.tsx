import {useRef} from 'react';
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useSearchStore } from '../hooks/store';


const SearchInput = () => {

    /* here is single input element form. So, using 
        useRef hook instead of react hook form.*/

    const ref = useRef<HTMLInputElement>(null);
    const store = useSearchStore();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if(ref.current) {
        ref.current.focus();
        store.setSearchInput(ref.current.value);
      }
    }}>
        <InputGroup>
            <InputLeftElement children={<BsSearch />} />
            <Input ref={ref} borderRadius={20} placeholder="Search..."  variant={"filled"}/>
        </InputGroup>
    </form>
  )
}

export default SearchInput;