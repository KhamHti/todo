import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  useColorScheme,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {ToDoItem} from './src/components/ToDoItem';
import colors from './src/config/colors';
import spacing from './src/config/spacing';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const initTodos = [
    'go to shop',
    'eat at least a one healthy foods',
    'Do some exercises',
  ];
  const [todos, setTodos] = useState(initTodos);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (!newTodo.trim()) {
      return;
    }
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const deleteItem = (todo: string) => {
    setTodos([...todos.filter(i => i !== todo)]);
  };

  return (
    <SafeAreaView style={styles.constainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
        <View style={styles.appTitleView}>
          <Text style={styles.appTitleText}>To Do List</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            value={newTodo}
            onChangeText={text => setNewTodo(text)}
            placeholder="add to do list"
          />
        </View>
        <TouchableOpacity onPress={addTodo} style={styles.buttonView}>
          <Text style={styles.btnText}>Add to do</Text>
        </TouchableOpacity>

        <View>
          {todos.map(todo => (
            <ToDoItem key={todo} todo={todo} deleteItem={deleteItem} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  appTitleView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing,
  },
  appTitleText: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.dark,
  },
  textInputContainer: {
    marginVertical: spacing * 2,
    borderRadius: 10,
    marginHorizontal: spacing,
  },
  textInput: {
    borderRadius: spacing,
    height: spacing * 5,
    borderWidth: 1,
    margin: spacing,
    backgroundColor: colors.primary,
    padding: spacing,
  },
  buttonView: {
    backgroundColor: colors.btn,
    width: '69%',
    height: spacing * 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: spacing,
    marginBottom: spacing * 2,
  },
  btnText: {
    color: colors['dark-light'],
    fontWeight: '800',
    fontSize: 18,
  },
});
