import React from "react";
import { Modal, View, Text } from "react-native";
import { Button } from "../Button";
import { styles } from "./styles";
import { router } from "expo-router";

type ModalProps = {
  visible: boolean;
  onPress: () => void;
  colorTitle: string;
  title: string;
  subtitle: string;
  svgComponent: React.ReactNode;
};

export function CustomModal({
  visible,
  onPress,
  colorTitle,
  title,
  subtitle,
  svgComponent,
}: ModalProps) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.centeredView}>
          <Text style={[styles.title, { color: colorTitle }]}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <View style={styles.image}>{svgComponent}</View>
        </View>

        <View style={styles.button}>
          <Button
            title="Ir para a página inicial"
            onPress={onPress}
            type="PRIMARY"
          />
        </View>
      </View>
    </Modal>
  );
}
