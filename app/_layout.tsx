import { Tabs } from "expo-router/tabs";
// import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="Home" options={{ tabBarLabel: "Home", href: "/" }} />
      <Tabs.Screen
        name="Search"
        options={{ tabBarLabel: "Search", href: "/search" }}
      />
      <Tabs.Screen
        name="Idealizing"
        options={{ tabBarLabel: "Ideas", href: "/ideas" }}
      />
      <Tabs.Screen
        name="Profile"
        options={{ tabBarLabel: "Profile", href: "/profile" }}
      />
    </Tabs>
  );
}
