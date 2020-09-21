import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { DATA } from "../data";
import { THEME } from "../theme";
// import { THEME } from "../theme";

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam("postId");

  const post = DATA.find((p) => p.id === postId);

  // useEffect(() => {
  //   navigation.setParams({ booked: post.booked });
  // }, []);

  const removeHandler = () => {
    Alert.alert(
      "Delete post",
      "Are you sure want delete post?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Delete", style: "destructive", onPress: () => {} },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrapp}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Delete"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam("date");
  const booked = navigation.getParam("booked");
  const IconName = booked ? "ios-star" : "ios-star-outline";
  return {
    headerTitle: "Post at " + new Date(date).toLocaleDateString(),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Take photo star"
          iconName={IconName}
          onPress={() => console.log("Press photo star")}
        />
      </HeaderButtons>
    ),
  };

  // headerStyle: {
  //   backgroundColor: THEME.DANGER_COLOR,
  // },
  // headerTintColor: "#fff",
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  textWrapp: {
    padding: 10,
  },
  title: {
    // fontFamily: "open-regular",
    fontStyle: "italic",
  },
});
