import Ionicons from '@expo/vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';

import {
  MapsScreen,
  NewBoulderScreen,
  BoulderDetailScreen,
  BoulderListScreen,
} from '../screens/index';
import colors from '../utils/colors';

const Stack = createNativeStackNavigator();

const BouldersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Boulder"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? colors.primary : colors.secondary,
        },
        headerTintColor: colors.black,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Boulders"
        component={BoulderListScreen}
        options={({ navigation }) => ({
          title: 'Direcciones',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('NewBoulder')}>
              <Ionicons name="add-circle-outline" size={25} color={colors.white} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="BoulderDetail"
        component={BoulderDetailScreen}
        options={{ title: 'Detalles de la dirección' }}
      />
      <Stack.Screen
        name="NewBoulder"
        component={NewBoulderScreen}
        options={{ title: 'Nuevo Boulder' }}
      />
      <Stack.Screen name="Maps" component={MapsScreen} options={{ title: 'Mapa' }} />
    </Stack.Navigator>
  );
};

export default BouldersNavigator;
