import React from "react";
import {StyleSheet,Text } from "react-native";

import ScreenTemplate from "../../Components/ScreenTamplate";
import ProfilePicture from "../../Components/ProfilePicture";
import { useStores } from "../../Stores/useStores";
import { useNavigation } from "@react-navigation/native";
import AppButton from "../../Components/AppButton";


const Profil: React.FC = () => {
    const {currentUser}=useStores()
    const navigation = useNavigation();
  return (
    <ScreenTemplate>  
        <ProfilePicture user={currentUser} size={40} />
          <Text style={styles.userInfo}>Name : {currentUser?.name}</Text>
          <Text style={styles.userInfo}>Email : {currentUser?.email}</Text>
          <Text style={styles.userInfo}>Score : {currentUser?.score}</Text>
      <AppButton label="Return" onPress={()=>navigation.navigate("Main" as never)} />
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  userInfo: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20,
        color: "white",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        fontFamily: 'Montserrat-Regular',
        
  },
 
});

export default Profil;
