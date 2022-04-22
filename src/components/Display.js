import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {
  addPosts,
  lengthSelector,
  makePostData,
  postSelector,
} from '../toolkit/apiSlice';
import {useSelector} from 'react-redux';
import {fetchPostData} from './../toolkit/apiSlice';

const Display = () => {
  const {postList, postListLoading} = useSelector(postSelector);
  console.log(postList);
  const length = useSelector(lengthSelector);
  // const [text, setText] = useState([]);
  const dispatcher = useDispatch();
  let apiData = [];
  const body = {
    postId: 1,
    id: 3,
    name: 'odio adipisci rerum aut animi',
    email: 'Nikita@garfield.biz',
  };
  useEffect(() => {
    // axios.get(`https://jsonplaceholder.typicode.com/posts/`).then(response => {
    //   setText(response.data);
    //   dispatcher(addPosts(response.data));
    // console.log(response.data.title);
    // return <Text>response.data.title</Text>;
    // });
    dispatcher(fetchPostData());
  }, [dispatcher]);

  const postMaker = () => {
    dispatcher(makePostData(body));
    // console.log(makePostData);
  };
  // console.log(text);
  return (
    <>
      {postListLoading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <View>
          <TouchableOpacity onPress={postMaker}>
            <Text>Add Post</Text>
          </TouchableOpacity>
          <View>
            <Text>{length}</Text>
          </View>
          <ScrollView>
            <View>
              {postList.map((item, index) => {
                return (
                  <Text key={item.id + index}>{index + '-' + item.email}</Text>
                );
              })}
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default Display;

const styles = StyleSheet.create({});
