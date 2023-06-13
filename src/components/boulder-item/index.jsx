import { View, TouchableOpacity, Image, Text } from 'react-native';

import { styles } from './styles';

const BoulderItem = ({ id, image, title, address, onSelect }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BoulderItem;
