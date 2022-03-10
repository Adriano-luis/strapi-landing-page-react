import { Base } from '.';

import mockBase from './mock';

export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBase,
  argsTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
