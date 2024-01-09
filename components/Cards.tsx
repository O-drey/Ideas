import { View, Image, StyleSheet, Text, FlatList } from "react-native";

import { Chips } from "./Chips";
import picture from "../assets/images/botanical_bg.jpg";
import { formatTags } from "../utils/formatTags";
import { Categories } from "../libs/interfaces/categories";
import { Users } from "../libs/interfaces/users";
import { Link, useRouter } from "expo-router";
import { Ideas } from "../libs/interfaces/ideas";

export const Cards = ({
  title,
  subtitle,
  content,
  tags,
  author,
  minimize,
  id,
}: {
  title: string;
  subtitle?: string | null;
  content: string;
  tags?: Categories["value"][];
  author?: Users["id"];
  minimize?: boolean;
  id?: Ideas["id"];
}) => {
  // const router = useRouter();
  // router.push(id ?? "");
  return (
    <View style={styles.container}>
      <View style={{ overflow: "hidden", aspectRatio: 1.5 }}>
        <Image source={picture} style={styles.img} />
      </View>
      <Link href={`./${id}`}>
        <View style={{ paddingHorizontal: 8, paddingVertical: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 2 }}>
            {title}
          </Text>
          <Text
            style={{ fontSize: 15, marginBottom: 8 }}
            numberOfLines={minimize ? 1 : undefined}
          >
            {content}
          </Text>
          <View>
            <FlatList
              data={tags}
              keyExtractor={(tag) => tag}
              style={styles.tags}
              renderItem={(tag) => <Chips name={formatTags(tag.item)} />}
            />
          </View>
        </View>
      </Link>
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
    justifyContent: "space-between",
  },
});
