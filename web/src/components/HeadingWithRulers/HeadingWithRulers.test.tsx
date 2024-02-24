import { render } from '@redwoodjs/testing/web'

import HeadingWithRulers from './HeadingWithRulers'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HeadingWithRulers', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeadingWithRulers />)
    }).not.toThrow()
  })
})
