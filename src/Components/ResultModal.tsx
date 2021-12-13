import { Center } from "@chakra-ui/layout";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalContent,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Store";
import { RESET } from "../Store/counterStatusReducer";
import Result from "../svg/result";

export default function ResultModal() {
  const [winner, setWinner] = useState("");
  const { status } = useSelector((state: RootState) => state.counterStatus);
  const { nameList } = useSelector((state: RootState) => state.nameList);
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch({ type: RESET });
  };

  useEffect(() => {
    if (status === "ended") {
      const randomIndex = Math.floor(Math.random() * nameList.length);

      setWinner(nameList[randomIndex].name);
    }
  }, [nameList, status]);
  return (
    <Modal
      isOpen={status === "ended"}
      onClose={handleReset}
      isCentered
      blockScrollOnMount
      closeOnOverlayClick
      closeOnEsc
    >
      <ModalOverlay />
      <ModalContent m="0px 20px">
        <ModalHeader>
          <Center mb="20px">
            <Result />
          </Center>
          <Center>抽獎結果</Center>
        </ModalHeader>
        <ModalBody>
          <Center textAlign="center">恭喜！得獎者為「{winner}」</Center>
        </ModalBody>
        <Button m="8px" colorScheme="teal" onClick={handleReset}>
          繼續
        </Button>
      </ModalContent>
    </Modal>
  );
}
