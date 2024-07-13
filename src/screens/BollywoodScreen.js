
// src/screens/BollywoodScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import { FontAwesome } from "@expo/vector-icons";
import NavBar from "../components/NavBar";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const images = [
  require("../../assets/Bollywood/image1.jpg"),
  require("../../assets/Bollywood/image2.jpg"),
  require("../../assets/Bollywood/image3.jpg"),
  require("../../assets/Bollywood/image4.jpg"),
  require("../../assets/Bollywood/image5.jpg"),
  require("../../assets/Bollywood/image3.jpg"),
];

const BollywoodScreen = () => {
  const [liked, setLiked] = useState(new Animated.Value(0));
  const [disliked, setDisliked] = useState(new Animated.Value(0));
  const [wishlist, setWishlist] = useState(new Animated.Value(0));

  const handleSwipe = (type) => {
    if (type === "left") {
      Animated.timing(disliked, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => disliked.setValue(0));
    } else if (type === "right") {
      Animated.timing(liked, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => liked.setValue(0));
    } else if (type === "top") {
      Animated.timing(wishlist, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => wishlist.setValue(0));
    }
  };

  console.log("Rendering BollywoodScreen");

  return (
    <View style={styles.container}>
      <NavBar />
      <Text style={styles.caption}>
        Swipe your way through Bollywood fashion!
      </Text>
      <View style={styles.swiperContainer}>
        <Swiper
          cards={images}
          renderCard={(card) => (
            <View style={styles.card}>
              <Image source={card} style={styles.image} />
            </View>
          )}
          onSwipedLeft={() => handleSwipe("left")}
          onSwipedRight={() => handleSwipe("right")}
          onSwipedTop={() => handleSwipe("top")}
          cardIndex={0}
          backgroundColor={"#fff"} // Set background color to white
          stackSize={3}
        />
        <Animated.View
          style={[
            styles.iconContainer,
            styles.dislikeIcon,
            { opacity: disliked },
          ]}
        >
          <FontAwesome name="times" size={30} color="red" />
        </Animated.View>
        <Animated.View
          style={[styles.iconContainer, styles.likeIcon, { opacity: liked }]}
        >
          <FontAwesome name="check" size={30} color="green" />
        </Animated.View>
        <Animated.View
          style={[
            styles.iconContainer,
            styles.wishlistIcon,
            { opacity: wishlist },
          ]}
        >
          <FontAwesome name="heart" size={30} color="pink" />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Set background color to white
  },
  caption: {
    fontSize: 18,
    backgroundColor: "rgba(255, 192, 203, 0.3)",
    textAlign: "center",
    marginVertical: 10,
  },
  swiperContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Set background color to white
  },
  card: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.6,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Set background color to white
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    overflow: "hidden", // To ensure the image fits within the card
    // marginLeft: screenWidth * 0.1, // Shift card to the right
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    marginLeft: 10, // Shift image to the right
  },
  iconContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -15 }, { translateY: -15 }],
  },
  dislikeIcon: {
    top: 20,
    left: 20,
  },
  likeIcon: {
    top: 20,
    right: 20,
  },
  wishlistIcon: {
    top: 20,
    right: 20,
  },
});

export default BollywoodScreen;
