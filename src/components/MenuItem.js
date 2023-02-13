import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link
        href={address}
        className="flex items-center mr-4 lg:mr-6 hover:text-amber-600"
      >
        <Icon className="transition duration-200 text-2xl sm:hidden mr-4 p-0" />
        <p className="transition duration-200 hidden sm:inline my-2 text-md">
          {title}
        </p>
      </Link>
    </div>
  );
}
