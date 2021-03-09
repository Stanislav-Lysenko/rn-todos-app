import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Dimensions, FlatList} from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar} from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: 'test1'},
    {id: 2, title: 'test2'},
    {id: 3, title: 'test3'},
    {id: 4, title: 'test4'},
    {id: 5, title: 'test5'},
    {id: 6, title: 'test6'},
    {id: 7, title: 'test7'},
    {id: 8, title: 'test8'}
  ]);

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }

    // setTodos((prevTodos) => {
    //   return [
    //     ...prevTodos, newTodo
    //   ]
    // })

    setTodos(prev => [...prev,
       {
         id: Date.now().toString(),
        title: title
      }
    ])
  }
  return (
    <View style={styles.screen}>
    {/* <ScrollView> */}
      <Navbar title='Todo app!' />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <Todo todo={item} />
          )}
          keyExtractor={item => item.id.toString()}
        >
          {/* { todos.map(todo => (
            <Todo todo={item} key={todo.id} />
          ))} */}
        </FlatList>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    flex: 1

  },
  screen: {
    height: '100%'
  }
});
