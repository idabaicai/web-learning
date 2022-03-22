import React from 'react';

import {Button, Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeScreen = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{fontSize: 24}}>Home Screen!</Text>
    <Button
      title="Go to Details"
      onPress={() => {
        navigation.navigate('Detail', {
          itemId: 68,
          msg: 'Hello detail',
        });
      }}
    />
  </View>
);

const DetailScreen = ({route, navigation}) => {
  const {itemId, msg} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{marginBottom: 12}}>Detail Page.</Text>
      <Text>Id is {itemId}</Text>
      <Text>Msg is {msg}</Text>
      <View style={styles.btnWrap}>
        <Button
          title="Go to Details again"
          onPress={() => {
            navigation.push('Detail', {
              itemId: 66,
              msg: 'from detail',
            });
          }}
        />
        <Button
          style={styles.btn}
          title="Go Back"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HOME"
          component={HomeScreen}
          options={{title: 'Home title'}}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  btnWrap: {
    height: 100,
    justifyContent: 'space-between',
  },
});

export default App;
