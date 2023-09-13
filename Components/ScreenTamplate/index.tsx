import React from "react";
import { View, Image, StyleSheet } from "react-native";

interface ScreenTemplateProps {
  children: React.ReactNode;
  backgroundColor?: string; 
  topImage?: any;
}
const logo=require("../../assets/WhoSings.jpeg")
const ScreenTemplate: React.FC<ScreenTemplateProps> = ({
  children,
  backgroundColor = "#876197",
  topImage=logo,

}) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View style={styles.content}>
        {topImage && (
          <Image
            source={topImage}
            style={styles.image}
            resizeMode="contain"
          />
        )}
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
    padding: 20,
  },
  content: {
    alignItems: "center",
    width:'80%' 
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontFamily: 'Montserrat-Regular',
  },
});

export default ScreenTemplate;
