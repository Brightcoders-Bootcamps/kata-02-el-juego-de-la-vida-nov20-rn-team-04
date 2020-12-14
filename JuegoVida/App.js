import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';

class square {
  constructor(live, x, y) {
    this.live = live;
    this.x = x;
    this.y = y;
  }
}

const DATA = [];

for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    const obj = new square(Math.floor(Math.random() * 2), i, j);
    DATA.push({obj: obj});
  }
}

const Item = ({live}) => (
  <View style={styles.item} backgroundColor={live == 1 ? 'green' : 'black'} />
);

const numColumn = 10;

const App = () => {
  const renderItem = ({item}) => (
    <Item title={item.obj.x} live={item.obj.live} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        numColumns={numColumn}
        key={numColumn}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  item: {
    paddingVertical: 20,
    paddingHorizontal: 1,
    marginVertical: 1,
    marginHorizontal: 1,
    flex: 1,
  },
});



export default App;
