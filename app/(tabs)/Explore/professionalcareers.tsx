import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router'; // Import useRouter for navigation

const ProfessionalCareers = () => {
  const [infoColor, setInfoColor] = useState('#000'); // Default black
  const [closeColor, setCloseColor] = useState('#000'); // Default black
  const [likeColor, setLikeColor] = useState('#000'); // Default black
  const [salary, setSalary] = useState('$56K'); // State for salary
  const [degreeRequirement, setDegreeRequirement] = useState('No Degree Requirement'); // State for degree requirement
  const [endorsement, setEndorsement] = useState('Arts & Humanities'); // State for endorsement
  const router = useRouter(); // Initialize router

  return (
    <View style={styles.container}>
      {/* Image with Overlay */}
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => router.push({
          pathname: '/(tabs)/Explore/careers/2danimation',
          params: { title: '2D Animation' }, // Pass title as params
        })}
      >
        <Image
          source={{ uri: 'https://i.ibb.co/vZdvv0Y/d1.jpg' }}
          style={styles.image}
        />
        {/* Overlayed Text */}
        <View style={styles.overlayTextContainer}>
          <View style={styles.endorsementContainer}>
            <Text style={[styles.overlayText, styles.endorsementText]}>Endorsement</Text>
            <Text style={[styles.overlayText, styles.artsHumanitiesText]}>{endorsement}</Text>
          </View>
          <Text style={[styles.overlayText, styles.animationText]}>2D Animation</Text>
          <Text style={[styles.overlayText, styles.degreeRequirementText]}>{degreeRequirement}</Text>
        </View>
        {/* Salary Label */}
        <View style={styles.salaryContainer}>
          <Text style={styles.salaryText}>{salary}</Text>
        </View>
      </TouchableOpacity>

      {/* Icons */}
      <View style={styles.iconContainer}>
        {/* Like Icon */}
        <TouchableOpacity onPress={() => setLikeColor(likeColor === '#000' ? '#ff69b4' : '#000')}>
          <View style={[styles.iconBackground, { backgroundColor: '#ffe0e0' }]}>
            <Ionicons name="heart" size={40} color={likeColor} />
          </View>
        </TouchableOpacity>

        {/* "i" Icon */}
        <TouchableOpacity onPress={() => setInfoColor(infoColor === '#000' ? '#ffd33d' : '#000')}>
          <View style={[styles.iconBackground, { backgroundColor: '#e0e0e0' }]}>
            <Ionicons name="information-circle" size={40} color={infoColor} />
          </View>
        </TouchableOpacity>

        {/* "X" Icon */}
        <TouchableOpacity onPress={() => setCloseColor(closeColor === '#000' ? '#ff0000' : '#000')}>
          <View style={[styles.iconBackground, { backgroundColor: '#f0e0e0' }]}>
            <Ionicons name="close-circle" size={40} color={closeColor} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Button with navigation */}
      <TouchableOpacity
        style={styles.exploreButton}
        onPress={() => router.push({
          pathname: '/(tabs)/Explore/careers/2danimation',
          params: { title: '2D Animation' }, // Pass title as params
        })}
      >
        <Text style={styles.buttonText}>Explore all careers</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfessionalCareers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  imageContainer: {
    position: 'relative',
    width: 400,
    height: '70%',
    borderRadius: 10,
    overflow: 'hidden', // Ensure text stays within the container
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlayTextContainer: {
    position: 'absolute',
    bottom: 20, // Position at the bottom
    left: 20, // Adjust as needed
  },
  endorsementContainer: {
    flexDirection: 'row', // Align texts horizontally
    alignItems: 'center', // Center vertically
  },
  overlayText: {
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginBottom: 5, // Spacing between lines
    paddingHorizontal: 5,
  },
  endorsementText: {
    fontSize: 9,
    backgroundColor: 'transparent', // Remove background for endorsement
    paddingVertical: 2,
  },
  artsHumanitiesText: {
    fontSize: 12,
    backgroundColor: '#000', // Black background for Arts & Humanities
    paddingVertical: 2,
    borderRadius: 5, // Add border radius
    marginLeft: 5, // Space between endorsement and arts & humanities
  },
  animationText: {
    fontSize: 24,
    backgroundColor: 'transparent', // No background for this line
    marginBottom: 10, // Adjust spacing if necessary
  },
  degreeRequirementText: {
    fontSize: 14,
    backgroundColor: 'transparent', // No background for this line
    marginBottom: 10, // Adjust spacing if necessary
  },
  salaryContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  salaryText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Evenly space icons
    alignItems: 'center',
    width: 400, // Match the image width for consistent spacing
    marginTop: -20, // Adjust positioning to be close to the image
    marginBottom: 20, // Space between icons and button
  },
  iconBackground: {
    padding: 15, // Added padding around the icon
    borderRadius: 50, // Circular background
    alignItems: 'center',
    justifyContent: 'center',
   },
   exploreButton:{
     width :350,
     height :56,
     marginTop :20,
     paddingBottom :0,
     gap :10,
     borderRadius :16,
     opacity :1,// Set opacity to visible (1)
     alignItems:'center', 
     justifyContent:'center', 
     backgroundColor:'#000',// Optional background color for visibility 
   },

   buttonText:{
     color:'#fff',// White text 
     fontSize :20,// Text size 
     fontWeight :'bold',// Bold text 
     textAlign :'center', 
   },

});
