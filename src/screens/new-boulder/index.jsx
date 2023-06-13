import { useState } from 'react';
import { View, Text, TextInput, ScrollView, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { ImageSelector } from '../../components/image-selector';
import { saveBoulder } from '../../store/boulder.slice';
import colors from '../../utils/colors';
import { styles } from './styles';

const NewBoulder = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  const onHandlerChangeText = (text) => {
    setText(text);
  };

  const onHandlerSubmit = () => {
    dispatch(saveBoulder({ title: text, image }));
    navigation.navigate('Boulders');
  };

  const onImage = (imageUri) => {
    setImage(imageUri);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Nueva Ubicación</Text>
        <TextInput
          style={styles.input}
          placeholder="Lugar"
          onChangeText={onHandlerChangeText}
          value={text}
        />
        <TextInput />
        <ImageSelector onImage={onImage} />
        <Button title="Grabar dirección" color={colors.primary} onPress={onHandlerSubmit} />
      </View>
    </ScrollView>
  );
};

export default NewBoulder;
