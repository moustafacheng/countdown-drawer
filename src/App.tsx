import { ChakraProvider } from "@chakra-ui/react";
import Counter from "./Components/Counter";
import { Center, Flex, Text } from "@chakra-ui/layout";
import { SimpleGrid } from "@chakra-ui/react";
import NameList from "./Components/NameList";
import ResultModal from "./Components/ResultModal";

const App = () => {
  return (
    <ChakraProvider>
      <Center>
        <Flex
          direction="column"
          justify="center"
          align="center"
          pt={["24px", "24px", "50px"]}
        >
          <Text fontSize={["2xl", "2xl", "3xl"]} fontWeight="bold">
            抽獎小工具
          </Text>
          <SimpleGrid columns={[1, 1, 2]} spacing={10} p={5}>
            <Counter />
            <NameList />
          </SimpleGrid>
        </Flex>
      </Center>
      <ResultModal />
    </ChakraProvider>
  );
};

export default App;
