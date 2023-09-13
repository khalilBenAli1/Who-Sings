import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ArtistCardProps {
  artistName: string;
  onPress: () => void;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artistName, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.text}>{artistName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    width: "30%",
    borderRadius: 15,
    margin: 8,
    backgroundColor: "purple",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: "white",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Montserrat-Regular",
  },
});

export default ArtistCard;
