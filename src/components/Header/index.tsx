import { Text, View } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import Back from "@/assets/back.svg";
import BackRed from "@/assets/backRed.svg";
import { toPercentage } from "@/utils/toPercentage";
import { colors } from "@/types/colors";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  percent?: number;
  backgroundColor: string;
  backgroundIcon: string;
  isPercent?: boolean;
  height?: number;
  title?: string;
  status?: boolean;
};

export function Header({
  percent,
  backgroundColor,
  backgroundIcon,
  isPercent,
  height,
  status,
  title,
}: Props) {
  return (
    <>
      {isPercent && percent ? (
        <View
          style={[
            styles.container,
            { backgroundColor: backgroundColor, height: height },
          ]}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            color={backgroundIcon}
            style={styles.iconBack}
            onPress={() => router.back()}
          />
          <View style={styles.contentPercent}>
            <Text style={styles.titleStatistics}>{toPercentage(percent)}</Text>
            <Text style={styles.subtitleStatistics}>
              {status
                ? "das refeições dentro da dieta"
                : "das refeições fora da dieta"}
            </Text>
          </View>
        </View>
      ) : (
        <View
          style={[
            styles.containerTitle,
            { backgroundColor: backgroundColor, height: height },
          ]}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            color={backgroundIcon}
            style={styles.iconBackTitle}
            onPress={() => router.back()}
          />
          <Text style={styles.title}>{title}</Text>
          <View style={{ width: 24 }} />
        </View>
      )}
    </>
  );
}
