type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    // By default, the background size has a width of 1440 pixels. By default the background will be wider than the device width, and as tall as it needs to be.
    // Once its hits 1440+ breakpoint, image width of 100 percent and then it can still grow to be as tall as it needs to be.
    <main className="min-w-screen min-h-screen bg-silverTree bg-auth bg-[length:1440px_auto] bg-[center_top] bg-no-repeat min-[1440px]:bg-[length:100%_auto] dark:bg-nileBlue">
      {children}
      <img
        src="/images/logo__secret-santa.svg"
        alt="Secret Santa"
        className="mx-auto mb-24 w-[460px] pt-24"
      />
    </main>
  )
}

export default AuthLayout
