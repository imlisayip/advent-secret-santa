import { Metadata } from '@redwoodjs/web'

import HeadingWithRulers from 'src/components/HeadingWithRulers/HeadingWithRulers'
import RsvpButton from 'src/components/RsvpButton/RsvpButton'

const RsvpPage = () => {
  return (
    <>
      <Metadata title="RSVP" description="Rsvp page" />
      <HeadingWithRulers className="text-white" heading={'YOURE INVITED TO'} />
      <h1 className="page-title">SMITH CHRISTMAS</h1>
      <h3 className="m-0 mb-10 font-handwriting uppercase leading-none text-white">
        December 23, 2023
      </h3>
      <div className="flex justify-center gap-10">
        <RsvpButton
          className="bg-orangeRed text-white"
          icon="thumbsDown"
          heading="Regretfully decline"
        />
        <RsvpButton
          className="bg-spanishGreen text-white"
          icon="thumbsUp"
          heading="I'll be there!"
        />
      </div>
    </>
  )
}

export default RsvpPage
