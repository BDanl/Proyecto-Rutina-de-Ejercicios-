import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import ExploreRoutinesCard from "../../components/workout/ExploreRoutinesCard";
import NewRoutineCard from "../../components/workout/NewRoutineCard";
import CreateWorkout from "../../components/workout/CreateWorkout";

const WorkoutScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.sectionTitle}>Comienzo rápido</Text>
        <CreateWorkout />

        <Text style={styles.sectionTitle}>Rutinas</Text>
        <View style={styles.cardRow}>
          <NewRoutineCard />
          <ExploreRoutinesCard />
        </View>

      </ScrollView>
    </View>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 150, 
    paddingBottom: 30,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
  },
});
