import Link from "next/link";

export default function HeaderLink({
  title,
  href
} : {
  title: string,
  href: string
}) {
  return (
    <li className="group">
      <Link href={href}>
        <h2 className="text-xl text-dark py-2 mx-8">
          {title}
        </h2>
      </Link>
    </li>
  );
}