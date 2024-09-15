import type { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';
import Title from '@/materials/basics/Title';

const meta = {
  title: 'Components/Hero',
  component: Hero,
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Title value="Cat Den" />,
  },
};
