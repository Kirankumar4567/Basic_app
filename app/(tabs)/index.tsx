import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Surface,
  Text,
  ProgressBar,
  Card,
  IconButton,
  useTheme,
  Avatar,
  List,
} from 'react-native-paper';

export const MainScreen = () => {
  const theme = useTheme();
  const completionPercentage = 0.4;
  const gapPercentage = 0.62;
  const paceDaysRemaining = 7;

  const upcomingEvents = [
    {
      date: '23 Jan 2025',
      title: 'ECISD CTE Auto Tech Career Placement Showcase Event',
    },
    {
      date: '26 Jan 2025',
      title: 'Monahans Regional Career Fair/Expo',
    },
  ];

  const favorites = [
    {
      icon: 'briefcase',
      title: 'Careers',
      description: 'Dental Assistants, Derrick Operators, Electrical Power Installation...',
    },
    {
      icon: 'school',
      title: 'Colleges',
      description: 'Austin College, Dartmouth College, Missouri College, Texas A&M...',
    },
  ];

  return (
    <SafeAreaProvider>
      <ScrollView style={styles.scrollView}>
        {/* Profile Header */}
        <Surface style={styles.profileHeader}>
          <View style={styles.profileInfo}>
            <Avatar.Text size={60} label="JD" />
            <View>
              <Text variant="headlineSmall" style={styles.profileName}>John Doe</Text>
              <Text variant="titleMedium">Software Engineer</Text>
            </View>
          </View>
        </Surface>

        {/* Profile Completion */}
        <Card  style={[styles.card, { backgroundColor: '#D3D3FF' }]}>
          <Card.Content>
            <View style={styles.cardHeader}>
              <Text variant="titleLarge" style={styles.cardTitle}>Profile</Text>
              <IconButton icon="chevron-right" mode="contained" size={20} />
            </View>
            <ProgressBar progress={completionPercentage} style={styles.progressBar} />
            <Text variant="titleMedium" style={styles.progressText}>{Math.round(completionPercentage * 100)}% Completed</Text>
          </Card.Content>
        </Card>

        {/* GAP and PACE Cards */}
        <View style={styles.cardContainer}>
          {/* GAP Card */}
          <Card style={styles.flexCard}>
            <Card.Content style={[styles.cardContent, styles.gapCard]}>
              <Text variant="labelLarge" style={styles.cardLabel}>Next Step</Text>
              <View style={styles.cardHeader}>
                <Text variant="titleLarge" style={styles.cardTitle}>GAP</Text>
                <IconButton icon="chevron-right" mode="contained" size={20} />
              </View>
              <ProgressBar progress={gapPercentage} style={styles.progressBar} />
              <Text variant="titleMedium" style={styles.progressText}>{Math.round(gapPercentage * 100)}%</Text>
              <Text variant='bodyMedium' style ={styles.gapText}>Completed</Text>
              <Text variant="bodyMedium" style={styles.gapText}>Take Career Interest Survey</Text>
            </Card.Content>
          </Card>

          {/* PACE Card */}
          <Card style={styles.flexCard}>
            <Card.Content style={[styles.cardContent, styles.paceCard]}>
              <Text variant="labelLarge" style={styles.cardLabel}>Pending Task</Text>
              <View style={styles.cardHeader}>
                <Text variant="titleLarge" style={styles.cardTitle}>PACE</Text>
                <IconButton icon="chevron-right" mode="contained" size={20} />
              </View>
              <Text variant="displaySmall" style={styles.paceDays}>{paceDaysRemaining}</Text>
              <Text variant="titleMedium">days</Text>
              <Text variant="bodyMedium" style={styles.paceText}>To Submit Math Assignment</Text>
            </Card.Content>
          </Card>
        </View>

        {/* Upcoming Events */}
        <Card style={[styles.card, styles.upcomingCard]}>
          <Card.Content>
            <View style={styles.cardHeader}>
              <Text variant="titleLarge" style={styles.cardTitle}>Upcoming</Text>
              <IconButton icon="chevron-right" mode="contained" size={20} />
            </View>
            {upcomingEvents.map((event, index) => (
              <React.Fragment key={index}>
                <List.Item
                  title={event.title}
                  description={event.date}
                  left={props => <List.Icon {...props} icon="calendar" />}
                  style={styles.eventItem}
                />
                {index < upcomingEvents.length - 1 && (
                  <Card.Content>
                    <View style={styles.separator} />
                  </Card.Content>
                )}
              </React.Fragment>
            ))}
          </Card.Content>
        </Card>

        {/* Favorites */}
        <Card style={[styles.card, styles.favoritesCard]}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.favoritesTitle}>Favourites</Text>
            {favorites.map((item, index) => (
              <Card key={index} mode="outlined" style={styles.favoriteCard}>
                <Card.Content>
                  <List.Item
                    title={item.title}
                    description={item.description}
                    left={props => <List.Icon {...props} icon={item.icon} />}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                  />
                </Card.Content>
              </Card>
            ))}
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: { flex: 1, backgroundColor: 'white' },
  profileHeader: { padding: 16, elevation: 1 },
  profileInfo: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  profileName: { fontWeight: 'bold' },
  card: { margin: 16, marginBottom: 20},  // Add marginBottom to create space between cards
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  cardTitle: { fontWeight: 'bold' },
  progressBar: { height: 8, borderRadius: 4 },
  progressText: { marginTop: 12 },
  cardContainer: { flexDirection: 'row', gap: 16, marginHorizontal: 16, alignItems: 'stretch' },
  flexCard: { flex: 1 },
  cardContent: { borderRadius: 12, flex: 1 },
  gapCard: { backgroundColor: '#FFEBEB' },
  paceCard: { backgroundColor: '#A8E6CF' },
  cardLabel: { color: '#F08080', fontWeight: 'bold', fontSize: 15 },
  gapText: { marginTop: 4, color: 'black' },
  paceDays: { fontWeight: 'bold', color: 'black' },
  paceText: { marginTop: 4, color: 'black' },
  upcomingCard: { backgroundColor: '#ADD8E6',},
  eventItem: { paddingVertical: 8 },
  separator: { height: 1, backgroundColor: '#000' },
  favoritesCard: { backgroundColor: '#FAD5A5' },
  favoritesTitle: { fontWeight: 'bold', marginBottom: 16 },
  favoriteCard: { marginBottom: 12 }, // Add marginBottom for space between individual favorite items
});

export default MainScreen;