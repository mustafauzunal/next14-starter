import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link href="/">Return Homepage</Link>
    </div>
  );
};

export default NotFound;
