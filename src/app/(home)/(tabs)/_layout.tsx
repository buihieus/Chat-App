import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
export default function TabsNavigator() {
    return (
    <Tabs
    screenOptions={{
        headerTitleAlign: 'center',
        // tabBarLabelStyle: {
        //   textAlign: 'center',     // ✅ Căn giữa text
        //   fontSize: 12,
        // },
        // tabBarIconStyle: {
        //   justifyContent: 'center',
        //   alignItems: 'center',
        // },
        // tabBarStyle: {
        //   height: 60,
        // },
      }}
    >

        <Tabs.Screen 
            name="index" 
            options={{ 
                title: "Chat",
                tabBarIcon: ({size,color}) => 
                <FontAwesome5 name="home" size={size} color={color} /> 
        }} />
        <Tabs.Screen 
            name="profile" 
            options={{ 
                title: "Profile",
                tabBarIcon: ({size,color}) => 
                <FontAwesome5 name="user-alt" size={size} color={color} /> 
        }} />
    </Tabs>)
}