import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 flex justify-center items-center space-x-4">
      <Link href="#" className="hover:underline">
        VK
      </Link>
      <Link href="#" className="hover:underline">
        Instagram
      </Link>
      <Link href="#" className="hover:underline">
        Telegram
      </Link>
    </footer>
  );
}
