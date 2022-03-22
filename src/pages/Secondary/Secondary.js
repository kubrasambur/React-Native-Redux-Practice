import {Text, View, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import styles from "./Secondary.styles"

const Secondary = () => {
  const username = useSelector(s => s.username);
  const logData = useSelector(s => s.logList);
  console.log(logData)
  const renderList = ({item,index}) => <Text style={styles.log_text}>Log {index+1} :{item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.username_text}>USERNAME : {username}</Text>
      <FlatList data={logData} renderItem={renderList} />
    </View>
  );
};

export default Secondary;
