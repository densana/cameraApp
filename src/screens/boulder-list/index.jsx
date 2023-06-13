import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import BoulderItem from '../../components/boulder-item';
import { styles } from './styles';

const BoulderList = ({ navigation }) => {
  const boulders = useSelector((state) => state.boulder.boulders);

  const onHandlerSelect = (id) => {
    navigation.navigate('BoulderDetail', { boulderId: id });
  };

  const renderItem = ({ item }) => (
    <BoulderItem {...item} address="Muro 123" onSelect={onHandlerSelect} />
  );
  const keyExtractor = (item) => item.id;
  return (
    <FlatList
      data={boulders}
      style={styles.container}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default BoulderList;
