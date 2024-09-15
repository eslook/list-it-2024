import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';

const meta = {
  title: 'Basics/Image',
  component: Image,
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1579981585180-a607ac041812',
    width: 200,
    height: 267,
    alt: 'Laula',
  },
};
