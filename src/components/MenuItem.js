import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="mr-4 lg:mr-6 hover:text-amber-600">
        <Icon className="transition duration-200 text-2xl sm:hidden mx-2" />
        <p className="transition duration-200 hidden sm:inline my-2 text-md">
          {title}
        </p>
      </Link>
    </div>
  );
}
