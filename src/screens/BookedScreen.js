import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DATA } from "../data";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";

export const BookedScreen = (props) => {
  const openPostHandler = ({ post }) => {
    props.navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  const data = DATA.filter((post) => post.booked);

  return <PostList data={data} onOpen={openPostHandler} />;
};

BookedScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Favorites",
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toogle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});
