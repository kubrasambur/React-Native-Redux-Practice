import {View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import styles from "./Primary.styles"

const Primary = () => {
  const [log, setLog] = useState('');
  const [username, setUserName] = useState('');
  const dispatch = useDispatch();

  const handleAddUsername = () => {
    dispatch({type: 'ADD_USERNAME', payload:{username}});
  };
  const handleAddLog = () => {
    dispatch({type: 'ADD_LOG', payload:{log}});
  };
  const handleDeleteList = () => {
    dispatch({type: 'CLEAN_LIST'});
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        style={styles.input}
        placeholder="Please enter user name"
        onChangeText={setUserName}
      />

      <View style={styles.add_username_btn}>
        <Button title="Add user name" onPress={handleAddUsername} />
      </View>

      <TextInput
        value={log}
        style={styles.input}
        placeholder="Enter log"
        onChangeText={setLog}
      />
      <View style={styles.add_log_btn}>
        <Button title="Add log" onPress={handleAddLog}/>
      </View>
      <View style={styles.delete_btn}>
        <Button title="delete list" onPress={handleDeleteList}/>
      </View>
    </View>
  );
};

export default Primary;
