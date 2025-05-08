import React from "react";
import { Modal, Text, View } from "react-native";
import { colors } from "@/types/colors";
import { Button } from "../Button";
import { styles } from "./styles";

type Props = {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title?: string;
  message?: string;
};

export function DeleteConfirmationModal({
  visible,
  onConfirm,
  onCancel,
  title,
}: Props) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                type="SECONDARY"
                title="Cancelar"
                iconVisible={false}
                backgroundColor={colors.gray2}
                onPress={onCancel}
              />
            </View>
            <View style={styles.button}>
              <Button
                type="PRIMARY"
                title="Sim, excluir"
                iconVisible={false}
                onPress={onConfirm}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
