import Block from "./Block";
import { Center, Flex, Text } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { useDispatch, useSelector } from "react-redux";
import Person from "../svg/person";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Table, Tbody } from "@chakra-ui/table";
import { RootState } from "../Store";
import { ADD_NAME, GENERATE_NAMES, REMOVE_ALL } from "../Store/nameListReducer";
import NameRow from "./NameRow";
import { SimpleGrid, useToast } from "@chakra-ui/react";

export default function NameList() {
  const { nameList } = useSelector((state: RootState) => state.nameList);
  const { status } = useSelector((state: RootState) => state.counterStatus);
  const dispatch = useDispatch();
  const toast = useToast();
  const handleSubmitName = (e: any) => {
    const valueWithoutSpaces = e.target[0].value.replace(/\s/g, "");
    if (valueWithoutSpaces.length > 0) {
      e.preventDefault();
      dispatch({ type: ADD_NAME, payload: { name: e.target[0].value } });
      e.target[0].value = "";
    } else {
      e.preventDefault();
      toast({
        title: "請輸入有效名稱",
        status: "warning",
        isClosable: true,
      });
      e.target[0].value = "";
    }
  };

  const handleRemoveAll = () => {
    dispatch({ type: REMOVE_ALL });
  };
  return (
    <Block>
      <Flex justifyContent="space-between" w="100%">
        <Center w="64px" justifyContent="left">
          <Tag maxH="20px">
            <Person />
            <Text ml={1}>{nameList.length}</Text>
          </Tag>
        </Center>
        <Text
          fontSize={["2xl", "2xl", "3xl"]}
          fontWeight="bold"
          whiteSpace="nowrap"
        >
          抽獎名單
        </Text>
        <Center>
          <Button
            disabled={status !== "initial"}
            colorScheme="blue"
            maxH="24px"
            w="74px"
            onClick={() => {
              dispatch({ type: GENERATE_NAMES });
            }}
          >
            隨機帶入
          </Button>
        </Center>
      </Flex>

      <form style={{ width: "100%" }} onSubmit={handleSubmitName}>
        <SimpleGrid columns={[1, 2, 2]} mt="32px" spacing={1}>
          <Center>
            <Input
              placeholder="請輸入抽獎者名稱"
              w="100%"
              disabled={status !== "initial"}
            />
          </Center>
          <Flex w="100%" justifyContent="right" alignItems="center">
            <SimpleGrid
              columns={[1, 2, 2]}
              spacingY={3}
              spacingX={2}
              w="100%"
              mt={["8px", 0, 0]}
              ml={[0, "4px", "4px"]}
            >
              <Button
                colorScheme="green"
                type="submit"
                disabled={status !== "initial"}
                w={["100%", "100%", "100%"]}
              >
                新增
              </Button>
              <Button
                colorScheme="red"
                onClick={handleRemoveAll}
                disabled={status !== "initial"}
                w={["100%", "100%", "100%"]}
              >
                清空
              </Button>
            </SimpleGrid>
          </Flex>
        </SimpleGrid>
      </form>
      <Flex
        w="100%"
        maxH={["185px", "250px", "250px"]}
        overflow="scroll"
        mt="16px"
        border={nameList.length > 0 ? "1px solid #E2E8F0" : "none"}
        borderRadius="12px"
        visibility={nameList.length > 0 ? "visible" : "hidden"}
      >
        <Table variant="striped" colorScheme="teal">
          <Tbody>
            {nameList.map((nameData, index) => (
              <NameRow name={nameData.name} id={nameData.id} key={index} />
            ))}
          </Tbody>
        </Table>
      </Flex>
    </Block>
  );
}
