import { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

import { Feather } from "@expo/vector-icons";
// import { fetchIdeas } from "../api/fetchs/fetchIdeas";
import type { Ideas } from "../../libs/interfaces/ideas";
import { Cards } from "../../components/Cards";
import { THEME } from "../../constants";
import { ideas } from "../../datas/ideas.json";
import notFound from "../../assets/images/not_found.png";

export default function Search() {
  const [searchTerms, setSearchTerms] = useState("");
  // const [ideas, setIdeas] = useState<Ideas[]>([]);
  const handleSearch = async () => {
    try {
      // const { fetchDatas } = fetchIdeas();
      // const { list } = fetchDatas();
      // setIdeas(await list());
      useEffect(() => {
        const res = ideas.filter(
          (idea) =>
            idea.title.includes(searchTerms) ||
            idea.content.includes(searchTerms) // OR || doubts about logic operator to use
        );
        console.log(res);
      }, [searchTerms]);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  return (
    <SafeAreaView style={{ paddingHorizontal: 6 }}>
      <Text
        style={{
          fontSize: 36,
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Cherche une idée
      </Text>
      <TextInput
        value={searchTerms}
        onChangeText={setSearchTerms}
        style={[THEME.UI.inputs]}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
      {!ideas && (
        <>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "600",
              fontSize: 20,
              marginVertical: 12,
            }}
          >
            Aucune idée trouvée, vérifie ta&nbsp;recherche ou lance en une
            nouvelle !
          </Text>
          <Image source={notFound} alt="" accessibilityElementsHidden />
        </>
      )}
      <FlatList
        data={ideas}
        renderItem={(idea) => (
          <Cards
            title={idea.item.title}
            subtitle={idea.item.subtitle}
            author={idea.item.author}
            content={idea.item.content}
            tags={idea.item.tags}
            minimize
          />
        )}
        debug={true}
      />
    </SafeAreaView>
  );
}
