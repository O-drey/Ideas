import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, FlatList } from "react-native";
import { Stack, Tabs, useRouter } from "expo-router";
import { ideas } from "../datas/ideas.json";
import { THEME } from "./constants";
import { Cards } from "./components/Cards";
// import { fetchIdeas } from "./api/fetchs/fetchIdeas";

// const { fetchDatas } = fetchIdeas();
// const { list } = fetchDatas();
// const ideas = await list();
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
          />
        )}
      />
      <Tabs>
        <Tabs.Screen name="Home" />
        <Tabs.Screen name="Search" />
        <Tabs.Screen name="Idealizing" />
        <Tabs.Screen name="Profile" />
      </Tabs>
    </SafeAreaView>
  );
};

export default Home;
