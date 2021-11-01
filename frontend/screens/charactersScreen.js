import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';
import { PureComponent } from 'react';
import { SERVER_ADDRESS } from "../config/variables";
import { RadioButton } from 'react-native-paper';

class ListItem extends PureComponent {
  render() {
    const {item} = this.props;
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.text}>Gender: {item.gender}</Text>
        <Text style={styles.text}>Height: {item.height}</Text>
        <Text style={styles.text}>Age: {item.age}</Text>
        <Text style={styles.text}>Hair color: {item.hairColor}</Text>
      </View>
    );
  }
}

const CharactersScreen = ({ navigation, route }) => {
  let [isLoading, setLoading] = useState(true);
  let [pagination, setPagination] = useState({limit: 5, offset: 0, count: 0});
  const [characters, setCharacters] = useState([]);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [refetch, setRefetch] = useState(false);
  const [gender, setGender] = React.useState('default');
  const [height, setHeight] = React.useState('default');
  const [age, setAge] = React.useState('default');

  const getCharacters = async () => {
    try {
      setRefetch(false)
      setLoading(true);
      let queryParams = '?offset=' + pagination.offset + '&limit=' + pagination.limit;
      
      if(gender != null && gender !== 'default') {
        queryParams += ('&gender=' + gender); 
      }
      if(age != null && age !== 'default') {
        queryParams += ('&age=' + age); 
      }
      if(height != null && height !== 'default') {
        queryParams += ('&height=' + height); 
      }

      const response = await fetch(SERVER_ADDRESS + '/movies/' + route.params.movieId + '/characters' + queryParams);
      const json = await response.json();

      setPagination({offset: pagination.offset + pagination.limit, limit: pagination.limit, count: json.count});
     
      if(json.rows != null && json.rows.length > 0) {
        const newArray = [...characters, ...json.rows];
        setCharacters(newArray);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }


  const loadMoreData = () => {
    setScrollIndex(characters.length - 1);
    if(pagination.count >= pagination.offset) {
      getCharacters();
    }
  }

  const resetData = () => {
    characters.splice(0,characters.length);
    setPagination({limit: 5, offset: 0, count: 0});
    pagination.count = 0;
    pagination.offset = 0;
    setScrollIndex(0);
    setRefetch(true);
  }

  useEffect(() => {
    getCharacters();
  }, [refetch]);

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <View style={styles.container}>
          <RadioButton.Group 
            onValueChange={async newValue => {
              setGender(newValue);
              resetData();
            }} 
            value={gender}
            style={styles.container}
          >
            <Text>Gender:</Text>
            <View style={styles.row}>
              <View>
                <Text>Male</Text>
                <RadioButton value='male' />
              </View>
              <View>
                <Text>Female</Text>
                <RadioButton value='female' />
              </View>
              <View>
                <Text>Default</Text>
                <RadioButton value='default' />
              </View>
            </View>
          </RadioButton.Group>
          <RadioButton.Group 
            onValueChange={async newValue => {
              setHeight(newValue);
              resetData();
            }} 
            value={height}
            style={styles.container}
          >
            <Text>Order by height:</Text>
            <View style={styles.row}>
              <View>
                <Text>Ascending</Text>
                <RadioButton value='ASC' />
              </View>
              <View>
                <Text>Descending</Text>
                <RadioButton value='DESC' />
              </View>
              <View>
                <Text>Default</Text>
                <RadioButton value='default' />
              </View>
            </View>
          </RadioButton.Group>
          <RadioButton.Group 
            onValueChange={async newValue => {
              setAge(newValue);
              resetData();
            }} 
            value={age}
            style={styles.container}
          >
            <Text>Order by age:</Text>
            <View style={styles.row}>
              <View>
                <Text>Ascending</Text>
                <RadioButton value='ASC' />
              </View>
              <View>
                <Text>Descending</Text>
                <RadioButton value='DESC' />
              </View>
              <View>
                <Text>Default</Text>
                <RadioButton value='default' />
              </View>
            </View>
          </RadioButton.Group>
          <Text style={styles.title}>Movie: {route.params.movieName}</Text>
          <FlatList
            extraData={characters} 
            data={characters}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => <ListItem item={item}/>}
            showsVerticalScrollIndicator={false}
            initialNumToRender={pagination.limit}
            initialScrollIndex={scrollIndex}
            onEndReached={loadMoreData}
            onEndReachedThreshold ={0.1}
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
  row: { 
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  item: {
    backgroundColor: '#f0d8d8',
    padding: 10,
    marginVertical: 8,
  },
  title: {
    fontSize: 28,
  },
  text: {
    fontSize: 23,
  }
});

export default CharactersScreen;