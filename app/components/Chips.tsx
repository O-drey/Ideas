import { Text, StyleSheet, View } from "react-native";
export const Chips = ({ value, name }: { value?: string; name: string }) => {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "primary-300",
    borderRadius: 100,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
});
