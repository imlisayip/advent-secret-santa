// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Card from './Card'

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Card>

export const Primary: Story = {
  args: {
    avatar: '/images/placeholder__avatar-01.png',
    isCloseShowing: true,
    name: 'Lisa Yip',
    email: 'hello@lisayip.com',
  },
}

export const closeButtonNotShowing: Story = {
  args: {
    avatar: '/images/placeholder__avatar-01.png',
    isCloseShowing: false,
    name: 'Lisa Yip',
    email: 'hello@lisayip.com',
  },
}
