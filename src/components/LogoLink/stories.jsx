import { LogoLink } from '.';
export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    scrImg: 'assets/images/Logo.svg',
    link: 'Link',
  },
  argsTypes: {
    text: { type: 'string' },
    scrImg: { type: 'string' },
    link: { type: 'string' },
  },
};

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  scrImg: '',
};
