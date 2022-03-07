import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section Background</h1>
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
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
