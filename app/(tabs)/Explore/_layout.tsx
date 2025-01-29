import { Stack } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="explore1" 
        options={{ 
          title: 'Explore',
          headerShown: false, // Hides the header for the explore1 screen
        }} 
      />
      <Stack.Screen 
        name="careers" 
        options={{ 
          title: 'Professional Careers',
          headerRight: () => (
            <FontAwesome 
              name="bell" // The bell icon
              size={24} 
              color="black" 
              style={{ marginRight: 10 }} // Style it as needed
            />
          ),
          headerShown: false, // Hides the header for the professionalcareers screen
        }} 
      />
    </Stack>
  );
}
