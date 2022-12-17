import React, {useEffect, useState} from 'react';

import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {getData} from './FetchData';
import ListItem from './ListItem';

const ListHeader = () => (
  <>
    <View style={styles.titleWraper}>
      <Text style={styles.largeTitle}>Cryptocurrency Prices</Text>
    </View>
    <View style={styles.divider} />
  </>
);

const App = () => {
  const [currency, setCurrency] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dt = await getData();
      setCurrency(dt);
    };

    fetchData();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={currency}
          renderItem={({item}) => (
            <ListItem
              name={item.name}
              symbol={item.symbol}
              currentPrice={item.current_price}
              priceChangePercentage={item.price_change_percentage_24h}
              logoUrl={item.image}
            />
          )}
          ListHeaderComponent={<ListHeader />}
        />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25262A',
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  titleWraper: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16,
  },
});

export default App;
