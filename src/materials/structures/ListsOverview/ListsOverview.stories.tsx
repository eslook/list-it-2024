import type { Meta, StoryObj } from '@storybook/react';
import ListsOverview from './ListsOverview';
import db from 'db';

const meta = {
  title: 'Structures/ListsOverview',
  component: ListsOverview,
} satisfies Meta<typeof ListsOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialLists: db.wishlists,
  },
};
