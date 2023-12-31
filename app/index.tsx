import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, Tabs, useRouter } from "expo-router";
import { ideas } from "../datas/ideas.json";
import { COLORS } from "./constants";
import { Cards } from "./components/Cards";
import { fetchIdeas } from "./api/fetchs/fetchIdeas";

const Home = async () => {
  const { fetchDatas } = fetchIdeas();
  const { list } = await fetchDatas();
  // const ideas = await list();
  const router = useRouter();
  return (
    <SafeAreaView style={{}}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary200 },
          headerShadowVisible: false,
          headerBackButtonMenuEnabled: true,
        }}
      />
      <Text>Les dernières idées</Text>
      {ideas.map((idea, index) => (
        <Cards
          key={index}
          title={idea.title}
          content={idea.content}
          tags={idea.tags}
        />
      ))}
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
