import { Link } from 'waku';

export const Header = () => {
  return (
    <header className="flex flex-col gap-4 p-6 lg:fixed lg:left-0 lg:top-0">

      <h2 className="text-lg font-bold tracking-tight">
        <Link to="/">Chandas landing page</Link>
      </h2>
      <h2>Welcome to Rose&Stone Bookkeeping</h2>
      <figure>
        <img
          src="/images/bookeeping.png"
          alt="a book being kept"
        />
        <figcaption>Rose&Stone</figcaption>
      </figure>
    </header>
  );
};