import {  HStack} from "@chakra-ui/react"; 
import {Switch} from '@/components/ui/switch'
import {useColorMode} from"@/components/ui/color-mode"


const ColorModeSwitch= () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
    <Switch
      id="dark-mode-switch"
      checked={colorMode === "dark"}
      onCheckedChange={toggleColorMode}
    />
    <label style={{ whiteSpace: "nowrap" }} htmlFor="dark-mode-switch">Dark Mode</label>
    </HStack>

  );
};

export default ColorModeSwitch;