import React from 'react';

import {Text, View, FlatList, StyleSheet, ScrollView} from 'react-native';

const MyList = () => {
  const list = [];
  for (let i = 0; i < 10; i++) {
    list.push(`item${i}`);
  }
  return (
    <ScrollView style={styles.container}>
      {/* <FlatList
        data={list}
        style={styles.flat}
        renderItem={({item}) => <Text style={styles.label}>{item}</Text>}
      /> */}
      <View style={[styles.box, styles.box1]}>
        <Text>w: 100, h: 100</Text>
      </View>
      <View style={[styles.box, styles.box2]}>
        <Text>w: 200, h: 200. fontSize: 16</Text>
        <Text>九天开出一成都</Text>
        <Text>万户千门如画图</Text>
      </View>
      <View style={[styles.box, styles.box5]}>
        <Text>w: 375, h: 375</Text>
        <Text>RN 尺寸</Text>
      </View>
      <View style={[styles.box, styles.box3]}>
        <Text>w: 400, h: 400</Text>
        <Text style={[{fontSize: 12}]}>朝辞白帝彩云间12</Text>
        <Text style={[{fontSize: 14}]}>朝辞白帝彩云间14</Text>
        <Text style={[{fontSize: 16}]}>朝辞白帝彩云间16</Text>
        <Text style={{fontSize: 18}}>千里江陵一日还18</Text>
        <Text style={{fontSize: 20}}>两岸猿声啼不住20</Text>
        <Text style={{fontSize: 24}}>轻舟已过万重山24</Text>
        <Text style={{fontSize: 28}}>轻舟已过万重山28</Text>
        <Text style={{fontSize: 36}}>轻舟已过万重山36</Text>
        <Text style={{fontSize: 48}}>轻舟已过万重山48</Text>
      </View>
      <View style={[styles.box, styles.box4]}>
        <Text>w: 600, h: 600</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    overflow: 'scroll',
  },
  flat: {
    height: 200,
    backgroundColor: '#ccc',
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
    marginHorizontal: 20,
    color: 'teal',
  },
  box: {
    marginBottom: 20,
  },
  box1: {
    width: 100,
    height: 100,
    fontSize: 16,
    backgroundColor: 'pink',
  },
  box2: {
    width: 200,
    height: 200,
    backgroundColor: 'teal',
  },
  box3: {
    width: 400,
    height: 400,
    fontSize: 18,
    backgroundColor: 'aqua',
  },
  box4: {
    width: 600,
    height: 600,
    backgroundColor: 'orange',
  },
  box5: {
    width: 375,
    height: 375,
    backgroundColor: 'skyblue',
  },
});

export default MyList;
