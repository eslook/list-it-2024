import type { Meta, StoryObj } from '@storybook/react';
import Link from './Link';

const meta = {
  title: 'Basics/Link',
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextOnly: Story = {
  args: {
    href: '/',
    children: <>Hello World</>,
  },
};
