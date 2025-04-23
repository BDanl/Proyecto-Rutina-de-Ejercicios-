import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { useUsersContext } from "../../../context/UsersContext";

const ExploreScreen = () => {
  const navigation = useNavigation();
  const cards = [
    { 
      id: 1, 
      title: "Rutina Full Body (Cuerpo Completo)", 
      icon: "human", 
      color: "#19194d",
      screen: "FullBodyRoutine"
    },
    { 
      id: 2, 
      title: "Rutina Push-Pull-Legs (Empujar-Jalar-Piernas)", 
      icon: "swap-horizontal", 
      color: "#19194d",
      screen: "PushPullLegsRoutine"
    },
    { 
      id: 3, 
      title: "Rutina de Fuerza (5x5)", 
      icon: "weight-lifter", 
      color: "#19194d",
      screen: "StrengthRoutine"
    },
    { 
      id: 4, 
      title: "Rutina para Principiantes (Full Body Adaptación)", 
      icon: "human-child", 
      color: "#19194d",
      screen: "BeginnerRoutine"
    },
    { 
      id: 5, 
      title: "Rutina HIIT (Cardio Intenso)", 
      icon: "run-fast", 
      color: "#19194d",
      screen: "HIITRoutine"
    },
    { 
      id: 6, 
      title: "Rutina de Core y Abdomen", 
      icon: "view-gallery", 
      color: "#19194d",
      screen: "CoreRoutine"
    },
    { 
      id: 7, 
      title: "Rutina de Calistenia (Sin Equipo)", 
      icon: "human-handsup", 
      color: "#19194d",
      screen: "CalisthenicsRoutine"
    },
  ];
  
  return (
    <View style={styles.container}>
      {cards.map((card) => (
        <TouchableOpacity
          key={card.id}
          style={[styles.card, { backgroundColor: card.color }]}
          onPress={() => navigation.navigate(card.screen)} 
        >
          <Icon name={card.icon} size={30} color="white" style={styles.icon} />
          <Text style={styles.cardText}>{card.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 16,
    marginTop: 50, 
    justifyContent: "center",
  },
  card: {
    width: "90%", 
    height: 70, 
    borderRadius: 12,
    marginVertical: 8,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    elevation: 3,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  cardText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
  icon: {
    marginRight: 10,
  },
});