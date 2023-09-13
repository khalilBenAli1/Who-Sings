import React from "react";
import { View, Text,  StyleSheet } from "react-native";
import { UserStore } from "../../Stores/Models/UserModel";
import ProfilePicture from "../ProfilePicture";

interface RankCardProps {
  rank: number;
  user: UserStore;
}

const RankCard: React.FC<RankCardProps> = ({ rank, user }) => {


  return (
    <View style={styles.container}>
      <Text style={styles.rank}>{rank}</Text>
      <View style={styles.separator} /> 
      <ProfilePicture user={user} size={20} />
      <View style={styles.separator} /> 
      <Text style={styles.userName}>{user.name}</Text>
      <View style={styles.separator} /> 
      <Text style={styles.score}>{user.score}</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:'white',
    borderRadius:10,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "black",
    marginBottom:6,
  },
  rank: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  separator: {
    height: "100%", 
    width: 1, 
    backgroundColor: "#ddd",
    marginHorizontal: 10, 
  },
  userName: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
  },
  score: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RankCard;
