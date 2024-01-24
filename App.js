import { cva } from 'class-variance-authority'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import './global.css'

const button = cva(
  'flex group transition duration-300 items-center justify-center font-inter text-sm border rounded-full shadow-xs pl-4 pr-4 cursor-pointer whitespace-nowrap gap-2',
  {
    variants: {
      variant: {
        primary: [
          'bg-gray-950 hover:bg-gray-900 text-brand-white border-[#171717] hover:border-[#686868] disabled:border-none disabled:bg-gray-50 disabled:text-gray-700',
        ],
        secondary: [
          'bg-white hover:bg-gray-50 text-gray-700 border-gray-300 hover:border-gray-300 focus:outline-none focus:bg-white focus:border-gray-300 disabled:border-gray-25 disabled:bg-white disabled:text-gray-700',
        ],
      },
      size: {
        sm: ['px-4 py-2'],
        xl: ['px-4 py-3'],
        '2xl': ['px-6 py-4'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'xl',
    },
  },
)

export const Button = ({ className, variant, title, size, rightIcon, leftIcon, ...props }) => {
  return (
    <View>
      <TouchableOpacity className={button({ variant, size })} {...props}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text className="text-red-500 border">Open up App.js to start working on your app!</Text>
      <Button variant="primary" size="sm" title="Sample" />
      <Button variant="secondary" size="2xl" title="Sample" />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
