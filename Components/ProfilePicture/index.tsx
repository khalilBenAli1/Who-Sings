import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import { UserStore } from "../../Stores/Models/UserModel";

export interface ProfilePictureProps {
  user: UserStore | null;
  size?: number;
}

const ProfilePicture = ({ user, size = 10 }: ProfilePictureProps) => {
  const backgroundColor = { backgroundColor: user?.color };
  const getInitial : string | undefined= user?.name[0]?.toUpperCase();

  return (
    <View
      style={[
        tw`w-${size} h-${size} rounded-full justify-center items-center`,
        backgroundColor,
      ]}
    >
      <Text
        style={tw`text-white ${size < 5 ? "text-xs" : "text-3xl"} font-bold`}
      >
        {getInitial}
      </Text>
    </View>
  );
};

export default ProfilePicture;
