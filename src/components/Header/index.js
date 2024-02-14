import React from "react";
import { Feather } from "@expo/vector-icons";
import { Container, Menubutton, Title } from "./style";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title }) {
  const navigation = useNavigation();
  return (
    <Container>
      <Menubutton onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={36} color="#FFF" />
      </Menubutton>
      <Title>{title}</Title>
    </Container>
  );
}
