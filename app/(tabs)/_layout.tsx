import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, TouchableOpacity } from 'react-native';  // Import TouchableOpacity for click functionality
import { usePathname, Link } from 'expo-router'; // Import Link for navigation

export default function TabLayout() {
  const pathname = usePathname();  // Get current pathname

  // Check if the current path is the "professionalcareers" page
  const isProfessionalCareersPage = pathname === '/Explore/professionalcareers';
  const is2DAnimationPage = pathname === '/Explore/careers/2danimation'; // Check for the 2danimation page

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        headerTitleAlign: 'center', // Center align the header title
        headerLeft: () => (
          !(isProfessionalCareersPage || is2DAnimationPage) && (  // Hide left icon for both pages
            <Link href="/profile">  {/* Wrap Image in Link to navigate to profile */}
              <Image
                source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}  // Link to the image
                style={{ width: 44, height: 44, borderRadius: 15, marginLeft: 10 }}  // Adjust size and border radius
              />
            </Link>
          )
        ),
        headerRight: () => (
          !(isProfessionalCareersPage || is2DAnimationPage) && (  // Hide right icon for both pages
            <Ionicons
              name="notifications-outline"  // Bell icon
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}  // Adjust margin as needed
            />
          )
        ),
        // Apply tabBarStyle conditionally to hide the tab bar for both professionalcareers and 2danimation pages
        tabBarStyle: (isProfessionalCareersPage || is2DAnimationPage) ? { display: 'none' } : {
          backgroundColor: '#25292e',
        },
        // Conditionally hide the header for both pages
        headerShown: !(isProfessionalCareersPage || is2DAnimationPage), // Hide the header for both pages
      }}
    >
      <Tabs.Screen
        name="Explore"
        options={{
          title: 'Explore',  // Use a string for the title
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'compass' : 'compass-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="videos"
        options={{
          title: 'Videos',  // Use a string for the title
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'videocam' : 'videocam-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',  // Use a string for the title
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="school"
        options={{
          title: 'School',  // Use a string for the title
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'school' : 'school-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',  // Use a string for the title
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
