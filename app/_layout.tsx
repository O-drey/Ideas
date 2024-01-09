import { Tabs } from "expo-router/tabs";
import { Feather } from "@expo/vector-icons";
import LoginLayout from "./(auth)/login/layout";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Layout() {
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    const handleCheckLogged = async () => {
      setToken(await AsyncStorage.getItem("token"));

      if (!token) setIsLogged(false);
      setIsLogged(true);
      console.log("logged : ", isLogged);
    };
    handleCheckLogged();
  }, [token]);
  return !isLogged ? (
    <LoginLayout />
  ) : (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          href: "/",
          tabBarIcon: () => <Feather name="home" size={24} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Search",
          href: "/search",
          tabBarIcon: () => <Feather name="search" size={24} />,
        }}
      />
      <Tabs.Screen
        name="ideas"
        options={{
          tabBarLabel: "Ideas",
          href: "/ideas",
          tabBarIcon: () => <Feather name="zap" size={24} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          href: "/profile",
          tabBarIcon: () => <Feather name="user" size={24} />,
        }}
      />
    </Tabs>
  );
}
