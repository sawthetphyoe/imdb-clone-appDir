import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

async function fetchData(genre) {
  const url = `https://api.themoviedb.org/3/${
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  }?api_key=${API_KEY}&language=en-US&page=1`;

  const res = await fetch(url, { cache: "no-store" });

  return res.json();
}

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const data = await fetchData(genre);
  return (
    <div>
      <Results results={data.results} />
    </div>
  );
}
