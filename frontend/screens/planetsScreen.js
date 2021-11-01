import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';
import { SERVER_ADDRESS } from "../config/variables";

const PlanetsScreen = ({ navigation, route }) => {
  const [isLoading, setLoading] = useState(true);
  const [planets, setPlanets] = useState([]);

  const getPlanets = async () => {
    try {
        setLoading(true);
     const response = await fetch(SERVER_ADDRESS + '/climates/' + route.params.climateId + '/planets');
     const json = await response.json();
     setPlanets(json);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <View style={styles.container}>
            <Text style={styles.title}>Climate type: {route.params.climateType}</Text>
            <FlatList
                data={planets}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.planetName}>{item.name}</Text>
                        <FlatList
                            data={item.Characters}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) => (
                                <View style={styles.item}>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.text}>Gender: {item.gender}</Text>
                                    <Text style={styles.text}>Height: {item.height}</Text>
                                    <Text style={styles.text}>Age: {item.age}</Text>
                                    <Text style={styles.text}>Hair color: {item.hairColor}</Text>
                                </View>
                            )}
                        />
                    </View>
                )}
            />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 12 
  },
  item: {
    backgroundColor: '#cfe8e6',
    padding: 10,
    marginVertical: 8,
  },
  planetName: {
    fontSize: 28,
  },
  title: {
    fontSize: 25,
  },
  text: {
    fontSize: 20,
  }
});

export default PlanetsScreen;