import {  HStack, SwitchContext} from "@chakra-ui/react"; 
import {Switch} from '@/components/ui/switch'
import {useColorMode} from"@/components/ui/color-mode"


const ColorModeSwitch= () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch colorScheme="green"
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
        // colorScheme="green" // Optional: Set the switch color to green
      ></Switch>
    </HStack>

  );
};

export default ColorModeSwitch;