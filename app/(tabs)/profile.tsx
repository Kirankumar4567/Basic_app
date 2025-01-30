import React, { useState } from 'react';
import { View, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Chip,
  Divider,
  IconButton,
  List,
  Surface,
  Text,
  useTheme,
  ProgressBar,
} from 'react-native-paper';

export const MainScreen = () => {
  const theme = useTheme();
  const [following, setFollowing] = useState(false);

  const skills = [
    { name: 'React Native', level: 0.9 },
    { name: 'JavaScript', level: 0.85 },
    { name: 'TypeScript', level: 0.8 },
    { name: 'Node.js', level: 0.75 },
  ];

  const achievements = [
    { icon: 'trophy', title: 'Top Developer 2023', description: 'Ranked #1 in community' },
    { icon: 'star', title: '100 Projects', description: 'Completed milestone' },
    { icon: 'heart', title: '1K+ Followers', description: 'Growing community' },
  ];

  return (
    <ScrollView style={styles.scrollView}>
      <ImageBackground
        source={{ uri: 'https://picsum.photos/800/400' }}
        style={styles.imageBackground}
      >
        <View style={styles.imageOverlay}>
          <Text variant="headlineMedium" style={styles.nameText}>
            John Doe
          </Text>
          <Text variant="titleMedium" style={styles.roleText}>
            Software Engineer
          </Text>
        </View>
      </ImageBackground>

      <Surface style={styles.surface}>
        <View style={styles.avatarContainer}>
          <Avatar.Image
            size={120}
            source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
            style={styles.avatar}
          />
          <View style={styles.actionButtonsContainer}>
            <Button
              mode={following ? "outlined" : "contained"}
              onPress={() => setFollowing(!following)}
            >
              {following ? 'Following' : 'Follow'}
            </Button>
            <IconButton
              icon="message"
              mode="contained-tonal"
              onPress={() => {}}
            />
            <IconButton
              icon="share-variant"
              mode="contained-tonal"
              onPress={() => {}}
            />
          </View>
        </View>

        <Divider />

        <View style={styles.sectionContainer}>
          <Text variant="titleMedium" style={styles.sectionTitle}>About</Text>
          <Text variant="bodyMedium" style={styles.sectionText}>
            Passionate software engineer with 2+ years of experience in building scalable applications.
            Love to contribute to open source and mentor upcoming developers.
          </Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text variant="titleMedium" style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <View key={index}>
                <View style={styles.skillRow}>
                  <Text variant="bodyMedium">{skill.name}</Text>
                  <Text variant="bodyMedium">{Math.round(skill.level * 100)}%</Text>
                </View>
                <ProgressBar
                  progress={skill.level}
                  style={styles.progressBar}
                />
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text variant="titleMedium" style={styles.sectionTitle}>Achievements</Text>
          {achievements.map((achievement, index) => (
            <List.Item
              key={index}
              title={achievement.title}
              description={achievement.description}
              left={props => <List.Icon {...props} icon={achievement.icon} />}
              style={styles.listItem}
            />
          ))}
        </View>

        <View style={styles.sectionContainer}>
          <Text variant="titleMedium" style={styles.sectionTitle}>Expertise</Text>
          <View style={styles.chipContainer}>
            <Chip icon="code-tags">Frontend</Chip>
            <Chip icon="database">Backend</Chip>
            <Chip icon="cloud">Cloud</Chip>
            <Chip icon="security">Security</Chip>
            <Chip icon="test-tube">Testing</Chip>
            <Chip icon="chart-line">Performance</Chip>
          </View>
        </View>
      </Surface>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  imageBackground: {
    height: 200,
  },
  imageOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    padding: 16,
  },
  nameText: {
    color: 'white',
    fontWeight: 'bold',
  },
  roleText: {
    color: 'white',
  },
  surface: {
    margin: 16,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: 'white',
  },
  avatarContainer: {
    padding: 16,
    alignItems: 'center',
  },
  avatar: {
    marginTop: -76,
    borderWidth: 4,
    borderColor: 'white',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    gap: 8,
  },
  sectionContainer: {
    padding: 16,
  },
  sectionTitle: {
    marginBottom: 8,
  },
  sectionText: {
    color: '#666',
  },
  skillsContainer: {
    gap: 12,
  },
  skillRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    marginTop: 4,
  },
  listItem: {
    paddingVertical: 4,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});

export default MainScreen;
