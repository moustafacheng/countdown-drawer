import { Text } from "@chakra-ui/layout";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Store";

export default function Time() {
  const { hours, minutes, seconds } = useSelector(
    (state: RootState) => state.counter
  );
  const { status } = useSelector((state: RootState) => state.counterStatus);
  const isInitial = useMemo(() => status === "initial", [status]);
  const validHours = Number(minutes) > -1 ? hours : "00";
  const validMinutes = Number(minutes) > -1 ? minutes : "00";
  const validSeconds = Number(minutes) > -1 ? seconds : "00";

  return (
    <Text
      fontSize={["5xl", "6xl", "6xl"]}
      mt={isInitial ? "64px" : ["48px", "48px", "48px"]}
    >
      {validHours}:{validMinutes}:{validSeconds}
    </Text>
  );
}
