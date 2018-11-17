import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class DetailOeuvre extends React.Component {
    render() {
        return (
          <View style={styles.content}>
            <View style={styles.header}>
              <Image style={styles.image} source={{uri: "image"}}></Image>
              <View style={styles.headercontent}>
                <Text style={styles.head}> Titre </Text>
                <Text> Auteur </Text>
              </View>
            </View>
            <View style={styles.details}>
              <Text> Date </Text>
              <Text> Type </Text>
              <Text> Materiel </Text>
            </View>
            <View style={styles.note}>
              <Text> *   *   *   *   * </Text>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  content: {
    marginTop : 30,
    flex:1
  },
  header: {
    marginTop : 5,
    flex:4,
    flexDirection: 'row'
  },
  details: {
    marginTop : 5,
    flex:3
  },
  note:{
    height: 60,
    fontSize: 20
  },
  image : {
    flex: 1,
    height:180,
    width:120,
    backgroundColor: 'grey'
  },
  headercontent :{
    flex: 2
  },
  head : {
    fontWeight: 'bold',
    fontSize: 20
  }
})

export default DetailOeuvre
