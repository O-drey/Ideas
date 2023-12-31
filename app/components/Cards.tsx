import { View, Image, StyleSheet, Text } from "react-native";

import { Chips } from "./Chips";
import picture from "../../assets/images/botanical_bg.jpg";
import { formatTags } from "../utils/formatTags";
import { Categories } from "../libs/interfaces/categories";

export const Cards = ({
  title,
  content,
  tags,
}: {
  title: string;
  content: string;
  tags: Categories["value"][];
}) => {
  return (
    <View style={styles.container}>
      <View style={{ overflow: "hidden", aspectRatio: 1.5 }}>
        <Image source={picture} style={styles.img} />
      </View>
      <View style={{ paddingHorizontal: 8, paddingVertical: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 2 }}>
          {title}
        </Text>
        <Text style={{ fontSize: 15, marginBottom: 8 }}>{content}</Text>
        <View style={styles.tags}>
          {tags.map((tag, index) => (
            <Chips key={index} name={formatTags(tag)} />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 325,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowOffset: { width: 4, height: 2 },
    overflow: "hidden",
  },
  img: {
    width: `${100}%`,
  },
  tags: {
    display: "flex",
    alignItems: "flex-end",
  },
});
