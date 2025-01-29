import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useRouter } from 'expo-router';

const SearchBarComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const router = useRouter(); // useRouter for navigation

  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <Searchbar
          placeholder="Search Careers, Colleges.."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchbar}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Professional Careers */}
          <TouchableOpacity
            onPress={() => router.push('/(tabs)/Explore/professionalcareers')} // Navigate to professionalCareers page
            activeOpacity={0.8}
          >
            <ImageBackground
              source={{ uri: 'https://i.ibb.co/v1CgMxJ/career.jpg' }}
              style={styles.imageContainer}
              resizeMode="cover"
            >
              <Text style={styles.overlayText}>Professional Careers</Text>
            </ImageBackground>
          </TouchableOpacity>

          {/* Military Careers */}
          <ImageBackground
            source={{ uri: 'https://i.ibb.co/v1CgMxJ/career.jpg' }}
            style={styles.imageContainer}
            resizeMode="cover"
          >
            <Text style={styles.overlayText}>Military Careers</Text>
          </ImageBackground>
        </ScrollView>

        {/* Colleges */}
        <ImageBackground
          source={{ uri: 'https://i.ibb.co/X41KkWF/college.jpg' }}
          style={styles.collegeImageContainer}
          resizeMode="cover"
        >
          <Text style={styles.collegeOverlayText}>Colleges</Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Optional: Set a background color for the scroll view
  },
  searchbar: {
    margin: 10,
    elevation: 4,
    borderRadius: 25,
  },
  imageContainer: {
    height: 400,
    justifyContent: 'flex-start',
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden',
    width: 350,
  },
  overlayText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
  },
  collegeImageContainer: {
    height: 400, // Same height as other containers
    justifyContent: 'flex-start',
    marginHorizontal: 10, // Margin for left and right
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 10, // Space above this container
    marginBottom: 30,
  },
  collegeOverlayText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
  },
});

export default SearchBarComponent;
