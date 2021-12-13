import { Flex, Stack } from "@chakra-ui/layout";
export default function Block({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: React.CSSProperties;
}) {
  return (
    <Stack
      h="480px"
      style={styles}
      spacing={0}
      borderRadius={16}
      border="1px solid #E2E8F0"
      boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
      p={["32px 16px", "48px 48px", "48px 48px"]}
    >
      <Flex direction="column" align="center">
        {children}
      </Flex>
    </Stack>
  );
}
