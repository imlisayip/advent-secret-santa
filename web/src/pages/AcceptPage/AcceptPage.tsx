import { Form } from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'

import HeadingWithRulers from 'src/components/HeadingWithRulers/HeadingWithRulers'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'
import Upload from 'src/components/Upload/Upload'

const AcceptPage = () => {
  return (
    <>
      <Metadata title="Accept" description="Accept page" />
      <h3 className="m-0 font-handwriting uppercase leading-none text-white">
        Awesome
      </h3>
      <HeadingWithRulers className="text-white" heading="Sign Up" />
      <Form className="relative mx-auto w-full max-w-[660px]">
        <div className="field">
          <ShowHidePassword label="Password" name="Password" />
        </div>
        <div className="field"></div>
        <Upload />
        <div className="field">
          <button type="submit">Submit</button>
        </div>
      </Form>
    </>
  )
}

export default AcceptPage
