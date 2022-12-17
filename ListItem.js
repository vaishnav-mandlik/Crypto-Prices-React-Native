import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const ListItem = ({
  name,
  symbol,
  currentPrice,
  priceChangePercentage,
  logoUrl,
  onPress,
}) => {
  const priceChangeColor = priceChangePercentage > 0 ? '#34C759' : '#FF3B30';
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemWrapper}>
        <View style={styles.leftWrapper}>
          <Image
            source={{
              uri: logoUrl,
            }}
            style={styles.image}
          />
          <View style={styles.titleWraper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          </View>
        </View>

        <View style={styles.rightWrapper}>
          <Text style={styles.title}>
            {currentPrice.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Text>
          <Text style={[styles.subtitle, {color: priceChangeColor}]}>
            {priceChangePercentage.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 48,
    width: 48,
  },
  titleWraper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 14,
    color: '#A9ABB1',
    marginTop: 4,
  },

  rightWrapper: {
    alignItems: 'flex-end',
  },
});

export default ListItem;
