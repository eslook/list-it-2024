import type { Meta, StoryObj } from '@storybook/react';
import DescriptionList from './DescriptionList';

const meta = {
  title: 'Basics/DescriptionList',
  component: DescriptionList,
} satisfies Meta<typeof DescriptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { key: 'Meow', value: 'Nya~n' },
      { key: 'Mrruh mrrrr', value: 'Miaow, miaow' },
      { key: 'Mrow yowl', value: 'Yowl, meow: mrruh miauw' },
    ],
  },
};
