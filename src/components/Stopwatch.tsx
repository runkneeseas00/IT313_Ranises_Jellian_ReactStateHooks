import { StyleSheet, Text, View } from "react-native";

interface StopwatchProps {
  seconds: number;
  isRunning: boolean;
}

export default function Stopwatch({ seconds, isRunning }: StopwatchProps) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lab Stopwatch</Text>

      <Text style={styles.timer}>{formattedTime}</Text>

      {isRunning ? (
        <Text style={styles.status}>Running...</Text>
      ) : (
        <Text style={styles.status}>Paused</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  timer: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 10,
  },

  status: {
    fontSize: 20,
  },
});
