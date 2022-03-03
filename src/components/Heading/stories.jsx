import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Teste ok',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const light = (args) => <Heading {...args} />;
export const dark = (args) => <Heading {...args} />;

light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

dark.args = {
  colorDark: false,
};
