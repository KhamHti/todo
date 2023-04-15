import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from '../config/colors';
import spacing from '../config/spacing';

const img = require('../assets/images/delete.png');

export const ToDoItem: React.FC<{
  todo: string;
  deleteItem: Function;
}> = ({todo, deleteItem}) => {
  return (
    <SafeAreaView style={styles.todoContainer}>
      <Text style={styles.sectionTitle}>{todo}</Text>
      <TouchableOpacity onPress={() => deleteItem(todo)} style={styles.imgView}>
        <Image
          source={img}
          style={{
            width: spacing * 4,
            height: spacing * 4,
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    marginTop: 10,
    paddingHorizontal: 24,
    backgroundColor: colors.primary,
    marginHorizontal: spacing * 2,
    borderRadius: spacing,
    height: spacing * 6,
    borderWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: spacing * 2,
    fontWeight: '400',
    color: colors.dark,
  },
  imgView: {
    backgroundColor: colors.secondary,
    borderRadius: spacing,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
