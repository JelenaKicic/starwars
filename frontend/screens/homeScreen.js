import React, { useEffect, useState } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, Text, View, StyleSheet, Button } from 'react-native';
import { SERVER_ADDRESS } from "../config/variables";

const HomeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [moviesShowed, setMoviesShowed] = useState(true);
  const [movies, setMovies] = useState([]);
  const [climates, setClimates] = useState([]);

  const getMovies = async () => {
     try {
        setLoading(true);
      const response = await fetch(SERVER_ADDRESS + '/movies');
      const json = await response.json();
      setMovies(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const getClimates = async () => {
    try {
    setLoading(true);   
     const response = await fetch(SERVER_ADDRESS + '/climates');
     const json = await response.json();
     setClimates(json);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }

  useEffect(() => {
    getMovies();
    getClimates();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              title="Movies"
              onPress={() => setMoviesShowed(true)}
              color="#163678"
            />
            <Button
              title="Climates"
              onPress={() => setMoviesShowed(false)}
              color="#163678"
            />
          </View>
          { moviesShowed ?
            <FlatList
              data={movies}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <View style={[styles.item, styles.movieItem]}>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
              )}
            />
            :
            <FlatList
              data={climates}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Planets', {climateId: item.id, climateType: item.type})}
                > 
                    <View style={[styles.item, styles.climateItem]}>
                        <Text style={styles.title}>{item.type}</Text>
                    </View>
                </TouchableOpacity>
              )}
            />
          }
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 24 
  },
  item: {
    padding: 20,
    marginVertical: 8,
  },
  movieItem: {
    backgroundColor: '#cfe8e6',
  },
  climateItem: {
    backgroundColor: '#f0d8d8',
  },
  title: {
    fontSize: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  }
});

export default HomeScreen;