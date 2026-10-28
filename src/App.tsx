import "./App.css";
import { useState, type ReactNode } from "react";
import "./bootstrap.min.css";

function App() {
  const movies = [
    {
      name: "Perks Of Being A Wallflower",
      image: "https://fwcdn.pl/fpo/26/39/572639/7559915_2.3.jpg",
      date: 2010,
      rating: 7.5,
    },
    {
      name: "Inception",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      date: 2009,
      rating: 8.7,
    },
    {
      name: "Shutter Island",
      image:
        "https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
      date: 2015,
      rating: 9.2,
    },
  ];

  const books = [
    {
      name: "Earthsea",
      image:
        "https://upload.wikimedia.org/wikipedia/en/7/7f/The_Books_of_Earthsea.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
      date: 1968,
      author: "Ursula K. Le Guin",
      pageCount: "657",
    },
    {
      name: "The Hobbit",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwJUwn-QPZQX9CiCOhzv0LOhO3q77frc-A9q58TU6tQ&s=10",
      date: 1937,
      author: "J. R. R. Tolkien",
      pageCount: "1476",
    },
    {
      name: "Alchemised",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAo_rFcx0lNi0Diy7AvaJ_jCyNFUBlL2MBafq-6vjZnw&s=10",
      date: 2025,
      author: "SenLinYu",
      pageCount: "975",
    },
  ];

  const albums = [
    {
      name: "SO CLOSE TO WHAT",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUpewUlTTAewHlNxKu0gKUvcM4CX6Vs2lV_wYK1o2IQ&s=10",
      songs: [
        { name: "Sports car", artist: "Tate Mcrae", duration: "3:12" },
        { name: "Purple laced bra", artist: "Tate Mcrae", duration: "2:45" },
        { name: "Miss Possesive", artist: "Tate Mcrae", duration: "3:01" },
        { name: "Revolving Door", artist: "Tate Mcrae", duration: "3:30" },
      ],
      author: "Tate Mcrae",
      genre: "pop",
      date: 2025,
    },
    {
      name: "RODZINNY BIZNES",
      image:
        "https://queshop.pl/img/imagecache/2001-3000/964x960_product_media_2001-3000_2115_rodzinny_biznes-j.webp",
      songs: [
        { name: "FAŁSZYWI PROROCY", artist: "2115", duration: "3:40" },
        { name: "2115", artist: "2115", duration: "4:05" },
        { name: "KETCHUP", artist: "2115", duration: "2:58" },
      ],
      author: "2115",
      genre: "rap",
      date: 2022,
    },
    {
      name: "The Gift Of Game",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowSYmSNLtfPrdHL-IUOY2fvXVUUrGqXN_gjUzAesLzg&s=10",
      songs: [
        { name: "Butterfly", artist: "Crazy Town", duration: "3:37" },
        { name: "Toxic", artist: "Crazy Town", duration: "2:48" },
        { name: "Revolving Door", artist: "Crazy Town", duration: "3:40" },
      ],
      author: "Crazy Town",
      genre: "rap metal",
      date: 2000,
    },
    {
      name: "I Am An Empty Album",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZktagNUdYGVILgKQV7Nhgm2EKVid4QF-g1HwGGhivWMLH-CwNj_fK78&s=10",
      songs: [],
      author: "Empty Album Maker",
      genre: "idk bro",
      date: 1000,
    },
  ];

  const sortedMovies = movies.toSorted((a, b) => a.name.localeCompare(b.name));
  const sortedBooks = books.toSorted((a, b) => a.name.localeCompare(b.name));
  const sortedAlbums = albums.toSorted((a, b) => a.name.localeCompare(b.name));

  const filteredMoviesByRating = sortedMovies.filter((n) => n.rating > 9);
  const filteredMoviesByDate = sortedMovies.filter((n) => n.date >= 2010);

  const sortedBooksByDate = sortedBooks.toSorted((a, b) => a.date - b.date);

  const albumWithMaxNumOfSongs =
    albums.length > 0
      ? albums.reduce((max, album) =>
          album.songs.length > max.songs.length ? album : max,
        )
      : null;

  const [isOpenMovies, setIsOpenMovies] = useState(true);
  const [isOpenBooks, setIsOpenBooks] = useState(true);
  const [isOpenAlbums, setIsOpenAlbums] = useState(true);

  const [moviesSearch, setMoviesSearch] = useState(String);

  const filteredMovies = sortedMovies.filter((movie) =>
    movie.name.toLowerCase().includes(moviesSearch.toLowerCase()),
  );

  return (
    <div className="container py-4">
      <div className="mb-5">
        <h1
          onClick={() => setIsOpenMovies((prev) => !prev)}
          style={{ cursor: "pointer" }}
        >
          Movies {isOpenMovies ? "⏷" : "⏵"}
        </h1>
        {isOpenMovies && (
          <>
            <Section title="All Movies">
              <input
                type="text"
                className="form-control w-100"
                placeholder="Search..."
                id="movies-search"
                onChange={(e) => setMoviesSearch(e.target.value)}
              />
              <p className="w-100"> {moviesSearch.length > 0 ? "Searching: " : ""} {moviesSearch}</p>
              {(filteredMovies.length > 0 ? (
                  filteredMovies.map((movie : MovieProps) => (
                    <div className="col">
                      <Movie
                        name={movie.name}
                        image={movie.image}
                        date={movie.date}
                        rating={movie.rating}
                      />
                    </div>
                  ))
                ) : (
                  <p>No Movies Found</p>
                ))}
            </Section>

            <Section title="Movies Released After 2010">
              {filteredMoviesByDate.map((movie: MovieProps) => (
                <div className="col">
                  <Movie
                    name={movie.name}
                    image={movie.image}
                    date={movie.date}
                    rating={movie.rating}
                  />
                </div>
              ))}
            </Section>

            <Section title="Movies With Rating Higher Than 9">
              {filteredMoviesByRating.map((movie: MovieProps) => (
                <div className="col">
                  <Movie
                    name={movie.name}
                    image={movie.image}
                    date={movie.date}
                    rating={movie.rating}
                  />
                </div>
              ))}
            </Section>
          </>
        )}
      </div>

      <div className="mb-5">
        <h1
          onClick={() => setIsOpenBooks((prev) => !prev)}
          style={{ cursor: "pointer" }}
        >
          Books {isOpenBooks ? "⏷" : "⏵"}
        </h1>
        {isOpenBooks && (
          <>
            <Section title="All Books">
              {sortedBooks.map((book: BookProps) => (
                <div className="col">
                  <Book
                    name={book.name}
                    image={book.image}
                    date={book.date}
                    author={book.author}
                    pageCount={book.pageCount}
                  />
                </div>
              ))}
            </Section>

            <Section title="Books Sorted By Release Year">
              {sortedBooksByDate.map((book: BookProps) => (
                <div className="col">
                  <Book
                    name={book.name}
                    image={book.image}
                    date={book.date}
                    author={book.author}
                    pageCount={book.pageCount}
                  />
                </div>
              ))}
            </Section>
          </>
        )}
      </div>

      <div className="mb-5">
        <h1
          onClick={() => setIsOpenAlbums((prev) => !prev)}
          style={{ cursor: "pointer" }}
        >
          Albums {isOpenAlbums ? "⏷" : "⏵"}
        </h1>

        {isOpenAlbums && (
          <>
            <Section title="All Albums">
              {sortedAlbums.map((album: AlbumProps, i: number) => (
                <div className="col">
                  <Album
                    key={i}
                    name={album.name}
                    image={album.image}
                    songs={album.songs}
                    author={album.author}
                    genre={album.genre}
                    date={album.date}
                  />
                </div>
              ))}
            </Section>

            <Section title="Album With Most Songs">
              {albumWithMaxNumOfSongs && (
                <div className="col">
                  <Album
                    name={albumWithMaxNumOfSongs.name}
                    image={albumWithMaxNumOfSongs.image}
                    songs={albumWithMaxNumOfSongs.songs}
                    author={albumWithMaxNumOfSongs.author}
                    genre={albumWithMaxNumOfSongs.genre}
                    date={albumWithMaxNumOfSongs.date}
                  />
                </div>
              )}
            </Section>
          </>
        )}
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-4">
      <h2>{title}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {children}
      </div>
    </div>
  );
}

function movieClick(detail: boolean, name: string) {
  if (detail) {
    console.log("Pokaż szczegóły dla " + name);
  } else {
    console.log("Wybrano film " + name);
  }
}

interface MovieProps {
  name: string;
  image: string;
  date: number;
  rating: number;
}

function Movie({ name, image, date, rating }: MovieProps) {
  const isRecommended = rating >= 8;
  return (
    <div
      className={`card h-100 bg-light text-dark ${isRecommended ? "border border-success border-2" : ""}`}
      onClick={() => movieClick(false, name)}
    >
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body d-flex flex-column justify-content-between">
        <p className="card-title fw-bold mb-1">{name}</p>
        <p className="card-text text-secondary mb-0">
          {date} ({rating}/10)
        </p>
        <button
          className="btn btn-primary mt-3 btn-sm"
          onClick={(e) => {
            e.stopPropagation();
            movieClick(true, name);
          }}
        >
          Show Details
        </button>
      </div>
    </div>
  );
}

interface BookProps {
  name: string;
  image: string;
  date: number;
  author: string;
  pageCount: string;
}

function Book({ name, image, date, author, pageCount } : BookProps) {
  const isAncient = date <= 2000;
  return (
    <div
      className={`card h-100 bg-light text-dark ${isAncient ? "border border-warning border-2" : ""}`}
    >
      <img src={image} alt={name} className="card-img-top object-fit-cover" />
      <div className="card-body d-flex flex-column justify-content-between">
        <p className="card-title fw-bold mb-1">{name}</p>
        <p className="card-text text-secondary small mb-0">
          {author} {date} ({pageCount} pages)
        </p>
      </div>
    </div>
  );
}

function songClick(name: string, albumName: string) {
  console.log("Chose song: " + name + " from " + albumName);
}

interface AlbumProps {
  name: string;
  image: string;
  author: string;
  genre: string;
  date: number;
  songs: SongProps[];
}

function Album({ name, image, author, genre, date, songs } : AlbumProps) {
  const isEmpty = songs.length === 0;
  return (
    <>
    <div
      className={`card h-100 bg-light text-dark ${isEmpty ? "border border-danger border-2" : ""}`}
    >
      <img src={image} alt={name} className="card-img-top object-fit-cover" />
      <div className="card-body d-flex flex-column justify-content-between">
        <p className="card-title fw-bold mb-0">{name}</p>
        <p className="card-title mb-1 fs-xsm">{author} - {genre} - {date}</p>
        <div className="card-text text-secondary small mb-0">
          <div className="mt-auto w-100">
              {isEmpty ? (
                <div
                  className="alert alert-warning py-1 px-2 mb-0 text-center small"
                  role="alert"
                >
                  No Songs
                </div>
              ) : (
                <div>
                  <table className="table table-light table-striped table-hover table-sm mb-0">
                    <tbody>
                      {songs.map((song: SongProps) => (
                        <Song
                          name={song.name}
                          artist={song.artist}
                          duration={song.duration}
                          albumName={name}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

interface SongProps {
  name: string;
  artist: string;
  duration: string;
  albumName?: string;
}

function Song({ name, artist, duration, albumName } : SongProps) {
  return (
    <tr onClick={() => songClick(name, albumName ? albumName : "")}>
      <td>
        {name} {artist}
      </td>
      <td className="text-end">{duration}</td>
    </tr>
  );
}

export default App;
