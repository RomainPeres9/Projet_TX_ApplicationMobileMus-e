import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

class ErreurConnexion extends React.Component {
  
    render() {
        
        return (
         <View style={styles.contents}>
      		<View style={styles.content}>
              		<Text> Le mail avec le quel vous essayez de vous connecter est inconnu.</Text>
            	</View>
   	 </View>
        )
    }

}

const styles = StyleSheet.create({
  contents: {
    backgroundColor: '#FBF8EF',
    flex: 1
  },
  content: {
    marginLeft: 15,
    marginRight: 15,
    flex: 1
  }
})

export default ErreurConnexion
