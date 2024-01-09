// import { useState } from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
import { Stack, useRouter } from "expo-router";
import { ideas } from "../datas/ideas.json";
import { THEME } from "../constants";
import { Cards } from "../components/Cards";
// import { fetchIdeas } from "./api/fetchs/fetchIdeas";

// const [ideas, setIdeas] = useState<Ideas[] | null>(null)
// const { fetchDatas } = fetchIdeas();
// const { list } = fetchDatas();
// setIdeas(await list());
const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: THEME.COLORS.primary200 },
          headerShadowVisible: false,
          headerBackButtonMenuEnabled: true,
          title: "Accueil",
        }}
      />

      <Text style={THEME.FONTS.h1}>Les dernières idées</Text>
      <FlatList
        data={ideas}
        keyExtractor={(idea) => idea.title}
        renderItem={(idea) => (
          <Cards
            title={idea.item.title}
            content={idea.item.content}
            tags={idea.item.tags}
            id={idea.item.id}
          />
        )}
        debug={true}
      />
    </SafeAreaView>
  );
};

export default Home;
