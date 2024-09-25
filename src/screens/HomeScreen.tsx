// screens/HomeScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { logout } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch()
  const  handleLogout = () => {
    dispatch(logout())
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className="text-2xl">Home Screen</Text>
      <Button title="Đăng xuất" onPress={handleLogout} />

      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export default HomeScreen;
