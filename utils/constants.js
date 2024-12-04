import { useColorScheme } from '@/hooks/useColorScheme';

const colorScheme = useColorScheme();

export const COLOR = {
  base: colorScheme === 'dark' ? '#fff' : '#000',
  accent: '#008080',
};

export const APP = {
  name: "CRKT",
  alias: "CRKT.io",
  domain: "crkt.com.ng",
  description: "News Aggregator powered by OpenAI",
};
