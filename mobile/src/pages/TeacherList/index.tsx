import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys Disponíveis">
        <Text>teste</Text>
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ 
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />

      </ScrollView>
    </View>
  );
}

export default TeacherList;