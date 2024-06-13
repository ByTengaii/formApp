import * as Font from 'expo-font';
import { useFonts, Inter_600SemiBold, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export default function useAppFonts() {
  const [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_400Regular,
    Inter_700Bold,
    // add more fonts here
  });

  return fontsLoaded;
}