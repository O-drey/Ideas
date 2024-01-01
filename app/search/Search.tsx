import { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Feather } from "@expo/vector-icons";
// import { fetchIdeas } from "../api/fetchs/fetchIdeas";
import { Ideas } from "../libs/interfaces/ideas";
import { Cards } from "../components/Cards";
import { THEME } from "../constants";
import { ideas } from "../../datas/ideas.json";

export default function Search() {
  const [searchTerms, setSearchTerms] = useState("");
  // const [ideas, setIdeas] = useState<Ideas[]>([]);
  const handleSearch = async () => {
    // const { fetchDatas } = fetchIdeas();
    // const { list } = fetchDatas();
    // setIdeas(await list());
    useEffect(() => {
      const res = ideas.filter(
        (idea) =>
          idea.title.includes(searchTerms) && idea.content.includes(searchTerms) // OR || doubts about logic operator to use
      );
      console.log(res);
    }, [searchTerms]);
  };

  return (
    <SafeAreaView>
      <Text style={THEME.FONTS.h1}>Cherche une idée</Text>
      <TextInput value={searchTerms} onChangeText={setSearchTerms} />
      <TouchableOpacity onPress={handleSearch}>
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
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
      />
    </SafeAreaView>
  );
}
