import { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import PracticeTracker from "../components/PracticeTracker";
import Stopwatch from "../components/Stopwatch";
import { useStopwatch } from "../hooks/useStopwatch";

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved((s) => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Lab Timer & Practice Tracker</Text>

        <Text style={styles.subtitle}>IT 313 - Mobile Programming</Text>

        <View style={styles.card}>
          <PracticeTracker
            solved={solved}
            onSolve={handleSolve}
            onReset={handleReset}
          />
        </View>

        <View style={styles.card}>
          <Stopwatch seconds={seconds} isRunning={isRunning} />

          <View style={styles.buttonSpacing}>
            <Button title="Start" onPress={handleStart} />
          </View>

          <View style={styles.buttonSpacing}>
            <Button title="Stop" onPress={handleStop} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 25,
  },

  card: {
    width: "100%",
    padding: 20,
    marginBottom: 20,
    borderRadius: 12,
    borderWidth: 1,
  },

  buttonSpacing: {
    marginTop: 10,
  },
});
