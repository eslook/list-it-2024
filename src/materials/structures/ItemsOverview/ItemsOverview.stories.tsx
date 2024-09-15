import type { Meta, StoryObj } from '@storybook/react';
import ItemsOverview from './ItemsOverview';
import db from 'db';

const meta = {
  title: 'Structures/ItemsOverview',
  component: ItemsOverview,
} satisfies Meta<typeof ItemsOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    itemsPromise: new Promise(resolve => resolve(db.products)),
  },
};
