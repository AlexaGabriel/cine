import {
  Container,
  SearchContainer,
  Input,
  SearchButton,
  Title,
  BannerButton,
  Banner,
  SliderMovie,
} from "./style";
import { ScrollView } from "react-native";
import Header from "../../components/Header";
import { Feather } from "@expo/vector-icons";
import SliderItem from "../../components/SliderItem";

export default function Home() {
  return (
    <Container>
      <Header title="Prime films" />
      <SearchContainer>
        <Input placeholder="Ex Vingadores" placeholderTextColor="#ddd" />
        <SearchButton>
          <Feather name="search" size={30} color={"#FFF"} />
        </SearchButton>
      </SearchContainer>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Em cartaz</Title>
        <BannerButton activeOpacity={0.9} onPress={() => alert("teste")}>
          <Banner
            resizeMethod="resize"
            source={{
              uri: "https://images.unsplash.com/photo-1707675015800-33365cffd92a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          />
        </BannerButton>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderItem />}
        />

        <Title>Populares</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderItem />}
        />
        <Title>Mais votados</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderItem />}
        />
      </ScrollView>
    </Container>
  );
}
