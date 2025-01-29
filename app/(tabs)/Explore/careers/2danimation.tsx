import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, FlatList, ScrollView } from 'react-native';
import { Chip } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { WebView } from 'react-native-webview';
import { Platform } from 'react-native';
const AnimationPage = () => {
  const [selectedChip, setSelectedChip] = useState('Details'); // Default to 'Details'
  const [likeColor, setLikeColor] = useState('#000'); // Default color for like icon

  // Define static values for wages, endorsement, and degree requirement
  const salary = '$53K';
  const endorsement = 'Arts & Humanities';
  const degreeRequirement = 'No Degree Requirement';

  const videoIds = [
    'V8eWxOLXLK8',
    'DwJ1ZcTQl-Y',
    '-uuY_FXZtcc',
    'xgKdiPFrdl0',
    'DfI78TdBbAw',
    'kNw8V_Fkw28',
  ];

  const colleges = [
    {
      id: "1",
      name: "University of Texas at Austin",
      location: "Austin, Texas",
      image: "https://i.ibb.co/MxM37fBR/concordia.jpg",
    },
    {
      id: "2",
      name: "Cornell University",
      location: "Ithaka, New York",
      image: "https://i.ibb.co/fdd6js4S/cornell-university.jpg",
    },
    {
      id: "3",
      name: "St. Edward's University",
      location: "Austin, Texas ",
      image: "https://i.ibb.co/21V8PWMr/edward.jpg",
    },
    {
      id: "4",
      name: "The university of Manchester",
      location: " Manchester, England",
      image: "https://i.ibb.co/zTRxLhwt/manchester.jpg",
    },
    {
      id: "5",
      name: "University of Texas at Dallas",
      location: " Richardson, Texas",
      image: "https://i.ibb.co/Dm5fwN3/uot.jpg",
    },
  ];

  const getRandomVideoInfo = () => {
    return {
      views: Math.floor(Math.random() * 1000000),  // Random views between 0 and 1 million
      likes: Math.floor(Math.random() * 50000),   // Random likes between 0 and 50k
      minutes: Math.floor(Math.random() * 15) + 1, // Random video duration between 1 and 15 minutes
    };
  };
  // Render content based on selected chip
  const renderContent = () => {
    switch (selectedChip) {
      case 'Details':
        return (
          <View style={styles.detailsContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: 'https://i.ibb.co/vZdvv0Y/d1.jpg' }}
                style={styles.animationImage}
              />
              <TouchableOpacity
                onPress={() => setLikeColor(likeColor === '#000' ? '#ff69b4' : '#000')}
                style={styles.likeIconContainer}
              >
                <Ionicons name="heart" size={40} color={likeColor} />
              </TouchableOpacity>
            </View>

            {/* New Container for Wages, Endorsement, and Degree Requirement */}
            <View style={styles.additionalInfoContainer}>
              <Text style={styles.labelText}>Wages:</Text>
              <Text style={styles.salaryText}>{salary}</Text>
              <Text style={styles.labelText}>Endorsement:</Text>
              <Text style={styles.contentText}>{endorsement}</Text>
              <Text style={styles.labelText}>Degree Required:</Text>
              <Text style={styles.contentText}>{degreeRequirement}</Text>
            </View>

            {/* Description Container Below Additional Info */}
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionHeading}>Description</Text>
              <Text style={styles.descriptionText}>
              2D Animation is a timeless art form that brings characters and stories to life through a sequence of images, each slightly different from the last, creating the illusion of movement. It is a creative process that involves designing characters, environments, and scenes, then animating them in a two-dimensional space. From traditional hand-drawn animation to digital techniques, 2D animation continues to captivate audiences worldwide.
              In 2D animation, the focus is on crafting visually appealing and expressive characters, using artistic principles like timing, motion, and exaggeration. It’s an effective medium for storytelling, with applications ranging from cartoons and TV shows to films, advertisements, and video games. Unlike 3D animation, which involves modeling and rendering in three-dimensional space, 2D animation keeps everything on a flat plane, making it more accessible for smaller teams or independent creators.
              </Text>
            </View>
            
            {/* Career Courses Section */}
            <View style={styles.careerCoursesContainer}>
              <Text style={styles.careerCoursesHeading}>Career Courses</Text>
              <View style={styles.horizontalLine} />
              <Text style={styles.stylesofcourses}>Level 1:</Text>
              <Text style={[styles.careerCourseItem, styles.artsMethods]}>Art Methods & Theories</Text> 
              <View style={styles.horizontalLine} />
              <Text style={styles.stylesofcourses}>Level 2:</Text>
              <Text style={[styles.careerCourseItem, styles.artsMethods]}> 2D Design: Elements + Principles</Text>
              <View style={styles.horizontalLine} />
              <Text style={styles.stylesofcourses}>Level 3:</Text>
              <Text style={[styles.careerCourseItem, styles.artsMethods]}>Fundamentals of Animation</Text>
              <View style={styles.horizontalLine} />
              <Text style={styles.stylesofcourses}>Level 4:</Text>
              <Text style={[styles.careerCourseItem, styles.artsMethods]}>Animation & Motion Studies</Text>
            </View>

          </View>
        );
      case 'Videos':
  return (
    <ScrollView style={styles.container1}>
      {videoIds.map((id, index) => {
        const videoInfo = getRandomVideoInfo();
        
        return (
          <View key={index} style={styles.videoContainer}>
            {Platform.OS === 'web' ? (
              <iframe
                style={{
                  width: '100%',
                  height: 200,
                  border: 'none',
                }}
                src={`https://www.youtube.com/embed/${id}`}
                allowFullScreen
              />
            ) : (
              <WebView
                style={styles.videoPlayer}
                source={{ uri: `https://www.youtube.com/embed/${id}` }}
                allowsFullscreenVideo
              />
            )}
            
            {/* Video Info Section */}
            <View style={styles.videoInfoContainer}>
              <Text style={styles.videoInfoText}>Views: {videoInfo.views.toLocaleString()}</Text>
              <Text style={styles.videoInfoText}>Likes: {videoInfo.likes.toLocaleString()}</Text>
              <Text style={styles.videoInfoText}>Duration: {videoInfo.minutes} minutes</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
      case 'Colleges':
    return (
      <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 10 }}>
        <Text style={{ color: '#5D5D5D', fontSize: 16, textAlign: 'center', marginBottom: 20 }}>
          Colleges providing Course(s) related to this Career.
        </Text>
  
        {/* Manually create containers for each college */}
        {colleges.map((college) => (
          <View key={college.id} style={styles.card}>
            <Image source={{ uri: college.image }} style={styles.image} />
            <Text style={styles.name}>{college.name}</Text>
            <Text style={styles.location}>{college.location}</Text>
          </View>
        ))}
      </View>
    );
      case 'Similar Careers':
        return (
          <View style={styles.infoContainer}>
            <Text style={styles.contentText}>
              Related careers include graphic design, illustration, and game design. Each offers unique opportunities to work in creative fields.
            </Text>
          </View>
        );
      default:
        return null; // No content for unrecognized chips
    }
  };

  return (
    <View style={styles.container}>
      {/* Chips Container */}
      <View style={styles.chipContainer}>
        {['Details', 'Videos', 'Colleges', 'Similar Careers'].map((chip) => (
          <Chip
            key={chip}
            style={[
              styles.chip,
              selectedChip === chip ? styles.selectedChip : styles.defaultChip,
            ]}
            textStyle={{
              color: selectedChip === chip ? '#fff' : '#000', // Set text color based on selection
            }}
            onPress={() => {
              setSelectedChip(chip);
              console.log(`${chip} pressed`);
            }}
          >
            {chip}
          </Chip>
        ))}
      </View>

      {/* Scrollable Content Based on Selected Chip */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {renderContent()}
      </ScrollView>
    </View>
  );
};

export default AnimationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start', // Align items to the start (top left)
    justifyContent: 'flex-start', // Align items to the start (top)
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  chipContainer: {
    flexDirection: 'row', // Arrange chips horizontally
    flexWrap: 'wrap', // Allow chips to wrap if they exceed the width
  },
  chip: {
    marginHorizontal: 5, // Space between chips
    marginVertical: 5, // Optional vertical spacing for better layout
  },
  selectedChip: {
    backgroundColor: '#000', // Fill color for selected chip
  },
  defaultChip: {
    backgroundColor: '#fff', // Default background color
  },
  contentContainer: {
    marginTop: 20, // Space between chips and content
    paddingHorizontal: 10,
    width: '100%', // Full width for content display
    paddingBottom: 20, // Optional padding at the bottom for scrollable area
  },
  detailsContainer: {
    position: 'relative', // Position relative for absolute positioning of icon
  },
  imageContainer: {
    position: 'relative', // Position relative for absolute positioning of icon
    marginBottom: 30,
  },
  animationImage: {
    width: '100%', // Full width of container
    height: undefined,
    aspectRatio: 16 / 9, // Maintain aspect ratio
    borderRadius: 10, // Optional border radius for image
  },
  likeIconContainer: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    backgroundColor: 'rgba(255,255,255,0.8)', // Optional background for better visibility
    borderRadius: 20,
    padding: 5,
  },
  infoContainer: {
    backgroundColor: '#fff', // Background color for the info container
    padding: 10,
    borderRadius: 8,
    marginTop: -10, // Adjust spacing as needed (negative margin to overlap slightly with image)
  marginBottom: 20, // Space between info containers
  },
  additionalInfoContainer:{
    backgroundColor:'#A1AEB5',// Background color for additional info container 
    padding :15 , 
    borderRadius :10 , 
    marginTop :10 , 
  },
  labelText:{
    fontSize :18 ,// Increased font size for labels 
    color :'#F1F1F1',// Color of labels set to light gray 
    marginBottom :4 ,// Space below label 
  },
  salaryText:{
    fontSize :24 ,// Increased font size for salary 
    fontWeight :'bold',
    color :'#000' ,// Color of salary set to black 
    marginBottom :10 ,// Space below salary 
  },
  contentText:{
    fontSize :16 ,
    fontWeight :'bold' ,
    color :'#000' , 
    lineHeight :24 ,
    marginTop :6 , 
  },
  descriptionContainer:{
    backgroundColor:'#F1F1F1',
    padding :15 ,
    borderRadius :8 ,
    marginTop :10 ,
  },
  descriptionHeading:{
    fontSize :18 ,
    fontWeight :'bold',
    color :'#333',
    marginBottom :8 ,
  },
  descriptionText:{
    fontSize :16 ,
    color :'#333',
    lineHeight :24 ,
  },
  careerCoursesContainer:{
    backgroundColor:'#F1F1F1',
    padding :15 ,
    borderRadius :8 ,
    marginTop :10 ,
  },
  careerCoursesHeading:{
    fontSize :18 ,
    fontWeight :'bold',
    color :'#333',
    marginBottom :8 ,
  },
  careerCourseItem:{
    fontSize :16 ,
    color :'#5D5D5D' ,// Set Level text color here 
    marginBottom :4 ,
  },
    artsMethods:{
      fontSize :16,
      color:'#CE7202', // Set Arts & Methods text color here 
      marginBottom :4,
    },
     horizontalLine:{
       height :1,
       backgroundColor :'#000', // Color of the horizontal line 
       marginVertical :10 , // Space above and below the line 
     },
     stylesofcourses: {
       marginBottom: 15,
     },
     container1: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 10,
      position: 'relative',
    },
    videoTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    videoContainer: {
      marginBottom: 20,
      backgroundColor: '#fff', // Optional for better visibility
      borderRadius: 8, // Rounded corners for better aesthetics
      overflow: 'hidden', // Ensure no overflow beyond the container
      elevation: 3, // Optional shadow for better look
    },
    videoPlayer: {
      width: '100%', // Take full width of the container
      aspectRatio: 16 / 9, // Maintain the 16:9 aspect ratio
      alignSelf: 'center', // Center align the WebView
    },
    videoInfoContainer: {
      marginTop: 10,
      padding: 10,
      backgroundColor: '#f9f9f9',
      borderRadius: 5,
    },
    videoInfoText: {
      fontSize: 14,
      color: '#333',
      marginBottom: 5,
    },
    card: {
    backgroundColor: "#F9F9F9",
    borderRadius: 20,
    padding: 16,
    marginVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    width: '110%', // Full width
    maxWidth: 420, // Increased max width to give more space to the card
    alignSelf: 'center', // Center the cards within the container
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12, // Added margin to separate image from text
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 6, // Spacing between name and location
    textAlign: "center",
  },
  location: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});
