import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabIcon = ({ text, rootIcon, focused }: { text: string; rootIcon: any; focused: any }) => {
    return (
        <ImageBackground source={focused ? require('../../assets/images/highlight.png') : null} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: focused ? 110 : 50, minHeight: 54, marginTop: 16, borderRadius: 9999, overflow: 'hidden', flexDirection: 'row' }}>
                            <Image source={rootIcon} tintColor={focused ? "#151312" : '#FFFFFF'} style={{ width: 20, height: 20 }}/>
                            {focused && <Text style={{ color:  '#151312', fontSize: 16, fontWeight: '500', marginLeft: 8 }}>{text}</Text>}
                        </ImageBackground>
    )
}

const _layout = () => {
    return (
        <Tabs screenOptions={
            {
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#000000',
                    borderTopWidth: 0,
                    height: 80,
                }
            }
        }>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon text="Home" rootIcon={require('../../assets/icons/home.png' )} focused = { focused } />
                    )
                }}
            />
            <Tabs.Screen name="search" options={{
                    title: "Search",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon text="Search" rootIcon={require('../../assets/icons/search.png' )} focused = { focused } />
                    )
                }} />
            <Tabs.Screen name="lists" options={{
                    title: "Lists",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon text="Lists" rootIcon={require('../../assets/icons/book.png' )} focused = { focused } />
                    )
                }} />
                <Tabs.Screen name="friends" options={{
                    title: "Friends",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon text="Friends" rootIcon={require('../../assets/icons/users.png' )} focused = { focused } />
                    )
                }} />
            <Tabs.Screen name="profile" options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon text="Profile" rootIcon={require('../../assets/icons/person.png' )} focused = { focused } />
                    )
                }} />
        </Tabs>
    )
}

export default _layout