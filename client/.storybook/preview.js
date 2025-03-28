/** @type { import('@storybook/react').Preview } */
import 'primeicons/primeicons.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;