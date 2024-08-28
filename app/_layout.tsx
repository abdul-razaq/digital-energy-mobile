import '../global.css';

import { Slot } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useFonts from '~/hooks/useFonts';

const queryClient = new QueryClient();

export default function Layout() {
  const [loaded, error] = useFonts();

  if (!loaded && !error) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
}
