import { SafeAreaView, Text, View, FlatList } from "react-native";
// import { fetchIdeas } from "../api/fetchs/fetchIdeas";
import { Cards } from "../components/Cards";
import { ideas } from "../../datas/ideas.json";

export default async function Ideas() {
  // const { fetchDatas } = fetchIdeas();
  // const { list } = fetchDatas();

  // const ideas = await list();

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 24, fontWeight: "700" }}>Le bac a idées</Text>
      <View>
        <FlatList
          data={ideas}
          renderItem={(idea) => (
            <Cards
              title={idea.item.title}
              content={idea.item.content}
              tags={idea.item.tags}
            />
          )}
          keyExtractor={(idea) => idea.id}
        />
      </View>
    </SafeAreaView>
  );
}
