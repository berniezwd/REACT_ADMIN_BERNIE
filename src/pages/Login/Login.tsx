import InputItem from '../../components/InputItem/InputItem'
export default function Login() {
  const handleLogin = () => {
    // router.push('/dashboard')
  }
  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <section className="flex w-[30rem] flex-col ">
        <div className="text-center text-20 font-medium mb-30">Welcome My Friend</div>

        <InputItem></InputItem>
        <InputItem></InputItem>

        <button
          className="mb-20 transform rounded-md text-16 bg-indigo-600 py-18 font-bold duration-300 hover:bg-indigo-400"
          onClick={handleLogin}>
          login
        </button>

        <a
          href="#"
          className="mb-20 transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">
          forget password?
        </a>

        <p className="text-center text-lg">
          No account?
          <a href="#" className="font-medium text-indigo-500 underline-offset-4 hover:underline">
            register now
          </a>
        </p>
      </section>
    </main>
  )
}
