import { SectionContainer } from '.';
export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          suscipit, neque magni repudiandae libero fugiat aliquam perspiciatis.
          Molestiae voluptates voluptas iure dolor dignissimos. Minus mollitia
          vero pariatur, qui nulla minima.
        </p>
      </div>
    ),
  },
  argsTypes: {
    children: { type: '' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
