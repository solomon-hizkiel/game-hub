import { Grid, Text, GridItem,Show,useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useColorMode } from "./components/ui/color-mode";
import GameGrid from "./components/GameGrid";


function App() {
  const isLargerThanLg = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" " main"`,
        lg: `"nav nav" "aside main"`, //for large screens devices
      }}
    >
      <GridItem area="nav" boxSize="60px">
        <NavBar /> 
      </GridItem>
      {isLargerThanLg && (
        <GridItem area="aside">
          Aside
        </GridItem>
      )}
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
