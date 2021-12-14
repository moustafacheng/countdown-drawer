import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import {
  Flex,
  InputRightElement,
  Tabs,
  Tab,
  TabList,
  Button,
  CircularProgress,
} from "@chakra-ui/react";
import Block from "./Block";
import Time from "./Time";
import { RootState } from "../Store";
import { Box, Center, Text } from "@chakra-ui/layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef } from "react";
import { END, PAUSE, START } from "../Store/counterStatusReducer";
import { convertToMinutes, convertToSeconds } from "../utils/time";
import { CHANGE_TIME, CHANGE_MODE, COUNTDOWN } from "../Store/counterReducer";
import { SET_TARGET_TIME } from "../Store/targetTimeReducer";

export default function Counter() {
  // const [targetTime, setTargetTime] = useState(0);
  const { mode, hours, minutes, seconds } = useSelector(
    (state: RootState) => state.counter
  );
  const { nameList } = useSelector((state: RootState) => state.nameList);
  const { status } = useSelector((state: RootState) => state.counterStatus);
  const { targetTime } = useSelector((state: RootState) => state.targetTime);
  const time = convertToSeconds({ hours, minutes, seconds });
  const numberInvalid = useMemo(() => Number(time) < 1, [time]);
  const listIsEmpty = useMemo(() => !nameList.length, [nameList]);
  const dispatch = useDispatch();
  let interval = useRef<any>();
  const modeIndex = mode === "min" ? 0 : 1;
  const handleModeChange = (index: number) => {
    if (index === 0) {
      dispatch({ type: CHANGE_MODE, payload: "min" });
    } else {
      dispatch({ type: CHANGE_MODE, payload: "sec" });
    }
  };
  const handleIncrement = () => {
    dispatch({ type: CHANGE_TIME, payload: { operation: "increment" } });
  };
  const handleDecrement = () => {
    dispatch({ type: CHANGE_TIME, payload: { operation: "decrement" } });
  };
  const handleChangeTime = (number: number) => {
    dispatch({ type: CHANGE_TIME, payload: { value: number } });
  };

  useEffect(() => {
    if (status === "started") {
      interval.current = setInterval(() => {
        if (time <= 1) {
          dispatch({
            type: COUNTDOWN,
          });
          clearInterval(interval.current);
          dispatch({ type: END });
        } else {
          dispatch({
            type: COUNTDOWN,
          });
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [dispatch, status, time]);

  return (
    <Block>
      <Text mb={4} fontSize={["2xl", "2xl", "3xl"]} fontWeight="bold">
        倒數時間
      </Text>

      {status === "initial" ? (
        <Box>
          <Center h="48px">
            <Tabs
              variant="soft-rounded"
              colorScheme="red"
              index={modeIndex}
              onChange={handleModeChange}
            >
              <TabList>
                <Tab>分鐘</Tab>
                <Tab>秒</Tab>
              </TabList>
            </Tabs>
          </Center>
          <Flex height="92px" justify="center" align="center">
            <NumberInput
              mr={["12px", "12px", "16px"]}
              value={
                mode === "min"
                  ? convertToMinutes({ hours, minutes })
                  : convertToSeconds({ hours, minutes, seconds })
              }
            >
              <NumberInputField
                onChange={(e) => {
                  if (isNaN(Number(e.target.value))) return;
                  handleChangeTime(Number(e.target.value));
                }}
              />
              <NumberInputStepper>
                <NumberIncrementStepper onClick={handleIncrement} />
                <NumberDecrementStepper onClick={handleDecrement} />
              </NumberInputStepper>
              <InputRightElement mr={8}>
                {mode === "min" ? "分鐘" : "秒"}
              </InputRightElement>
            </NumberInput>
            <Button
              disabled={numberInvalid || listIsEmpty}
              onClick={() => {
                dispatch({ type: START });
                //
                dispatch({ type: SET_TARGET_TIME, payload: time });
              }}
            >
              開始
            </Button>
          </Flex>
        </Box>
      ) : (
        <Flex
          direction="column"
          w="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Center w="301px" minW="40px" maxW="100%">
            <CircularProgress
              value={(time / targetTime) * 100}
              color="teal"
              thickness="12px"
            />
          </Center>
          <Center h={["92px"]}>
            <Button
              mr={5}
              w="84px"
              onClick={() => {
                if (status === "paused") {
                  dispatch({ type: START });
                }
                if (status === "started") {
                  dispatch({ type: PAUSE });
                }
              }}
              colorScheme={status === "paused" ? "green" : "orange"}
            >
              {status === "paused" ? "繼續" : "暫停"}
            </Button>
            <Button
              w="84px"
              onClick={() => {
                dispatch({ type: END });
              }}
              colorScheme="red"
            >
              結束
            </Button>
          </Center>
        </Flex>
      )}
      <Center height="100%">
        <Time />
      </Center>
    </Block>
  );
}
