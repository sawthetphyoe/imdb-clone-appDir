import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <Image
        className="h-96"
        width={300}
        height={300}
        src="spinner.svg"
        alt="loading..."
        style={{ height: "auto" }}
        priority
      />
    </div>
  );
}
