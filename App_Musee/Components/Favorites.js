import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ItemOeuvre from './ItemOeuvre'


class Favorites extends React.Component {

  _displayDetailForOeuvre = (urlOeuvre, titleOeuvre, artisteOeuvre, imageOeuvre, materielOeuvre, themeOeuvre, dateOeuvre ) => {
    this.props.navigation.navigate("DetailOeuvre", { url: urlOeuvre, title: titleOeuvre, artiste: artisteOeuvre, photo: imageOeuvre, materiel: materielOeuvre, theme: themeOeuvre, date: dateOeuvre})
  }


  render() {
    if(this.props.favoritesOeuvre.length>0){
    return (
     <View style={styles.contents}>
        <View style={styles.main_container}>
          <FlatList
            data={this.props.favoritesOeuvre}
            keyExtractor={(item) => item.url}
            renderItem={({item}) => <ItemOeuvre oeuvre={item} displayDetailForOeuvre={this._displayDetailForOeuvre}/>}
          />
        </View>
      </View>
    )
    }
    else {
      return (
  <View style={styles.contents}>
          <View style={styles.main_container}>
      <Text> Vous n’avez pas de favoris. </Text>
    </View>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  contents: {
    backgroundColor: '#FBF8EF',
    flex: 1
  },
  main_container: {
    marginLeft: 15,
    marginRight: 15,
    flex: 1
  }
})

//On connecte ici le state global aux props du component Favorites
const mapStateToProps = (state) => {
  return {
    favoritesOeuvre: state.favoritesOeuvre
  }
}
export default connect(mapStateToProps)(Favorites)

