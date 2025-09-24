import { Input, InputGroup,  } from '@chakra-ui/react';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
const SearchInput = () => {
  return (
    <InputGroup flex="1" startElement={<BsSearch />} >
      <Input  paddingLeft ={2} borderRadius={20} placeholder="Search games..." />
    </InputGroup>
  );
};

export default SearchInput;