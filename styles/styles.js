import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      },
})