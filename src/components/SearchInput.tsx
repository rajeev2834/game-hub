import {useRef} from 'react';
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";


interface Props{
    onSearch: (value: string) => void;
}

const SearchInput = ({onSearch}: Props) => {

    /* here is single input element form. So, using 
        useRef hook instead of react hook form.*/

    const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if(ref.current) {
        ref.current.focus();
        onSearch(ref.current.value);
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