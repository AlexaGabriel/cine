import React from "react";
import { Container, BannerItem, Title, RateContainer, Rate } from "./style";
import { Ionicons } from "@expo/vector-icons";

export default function SliderItem() {
  return (
    <Container activeOpacity={0.7}>
      <BannerItem
        source={{
          uri: "https://images.unsplash.com/photo-1707675015800-33365cffd92a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
      <Title numberOfLines={1}>Vingadores</Title>
      <RateContainer>
        <Ionicons name="star" size={12} color="#E7A74e" />
        <Rate>9/10</Rate>
      </RateContainer>
    </Container>
  );
}
