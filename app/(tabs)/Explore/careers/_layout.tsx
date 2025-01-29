import { Stack } from 'expo-router';
import { FontAwesome, Entypo } from '@expo/vector-icons'; // Import the icon libraries
import { View } from 'react-native'; // Use View for layout

export default function RootLayout() {
  return (
    <Stack>
      {/* <Stack.Screen 
        name="Explore/professionalcareers" 
        options={{ 
          title: 'Professional Careers',
          headerShown: false, 
        }}   
      /> */}
      <Stack.Screen 
        name="2danimation" 
        options={{ 
          title: '2D Animation',
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <FontAwesome 
                name="question" // Question mark icon
                size={24} 
                color="black"
              />
              <Entypo 
                name="message" // Message/chat bubble icon
                size={24} 
                color="black"
              />
            </View>
          ),
        }} 
      />
    </Stack>
  );
}
