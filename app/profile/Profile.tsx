import { View, Text, Button, SectionList, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { fetchUsers } from "../api/fetchs/fetchUsers";
import { THEME } from "../../constants";
import { httpClient } from "../../api/httpClient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { users } from "../../datas/users.json";
import { ideas } from "../../datas/ideas.json";
import { Cards } from "../../components/Cards";

//PROPS id : // { id }: { id: string }
export default function Profile() {
  // const { fetchDatas } = fetchUsers();
  // const { retrieve } = fetchDatas();
  const id = "bd16f3a7-9baa-4b79-8a64-ecf321399f2f";
  const user = users.find((u) => u.id === id); //await retrieve(id);
  const userIdeas = ideas.filter((idea) => idea.id === user?.ideas);
  const handleLogout = async () => {
    httpClient.defaults.headers.delete.Authorization;
    await AsyncStorage.removeItem("token");
  };

  return (
    <SafeAreaView style={{ paddingHorizontal: 12 }}>
      <Text style={THEME.FONTS.h1}>{user?.username}</Text>
      <Text
        style={[
          THEME.FONTS.h3,
          {
            color: THEME.COLORS.gray100,
            textAlign: "center",
            marginBottom: 20,
          },
        ]}
      >
        {user?.pronouns}
      </Text>

      <View style={{ marginVertical: 8 }}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>{user?.bio}</Text>
      </View>
      {user?.ideas && (
        <View>
          <Text>Mes idées de projet</Text>
          <FlatList
            data={userIdeas}
            renderItem={(idea) => (
              <Cards title={idea.item} content="ttkdjgkn" />
            )}
          />
        </View>
      )}
      <Button
        title="Déconnextion"
        color={THEME.COLORS.red300}
        onPress={handleLogout}
      />
    </SafeAreaView>
  );
}
