import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';

const FetchList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const url = 'https://reactnative.dev/movies.json';
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setData(res.movies))
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      }, []);
  });
  return (
    <View>
      <Text>FetchList</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Text>
              {item.title}: {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};

const App = () => (
  <View style={styles.container}>
    <FetchList />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
