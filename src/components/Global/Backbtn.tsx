import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Backbtn({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <Ionicons name="arrow-back" size={30} color="black" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})