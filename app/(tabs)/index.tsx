import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import AR from '@/components/TextFilter';
import LoveFilterAR from '@/components/LoveFilter';







export default function HomeScreen() {
  return (
    // <LoveFilterAR/>
    <AR/>
  );
}

