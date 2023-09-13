import React from "react";
import { View, Modal, Text, Button, StyleSheet } from "react-native";
import AppButton from "../AppButton";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  score: number;
}

const WinModal: React.FC<ModalProps> = ({ visible, onClose, score }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.textStyle}>
            Welldone , you got {score} correct answers
          </Text>
          <AppButton label="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#876197",
    padding: 20,
    borderRadius: 10,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Montserrat-Regular",
    marginVertical: 5,
  },
});

export default WinModal;
