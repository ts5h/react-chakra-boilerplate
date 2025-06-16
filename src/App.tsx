import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import viteLogo from "@/assets/vite.svg";
import reactLogo from "@/assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <VStack gap={8} align="center" justify="center" minH="100vh" p={8}>
      <HStack gap={6}>
        <Link href="https://vite.dev" target="_blank" rel="noreferrer">
          <Image
            src={viteLogo}
            alt="Vite logo"
            h="24"
            transition="all 0.3s"
            _hover={{ transform: "scale(1.1)" }}
          />
        </Link>
        <Link href="https://react.dev" target="_blank" rel="noreferrer">
          <Image
            src={reactLogo}
            alt="React logo"
            h="24"
            transition="all 0.3s"
            _hover={{ transform: "scale(1.1)" }}
          />
        </Link>
      </HStack>

      <Heading size="2xl" textAlign="center">
        Vite + React + Chakra UI
      </Heading>

      <Box p={8} borderRadius="md" bg="gray.50" _dark={{ bg: "gray.800" }}>
        <VStack gap={4}>
          <Button
            onClick={() => setCount((count) => count + 1)}
            colorPalette="gray"
            size="lg"
          >
            count is {count}
          </Button>
          <Text>
            Edit <code>src/App.tsx</code> and save to test HMR
          </Text>
        </VStack>
      </Box>

      <Text color="gray.600" _dark={{ color: "gray.400" }}>
        Click on the Vite and React logos to learn more
      </Text>
    </VStack>
  );
}

export default App;
