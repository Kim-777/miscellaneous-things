import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from '../components/Button'
import { useToast, PositionType } from '../context/ToastContext'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


const Basic = ({}) => {

  const toast = useToast()

  const handleToast = React.useCallback((text, options) => () => {
    toast.callToast(text, options)
  }, [toast])

  return (
    <View style={styles.wrapper}>
      <Button text={`탑 토스트`} onPress={handleToast(`탑 토스트`, {position: PositionType.top})} />
      <Button text={`중앙 토스트`} onPress={handleToast(`중앙 토스트`, {position: PositionType.center})} />
      <Button text={`바텀, 3초\n토스트`} onPress={handleToast(`바텀 토스트`, {position: PositionType.bottom, duration: 3000})} />
      <Button text={`검은배경\n토스트`} onPress={handleToast(`검은배경\n토스트`, {position: PositionType.center, isWhiteText: true})} />
    </View>
  )
}

export default Basic
