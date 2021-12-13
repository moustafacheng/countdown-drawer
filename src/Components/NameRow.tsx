import { HStack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { useDispatch, useSelector } from "react-redux";

import { Td, Tr } from "@chakra-ui/table";
import { useState } from "react";
import Remove from "../svg/remove";
import { RootState } from "../Store";
export default function NameRow({ name, id }: { name: string; id: string }) {
  const [hovered, setHovered] = useState(false);
  const { status } = useSelector((state: RootState) => state.counterStatus);
  const dispatch = useDispatch();
  return (
    <Tr
      h="48px"
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <Td borderBottom="none">
        <HStack justifyContent="space-between">
          <div>{name}</div>

          <chakra.button
            visibility={["visible", "visible", hovered ? "visible" : "hidden"]}
            display={status !== "initial" ? "none" : "initial"}
            onClick={() => {
              dispatch({ type: "REMOVE_NAME", payload: { id: id } });
            }}
          >
            <Remove />
          </chakra.button>
        </HStack>
      </Td>
    </Tr>
  );
}
