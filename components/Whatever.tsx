import { Text, View } from "react-native";

export default function Whatever() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        height: 200,
        width: 200,
      }}
    >
      <Text>Whatever</Text>
    </View>
  );
}
