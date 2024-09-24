import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Gabriel Lunar - Desarrollador Web Full-Stack',
    description:
      'Soy Gabriel Lunar, desarrollador web full stack. Me encanta crear sitios web que no solo se vean bien, sino que también funcionen de manera impecable. Siempre busco la mejor forma de llevar las ideas a la realidad digital.',
    faviconPath: '/src/assets/favicon.png',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
