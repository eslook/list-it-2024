import type { Meta, StoryObj } from '@storybook/react';
import MetaPageBlock from './MetaPageBlock';

const meta = {
  title: 'Structures/MetaPageBlock',
  component: MetaPageBlock,
} satisfies Meta<typeof MetaPageBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    code: '404',
    title: 'Not meow-nd',
    description: 'This page is swiped off the table',
    action: 'Take me to the Cat Den',
  },
};
