import { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { fetchIdeas } from "../../api/fetchs/fetchIdeas";
import { Chips } from "../../components/Chips";
import { formatTags } from "../../utils/formatTags";
import { THEME } from "../../constants";
import type { Ideas } from "../../libs/interfaces/ideas";

export default function Idea({
  id = "66f01a05-8c4b-4e38-a6e9-8a0e2a735e29",
}: {
  id: Ideas["id"];
}) {
  const { fetchDatas } = fetchIdeas();
  const { retrieve } = fetchDatas();
  const [idea, setIdea] = useState<Ideas | null>(null);
  const showIdea = async () => setIdea(await retrieve(id));
  showIdea();
  return (
    <View>
      <Text style={THEME.FONTS.h1}>{idea?.title}</Text>
      <Text>{idea?.content}</Text>
      <Text>{idea?.author}</Text>
      <View>
        <FlatList
          data={idea?.tags}
          renderItem={(i) => <Chips name={formatTags(i.item)} />}
          // scrollEnabled={false}
          debug={true}
        />
      </View>
    </View>
  );
}
