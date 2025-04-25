import { Link } from 'waku';

export const Header = () => {
  return (
    <header className="flex flex-col gap-4 p-6 lg:fixed lg:inset-0 lg:m-auto lg:w-full lg:max-w-4xl">

      <h2 className="text-lg font-bold tracking-tight">
        <Link to="/">Chandas landing page</Link>
      </h2>
      <h2>Welcome to Rose&Stone Bookkeeping</h2>
      <figure className="w-full max-w-md">
        <img
          src="/images/bookeeping.png"
          alt="a book being kept"
          className="max-w-full h-auto"
        />
        <figcaption>Rose&Stone</figcaption>
      </figure>
    </header>
  );
};