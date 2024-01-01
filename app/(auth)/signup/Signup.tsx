import { useEffect, useState } from "react";
import { TextInput, Text, TouchableOpacity, View, Button } from "react-native";

import { useAuth } from "../../api/fetchs/auth";
import { Users } from "../../libs/interfaces/users";

import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [pronouns, setPronouns] = useState<Users["pronouns"]>("iel");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [bio, setBio] = useState(undefined);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (confirmPassword !== password)
      return setError("Les mots de passe ne correspondent pas.");
    // const { signup } = useAuth();

    // const datas = useEffect(() => {
    //   //pas sure de l'utilisation du useEffect
    //   if (firstname && lastname && email && username && password && pronouns)
    //     return {
    //       firstname,
    //       lastname,
    //       email,
    //       username,
    //       password,
    //       pronouns,
    //       bio,
    //     };
    //   return;
    // }, [firstname, lastname, email, username, password, pronouns, bio]);

    //requiered n'est pas géré comme en web, il faut le faire soi-même
    // if (!datas) {
    //   setError("Tous les champs sont obligatoires");
    //   return;
    // }

    // await signup(datas);
  };

  return (
    <View>
      <Text>Prénom</Text>
      <TextInput
        value={firstname}
        onChangeText={setFirstname}
        placeholder="Prénom"
      />
      <Text>Nom de famille</Text>
      <TextInput
        value={lastname}
        onChangeText={setLastname}
        placeholder="Nom de famille"
      />
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <Text>Nom utilisateur</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Nom utilisateur"
      />
      <Text>Pronom</Text>
      <TextInput value={pronouns} onChange={() => setPronouns} />
      <Text>Mot de passe</Text>
      <TextInput
        passwordRules={
          "required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
        }
        value={password}
        onChangeText={setPassword}
        secureTextEntry={isPasswordShown ? true : false}
      />
      <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown)}>
        {isPasswordShown ? (
          <Feather name="eye-off" size={24} color="black" />
        ) : (
          <Feather name="eye" size={24} color="black" />
        )}
      </TouchableOpacity>
      <Text>Confirmer le mot de passe</Text>
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
      <Text>Présente-toi</Text>
      <TextInput
        value={bio}
        onChangeText={() => setBio}
        multiline
        maxLength={500}
      />
      <View>
        <Button onPress={handleSubmit} title="Créer mon compte" />
        <Link href={"/login"}>Me connecter</Link>
      </View>
    </View>
  );
}
