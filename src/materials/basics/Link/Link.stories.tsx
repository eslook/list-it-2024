import type { Meta, StoryObj } from '@storybook/react';
import Link from './Link';

const meta = {
  title: 'Basics/Link',
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '/',
    children: <>Hello World</>,
  },
};

export const Button: Story = {
  args: {
    href: '/',
    variant: 'button',
    children: <>Hello World</>,
  },
};

export const Inactive: Story = {
  args: {
    href: '/',
    variant: 'inactive',
    children: <>Hello World</>,
  },
};
