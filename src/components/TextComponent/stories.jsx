import { TextComponent } from '.';
export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Voluptates asperiores eum consectetur perferendis aliquam doloribus.
     Pariatur aliquid harum quaerat ad necessitatibus quod facilis consequatur, 
     illum magnam perferendis repellat voluptas earum?`,
  },
  argsTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
