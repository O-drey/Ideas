import { useEffect, useState } from "react";
import { View, TextInput, Text, Button, StyleSheet, Alert } from "react-native";
// import { useAuth } from "../../api/fetchs/auth";
import { Link } from "expo-router";
import { COLORS } from "../../constants";
// import {secondary_button} from "../../libs/ui/index"
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, [username, password]);
  // const handleLogin = async () => {
  //   // const { login } = useAuth();
  //   // const data = await login(username, password);
  //   // console.log("login data :", data);
  //   console.log("connectée");
  //   // return data;
  // };

  return (
    <View style={styles.form}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: "600",
          marginBottom: 16,
        }}
      >
        Connexion
      </Text>
      <View>
        <Text style={styles.label}>Nom utilisateur</Text>
        <TextInput
          value={username}
          placeholder="Nom utilisateur"
          style={styles.input}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
          value={password}
          style={styles.input}
          passwordRules={
            "required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
          }
          placeholder="Mot de passe"
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>
      <View style={{ marginTop: 16 }}>
        <Button onPress={() => console.log("conecté")} title="Connexion" />
        <Link href="/signup" style={styles.secondary_button}>
          Créer mon compte
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  label: {
    fontWeight: "500",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginBottom: 8,
  },
  secondary_button: {
    marginTop: 6,
    paddingVertical: 16,
    paddingHorizontal: 2,
    backgroundColor: COLORS.primary400,
    borderRadius: 4,
    textAlign: "center",
    color: "#FFF",
    textTransform: "uppercase",
    fontWeight: "500",
  },
});
