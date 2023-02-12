import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden mx-2" />
        <p className="hidden sm:inline my-2 text-md">{title}</p>
      </Link>
    </div>
  );
}
