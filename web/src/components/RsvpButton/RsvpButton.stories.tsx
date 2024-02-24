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

import RsvpButton from './RsvpButton'

const meta: Meta<typeof RsvpButton> = {
  component: RsvpButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RsvpButton>

export const ThumbsDown: Story = {
  args: {
    heading: 'Regretfully decline',
    className: 'bg-orangeRed text-white',
    icon: 'thumbsDown',
  },
}

export const ThumbsUp: Story = {
  args: {
    heading: `I'll be there`,
    className: 'bg-spanishGreen text-white',
    icon: 'thumbsUp',
  },
}
