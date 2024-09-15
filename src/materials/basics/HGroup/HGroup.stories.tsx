import type { Meta, StoryObj } from '@storybook/react';
import HGroup from './HGroup';
import Title from '@/materials/basics/Title';
import Content from '@/materials/basics/Content';

const meta = {
  title: 'Basics/HGroup',
  component: HGroup,
} satisfies Meta<typeof HGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Title value="Title" />
        <Content element="p">Content</Content>
      </>
    ),
  },
};

export const Reversed: Story = {
  args: {
    ...Default.args,
    isReversed: true,
  },
};
