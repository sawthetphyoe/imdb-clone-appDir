import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function MovieCard({ data }) {
  return (
    <div className="cursor-pointer p-3 sm:hover:shadow-slate-500 sm:shadow-md rounded-lg border border-slate-400 transition-shadow duration-200 group my-6 sm:my-0">
      <Link href={`/movie/${data.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path
          }`}
          alt={data.title || data.name}
          width={500}
          height={300}
          style={{ maxWidth: "100%", height: "auto" }}
          className="sm:rounded-t-md group-hover:opacity-70 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="p-2">
          <p className="line-clamp-3 mb-2">{data.overview}</p>
          <h2 className="truncate text-lg font-bold mb-1">
            {data.title || data.name}
          </h2>
          <div className="flex items-center justify-between">
            <span>{data.release_date || data.first_air_date}</span>
            <div className="flex items-center">
              <FiThumbsUp className="h-6 mr-1 ml-4" />
              <span>{data.vote_count}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
