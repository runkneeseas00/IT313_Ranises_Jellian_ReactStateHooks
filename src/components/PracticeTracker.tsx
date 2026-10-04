import { Button, StyleSheet, Text, View } from "react-native";

interface PracticeTrackerProps {
  solved: number;
  onSolve: () => void;
  onReset: () => void;
}

export default function PracticeTracker({
  solved,
  onSolve,
  onReset,
}: PracticeTrackerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Practice Tracker</Text>

      <Text style={styles.solved}>Solved: {solved}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Solve +1" onPress={onSolve} />

        <Button title="Reset" onPress={onReset} />
      </View>

      {solved >= 5 && <Text style={styles.greatJob}>Great job!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  solved: {
    fontSize: 22,
    marginBottom: 15,
  },

  buttonContainer: {
    width: "100%",
    gap: 10,
  },

  greatJob: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },
});
