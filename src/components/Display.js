import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {addPosts} from '../toolkit/apiSlice';

const Display = () => {
  const [text, setText] = useState([]);
  const dispatcher = useDispatch();
  let apiData = [];

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/`).then(response => {
      setText(response.data);
      dispatcher(addPosts(response.data));
      // console.log(response.data.title);
      // return <Text>response.data.title</Text>;
    });
  }, []);

  console.log(text);
  return (
    <>
      {/* console.log({text}); */}
      {text.map(item => {
        return (
          <View>
            <Text>{item.title}</Text>
          </View>
        );
      })}
    </>
  );
};

export default Display;

const styles = StyleSheet.create({});
