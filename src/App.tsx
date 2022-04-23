import {
  Button,
  Code,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

interface Mushroom {
  id: number;
  name: string;
  type: string;
}

const DB: Mushroom[] = [
  {
    id: 1,
    name: "Prawdziwek",
    type: "poisonous",
  },
  {
    id: 2,
    name: "Kania",
    type: "eatable",
  },
  {
    id: 3,
    name: "Podgrzybek",
    type: "eatable",
  },
];

const App = () => {
  const [mushrooms, mushroomsSet] = useState<Mushroom[]>(DB);

  const filterMushrooms = (type: string) => {
    type.length
      ? mushroomsSet(DB.filter((m) => m.type === type))
      : mushroomsSet(DB);
  };

  return (
    <Container mt={12}>
      <Heading textAlign="center">Mój grzyb</Heading>
      <Flex my={24} gap={4} justifyContent="center">
        <Button
          onClick={() => filterMushrooms("")}
          colorScheme="facebook"
          variant="solid"
        >
          All
        </Button>
        <Button
          onClick={() => filterMushrooms("poisonous")}
          colorScheme="red"
          variant="solid"
        >
          Poisonous
        </Button>
        <Button
          onClick={() => filterMushrooms("eatable")}
          colorScheme="green"
          variant="solid"
        >
          Eatable
        </Button>
      </Flex>
      <SimpleGrid columns={[2, 3, 3, 3]}>
        {mushrooms.map(({ id, name }: { id: number; name: string }) => (
          <Flex flexDir="column" alignItems="center" key={id.toString()}>
            <Image src={`${id}.svg`} />
            <Text fontSize={22}>{name}</Text>
          </Flex>
        ))}
      </SimpleGrid>
      <Code mt={24} w="100%">
        <pre>{JSON.stringify(mushrooms, null, 2)}</pre>
      </Code>
    </Container>
  );
};

export default App;
