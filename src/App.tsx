import "./App.css";
import { useState } from "react";
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

  return (
    <div className="container py-4">
      <div className="mb-5">
        <h1 onClick={() => setIsOpenMovies(prev => !prev)} style={{ cursor: "pointer" }}>Movies {isOpenMovies ? "⏷" : "⏵"}</h1>

        {isOpenMovies && (
          <>
            <div className="mb-4">
              <h2>All Movies</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {sortedMovies.map((movie: any, idx) => (
                  <div className="col " key={idx}>
                    <Movie
                      name={movie.name}
                      image={movie.image}
                      date={movie.date}
                      rating={movie.rating}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h2>Movies Released After 2010</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {filteredMoviesByDate.map((movie: any, idx) => (
                  <div className="col" key={idx}>
                    <Movie
                      name={movie.name}
                      image={movie.image}
                      date={movie.date}
                      rating={movie.rating}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h2>Movies With Rating Higher Than 9</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {filteredMoviesByRating.map((movie: any, idx) => (
                  <div className="col" key={idx}>
                    <Movie
                      name={movie.name}
                      image={movie.image}
                      date={movie.date}
                      rating={movie.rating}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mb-5">
        <h1 onClick={() => setIsOpenBooks(prev => !prev)} style={{ cursor: "pointer" }}>Books {isOpenBooks ? "⏷" : "⏵"}</h1>

        {isOpenBooks && (
          <>
            <div className="mb-4">
              <h2>All Books</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {sortedBooks.map((book: any, idx) => (
                  <div className="col" key={idx}>
                    <Book
                      name={book.name}
                      image={book.image}
                      date={book.date}
                      author={book.author}
                      pageCount={book.pageCount}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h2>Books Sorted By Release Year</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {sortedBooksByDate.map((book: any, idx) => (
                  <div className="col" key={idx}>
                    <Book
                      name={book.name}
                      image={book.image}
                      date={book.date}
                      author={book.author}
                      pageCount={book.pageCount}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mb-5">
        <h1 onClick={() => setIsOpenAlbums(prev => !prev)} style={{ cursor: "pointer" }}>Albums {isOpenAlbums ? "⏷" : "⏵"}</h1>

        {isOpenAlbums && (
          <>
            <div className="mb-4">
              <h2>All Albums</h2>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {sortedAlbums.map((album: any, idx) => (
                  <div className="col" key={idx}>
                    <Album
                      name={album.name}
                      image={album.image}
                      songs={album.songs}
                      author={album.author}
                      genre={album.genre}
                      date={album.date}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h2>Album With Most Songs</h2>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
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
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Movie(props: any) {
  const { name, image, date, rating } = props;
  const isRecommended = rating >= 8;
  return (
    <div className={`card h-100 bg-light text-dark ${isRecommended ? "border border-success border-2" : ""}`} style={{ width: "10rem" }}>
      <img src={image} alt={name} className="card-img-top" style={{ height: "100%" }} />
      <div className="card-body d-flex flex-column justify-content-between">
        <p className="card-title fw-bold mb-1">{name}</p>
        <p className="card-text text-secondary mb-0">
          {date} ({rating}/10)
        </p>
      </div>
    </div>
  );
}

function Book(props: any) {
  const { name, image, date, author, pageCount } = props;
  const isAncient = date <= 2000;
  return (
    <div className={`card h-100 bg-light text-dark ${isAncient ? "border border-warning border-2" : ""}`} style={{ width: "10rem" }}>
      <img src={image} alt={name} className="card-img-top object-fit-cover" style={{ height: "100%" }} />
      <div className="card-body d-flex flex-column justify-content-between">
        <p className="card-title fw-bold mb-1">{name}</p>
        <p className="card-text text-secondary small mb-0">
          {author} {date} ({pageCount} pages)
        </p>
      </div>
    </div>
  );
}

function Album(props: any) {
  const { name, image, author, genre, date, songs } = props;
  const isEmpty = songs.length === 0;
  return (
    <div className={`card h-100 bg-light text-dark ${isEmpty ? "border border-danger border-2" : ""}`}>
      <div className="row g-0 h-100">
        <div className="col-4">
          <img src={image} alt={name} className="img-fluid h-100 rounded-start object-fit-cover" style={{width: "100%"}} />
        </div>
        <div className="col-8">
          <div className="card-body d-flex flex-column h-100 p-2">
            <p className="fw-bold mb-1 small">
              {name} {author} {genre} {date}
            </p>

            <div className="mt-auto w-100">
              {isEmpty ? (
                <div className="alert alert-warning py-1 px-2 mb-0 text-center small" role="alert">
                  No Songs
                </div>
              ) : (
                <div style={{ maxHeight: "120px", overflowY: "auto" }}>
                  <table className="table table-light table-striped table-hover table-sm mb-0">
                    <tbody>
                      {songs.map((song: any, idx: number) => (
                        <Song key={idx} name={song.name} artist={song.artist} duration={song.duration} />
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Song(props: any) {
  const { name, artist, duration } = props;
  return (
    <tr>
      <td>{name} {artist}</td>
      <td className="text-end">{duration}</td>
    </tr>
  );
}

export default App;