import Image from "next/image";

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return res.json();
}

export default async function MoviePage({ params }) {
  const movie = await getMovie(params.id);
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-7xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title || movie.name}
          width={500}
          height={300}
          style={{ maxWidth: "100%", height: "auto" }}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="p-2">
          <h2 className="text-2xl mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3 ">
            <span className="font-semibold mr-2">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="text-lg font-semibold mr-2">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="text-lg font-semibold mr-2">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
