import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

const meta = {
  title: 'Basics/Title',
  component: Title,
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'Hello World',
  },
};
