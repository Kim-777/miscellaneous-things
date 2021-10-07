import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from '../components/Button'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'burlywood'
  }
})

const Animation = ({}) => {

  return (
    <View style={[styles.wrapper]}>
      <Button style={styles.button} text={`애니메이션 \n 토스트`}/>
    </View>
  )
}

export default Animation


