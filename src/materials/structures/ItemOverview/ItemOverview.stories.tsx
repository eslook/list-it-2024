import type { Meta, StoryObj } from '@storybook/react';
import ItemOverview from './ItemOverview';
import db from 'db';

const meta = {
  title: 'Structures/ItemOverview',
  component: ItemOverview,
} satisfies Meta<typeof ItemOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    itemPromise: new Promise(resolve => resolve(db.products[0])),
    initialLists: db.wishlists,
  },
};
