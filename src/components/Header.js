export default function Header(props) {
  const { name, picture } = props.user;
  return (
    <header className="bg-indigo-600">
      <nav
        className="mx-auto max-w-8xl px-4 py-2 sm:px-6 lg:px-8"
        aria-label="Top"
      >
        <div className="flex w-full items-center justify-end border-b border-indigo-500 py-2 lg:border-none">
          <div className="w-8 h-8 mr-2">
            <img src={picture} className='rounded-full' />
          </div>
          <p className="text-white">{name}</p>
          <a
            href="/"
            className="inline-block rounded-md border border-transparent py-1 px-2 mx-8 text-base font-medium text-white hover:bg-indigo-50 hover:text-indigo-500"
          >
            Logout
          </a>
        </div>
      </nav>
    </header>
  );
}
