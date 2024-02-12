import { View, Text } from "react-native";
import { Container } from "./style";
import Header from "../../components/Header";

export default function Home() {
  return (
    <Container>
      <Header />
      <Text>Tela Home</Text>
    </Container>
  );
}
