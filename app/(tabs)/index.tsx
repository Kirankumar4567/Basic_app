import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

const ViewBoxesWithColorAndImage = () => {
  const completionPercentage = 40; // Profile completion percentage
  const GapPercentage = 62; // Gap completion percentage
  const paceDaysRemaining = 7; // Days remaining to submit math assignment

  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
      <View style={styles.profileTextContainer}>
      <Text style={styles.profileName}>John Doe</Text>
      <Text style={styles.profileRole}>Software Engineer</Text>
    </View>
    </View>

        {/* Profile Completion Status Bar */}
        <View style={styles.progressBarContainer}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressText}>Profile</Text>
            <MaterialIcons style={styles.arrowBackground} name="arrow-forward" size={24} color="black" />
          </View>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${completionPercentage}%` },
              ]}
            />
          </View>
          <Text style={styles.progressTextCompleted}>{completionPercentage}% Completed</Text>
        </View>

        {/* GAP and PACE Sections */}
        <View style={styles.rowContainer}>
          <View style={styles.leftContainer}>
            <View style={[styles.labeledContainer, { backgroundColor: '#FFEBEB' , borderColor: '#FFEBEB'}]}>
              <View style={styles.labelBox}>
                <Text style={styles.labelText}>Next Step</Text>
              </View>
              <View style={styles.progressHeader}>
                <Text style={styles.progressText}>GAP</Text>
                <MaterialIcons style={styles.arrowBackground} name="arrow-forward" size={24} color="black" />
              </View>
              <View style={styles.progressBarBackground}>
                <View
                  style={[
                    styles.progressBarFill,
                    { width: `${GapPercentage}%` },
                  ]}
                />
              </View>
              <Text style={styles.progressTextCompleted}>{GapPercentage}%</Text>
              <Text style={styles.progressTextCompleted}>Take Career Interest Survey</Text>
            </View>
          </View>

          <View style={styles.rightContainer}>
            <View style={[styles.labeledContainer, { backgroundColor: '#EBFFEB' }]}>
              <View style={styles.labelBox}>
                <Text style={styles.labelText}>Pending Task</Text>
              </View>
              <View style={styles.progressHeader}>
                <Text style={styles.progressText}>PACE</Text>
                <MaterialIcons style={styles.arrowBackground} name="arrow-forward" size={24} color="black" />
              </View>
              <Text style={styles.daysSize}>{paceDaysRemaining}</Text>
              <Text style={styles.progressTextCompleted}>days</Text>
              <Text style={styles.progressTextCompleted}>To Submit Math Assignment</Text>
            </View>
          </View>
        </View>

        {/* Upcoming Tasks Section */}
        <View style={styles.upcomingTasksContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.upcomingTasksHeader}>Upcoming</Text>
            <MaterialIcons style={styles.arrowBackground} name="arrow-forward" size={24} color="black" />
          </View>

          <View>
            <View style={styles.taskTextContainer}>
              <Text style={styles.taskText}>
                <MaterialIcons name="calendar-today" size={24} color="black" />  23 Jan 2025
              </Text>
              <Text style={styles.taskDeadline}>ECISD CTE Auto Tech Career Placement Showcase Event </Text>
            </View>
          </View>

          <View style={styles.line} />

          <View>
            <View style={styles.taskTextContainer}>
              <Text style={styles.taskText}>
                <MaterialIcons name="calendar-today" size={24} color="black" />  26 Jan 2025
              </Text>
              <Text style={styles.taskDeadline}>Monahans Regional Career Fair/Expo </Text>
            </View>
          </View>
        </View>

        {/* Favourites Section */}
        <View style={styles.favouritesContainer}>
          <Text style={styles.upcomingTasksHeader}>Favourites</Text>

          {/* Task 1 Container */}
          <View style={styles.taskContainer}>
            <View style={styles.taskContent}>
              <Text style={styles.taskText}>
                <MaterialIcons name="work" size={24} color="black" /> Careers
              </Text>
              <Text style={styles.taskDeadline}>
                Dental Assistants, Derrick Operators, Electrical Power Installation...
              </Text>
            </View>
            <MaterialIcons style={styles.arrowBackground} name="arrow-forward" size={24} color="black" />
          </View>

          {/* Task 2 Container */}
          <View style={styles.taskContainer}>
            <View style={styles.taskContent}>
              <Text style={styles.taskText}>
                <MaterialIcons name="school" size={24} color="black" /> Colleges
              </Text>
              <Text style={styles.taskDeadline}>
                Austin College, Dartmouth College, Missouri College, Texas A&M...
              </Text>
            </View>
            <MaterialIcons style={styles.arrowBackground} name="arrow-forward" size={24} color="black" />
          </View>
        </View>

      </ScrollView>
    </SafeAreaProvider>
  );
};

export default ViewBoxesWithColorAndImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  arrowBackground: {
    backgroundColor: 'white',
    borderRadius: 20,
  },
  profileContainer: {
    padding: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  profileTextContainer: {
    alignItems: 'flex-start', // Align text to the left
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileRole: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  progressBarContainer: {
    backgroundColor: '#D3D3FF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  progressText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  progressTextCompleted: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  progressBarBackground: {
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#826cb9',
    borderRadius: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  leftContainer: {
    flex: 1,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
  },
  daysSize: {
    fontSize: 16,
  },
  labeledContainer: {
    padding: 20,
    borderWidth: 2,
    borderColor: '#EBFFEB',
    borderRadius: 10,
    backgroundColor: '#fff',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  labelBox: {
    position: 'absolute',
    top: -12,
    left: 20,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
  },
  labelText: {
    color: '#F08080',
    fontSize: 14,
    fontWeight: 'bold',
  },
  upcomingTasksContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ADD8E6',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  line: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  upcomingTasksHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskContainer: {
    flexDirection: 'row', // Align items horizontally
  justifyContent: 'space-between', // Space out content and arrow
  alignItems: 'center', // Vertically align items
  backgroundColor: '#FAD5A5',
  padding: 15,
  borderRadius: 10,
  marginBottom: 10,
  },
  taskContent: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  taskDeadline: {
    fontSize: 14,
    color: '#555',
  },
  favouritesContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 30,
  },
  taskTextContainer: {
    marginBottom: 10,
  },
});
