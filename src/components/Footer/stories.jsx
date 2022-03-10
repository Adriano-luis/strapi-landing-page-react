import { Footer } from '.';
export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a href="https://www.linkedin.com/in/ad-oliveira">Feito com <3 pro Adriano Oliveira</a></p>`,
  },
};
export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
