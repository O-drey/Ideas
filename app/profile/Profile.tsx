import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { fetchUsers } from "../api/fetchs/fetchUsers";
import { THEME } from "../constants";
import { httpClient } from "../api/httpClient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { users } from "../../datas/users.json";

export default async function Profile({ id }: { id: string }) {
  // const { fetchDatas } = fetchUsers();
  // const { retrieve } = fetchDatas();
  const user = users.find((u) => u.id === id); //await retrieve(id);

  const handleLogout = async () => {
    httpClient.defaults.headers.delete.Authorization;
    await AsyncStorage.removeItem("token");
  };

  return (
    <SafeAreaView>
      <Text>{user?.username}</Text>
      <Text>{user?.pronouns}</Text>
      <View>
        <Text>{user?.bio}</Text>
      </View>

      <Button
        title="Déconnextion"
        color={THEME.COLORS.red300}
        onPress={handleLogout}
      />
    </SafeAreaView>
  );
}
