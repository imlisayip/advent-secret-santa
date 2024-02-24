import { Metadata } from '@redwoodjs/web'

import HeadingWithRulers from 'src/components/HeadingWithRulers/HeadingWithRulers'

const DeclinePage = () => {
  return (
    <>
      <Metadata title="Decline" description="Decline page" />

      <HeadingWithRulers className="text-white" heading="Thanks" />
      <h1 className="page-title">You'll be missed</h1>
    </>
  )
}

export default DeclinePage
