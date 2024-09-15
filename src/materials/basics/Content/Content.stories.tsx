import type { Meta, StoryObj } from '@storybook/react';
import Content from './Content';
import Image from 'next/image';

const meta = {
  title: 'Basics/Content',
  component: Content,
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlainTextInPassedElement: Story = {
  args: {
    element: 'p',
    value: 'Hello World',
  },
};

export const RichtTextAsValue: Story = {
  args: {
    value: '<p>Hello World</p>',
  },
};

export const RichTextAsChildren: Story = {
  args: {
    children: (
      <>
        <h1>Heading 1</h1>
        <p>Hello World</p>

        <h1>Lorem Ipsum</h1>
        <p>
          Neque <a href="/">porro quisquam</a> est qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit.
        </p>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Consectetur <em>adipiscing elit</em>. Fusce vehicula condimentum
          condimentum. Vivamus a sodales est. Nullam venenatis massa urna, at
          suscipit nisi varius eget. Integer id blandit mi. Morbi ut eros
          aliquet, porttitor neque at, blandit nunc. Curabitur quis sagittis
          nunc. Donec a commodo nisl. Nullam vehicula sodales fringilla.
          Suspendisse accumsan dictum ex, ac volutpat erat aliquet ut. Quisque
          aliquam sem nec nisi porta tempor. Donec tincidunt mollis mollis.
          Quisque hendrerit odio eu mauris iaculis, et sagittis leo semper. Duis
          id risus sodales, elementum purus et, mollis lorem. Duis et imperdiet
          nisi, ac sagittis ligula. Nam quis enim in est vehicula tincidunt sit
          amet eget dolor.
        </p>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Aenean odio velit, <strong>bibendum</strong> vitae varius vel.
        </p>
        {/* Purposefuly using an img, which is what a RTE would return */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1579981585180-a607ac041812"
          alt="Lorem Ipsum"
          width={150}
        />
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Pellentesque et turpis. Praesent iaculis risus in congue ullamcorper.
          Aliquam vehicula pharetra sem, id feugiat est semper quis.
        </p>
        <h3>Duis non urna urna.</h3>
        <Image
          src="https://images.unsplash.com/photo-1579981585180-a607ac041812"
          alt="Lorem Ipsum"
          width={150}
          height={200}
        />
        <p>
          Aliquam in massa odio. Morbi nec vehicula velit, sit amet tempor
          massa. Pellentesque maximus porta purus et luctus. Ut augue felis,
          hendrerit in dolor id, consectetur porttitor sem. Curabitur posuere
          nec justo id aliquet. In pharetra, augue eu vulputate aliquet, quam
          est mollis sem, sit amet mattis quam felis in est. Aliquam erat
          volutpat. Fusce congue arcu at purus vehicula scelerisque.
          Pellentesque ligula augue, pulvinar eu tincidunt eu, finibus non
          augue. Sed vehicula nibh pulvinar mi scelerisque imperdiet. Phasellus
          ullamcorper sem sed augue fermentum, eu dictum ipsum pretium.
        </p>
        <small>Ut tincidunt augue sit amet facilisis blandit.</small>
      </>
    ),
  },
};
