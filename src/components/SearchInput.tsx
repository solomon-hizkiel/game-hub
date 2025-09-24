import { Input, InputGroup,  } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({onSearch}: Props) => {
  const ref=useRef<HTMLInputElement>(null)
  return (
    <form style={{ display: "flex", width: "100%" }} onSubmit={(event) => { event.preventDefault();
      if(ref.current)onSearch(ref.current.value)
      
    }}>

    <InputGroup flex="1" startElement={<BsSearch />} >
      <Input ref={ref} paddingLeft ={2} borderRadius={20} placeholder="Search games..." />
    </InputGroup>
    </form>
  );
};

export default SearchInput;