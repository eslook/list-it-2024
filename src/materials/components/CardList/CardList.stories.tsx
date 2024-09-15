import type { Meta, StoryObj } from '@storybook/react';
import CardList from './CardList';
import Title from '@/materials/basics/Title';
import Content from '@/materials/basics/Content';
import React from 'react';

const meta = {
  title: 'Components/CardList',
  component: CardList,
} satisfies Meta<typeof CardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: <></> },
  render: () => (
    <CardList>
      <div>
        <Title value="Meow Den" />
        <Content value="Meow meow mrrrp yowl hiss" />
      </div>
      <div>
        <Title value="Purr Palace" />
        <Content value="Meowww purr mrrrp hiss" />
      </div>
      <div>
        <Title value="Claw Corner" />
        <Content value="Mrrrp meowww yowl mrow" />
      </div>
      <div>
        <Title value="Whisker World" />
        <Content value="Meow yowl mrrp hiss purr" />
      </div>
    </CardList>
  ),
};
