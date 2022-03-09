import { GridTwoColoumn } from '.';
import mock from './mock';

export default {
  title: 'GridTwoColoumn',
  component: GridTwoColoumn,
  args: mock,
  argsTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <GridTwoColoumn {...args} />
    </div>
  );
};
