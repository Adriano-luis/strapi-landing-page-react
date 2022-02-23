import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Teste ok',
    light: false,
  },
  argTypes: {
    children: { type: 'string' },
    light: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const light = (args) => <Heading {...args} />;
export const dark = (args) => <Heading {...args} light={true} />;

light.parameters = {
  backgrounds: {
    default: 'light',
  },
};
