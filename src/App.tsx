import './App.css'

function App() {

  const movies = [
    {name: "Perks Of Being A Wallflower", image: "https://fwcdn.pl/fpo/26/39/572639/7559915_2.3.jpg", date:"2010", rating: "7.5"},
    {name: "Inception", image: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg", date: "2009", rating: "8.7"},
    {name: "Shutter Island", image: "https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original", date: "2015", rating: "9.2"}
  ];

  const books = [
    {name: "Earthsea", image: "https://upload.wikimedia.org/wikipedia/en/7/7f/The_Books_of_Earthsea.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original", date: "1968", author: "Ursula K. Le Guin", pageCount: "657"},
    {name: "The Hobbit", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwJUwn-QPZQX9CiCOhzv0LOhO3q77frc-A9q58TU6tQ&s=10", date: "1937", author: "J. R. R. Tolkien", pageCount: "1476"},
    {name: "Alchemised", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAo_rFcx0lNi0Diy7AvaJ_jCyNFUBlL2MBafq-6vjZnw&s=10", date: "2025", author: "SenLinYu", pageCount: "975"},
  ]

  const albums = [
    {
      name: "SO CLOSE TO WHAT", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUpewUlTTAewHlNxKu0gKUvcM4CX6Vs2lV_wYK1o2IQ&s=10", 
      songs : [
        {name: "Sports car", artist: "Tate Mcrae"},
        {name: "Purple laced bra", artist: "Tate Mcrae"},
        {name: "Miss Possesive", artist: "Tate Mcrae"},
      ],
      author: "Tate Mcrae", genre: "pop", date: "2025"
    },

    {
      name: "RODZINNY BIZNES", image: "https://queshop.pl/img/imagecache/2001-3000/964x960_product_media_2001-3000_2115_rodzinny_biznes-j.webp", 
      songs : [
        {name: "FAŁSZYWI PROROCY", artist: "2115"},
        {name: "2115", artist: "2115"},
        {name: "KETCHUP", artist: "2115"},
      ],
      author: "2115", genre: "rap", date: "2022"
    },

    {
      name: "The Gift Of Game", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowSYmSNLtfPrdHL-IUOY2fvXVUUrGqXN_gjUzAesLzg&s=10", 
      songs : [
        {name: "Butterfly", artist: "Crazy Town"},
        {name: "Toxic", artist: "Crazy Town"},
        {name: "Revolving Door", artist: "Crazy Town"},
      ],
      author: "Crazy Town", genre: "rap metal", date: "2000"
    }
  ]

  return (
    <>
    <div className='sector'>
      <h1>Movies</h1>
      <div className='container'>
        { 
         movies.map((movie : any) =>
          <Movie name={movie.name} image={movie.image} date={movie.date} rating={movie.rating} />
         )
        }
        </div>
    </div>

    <div className='sector'>
      <h1>Books</h1>
      <div className='container'>
        { 
         books.map((book : any) =>
          <Book name={book.name} image={book.image} date={book.date} author={book.author} pageCount={book.pageCount} />
         )
        }
        </div>
    </div>

    <div className='sector'>
      <h1>Songs</h1>
      <div className='container'>
      { 
        albums.map((album : any) =>
          <Album name={album.name} image={album.image} songs={album.songs} author={album.author} genre={album.genre} date={album.date}/>
        )
      }  
      </div>
    </div>
    </>
  )
}

function Movie(props : any) {
  const {name, image, date, rating} = props

  return (
    <div className='poster'>
      <img src={image}></img>
      <p>{name} - {date} - {rating}/10</p>
    </div>
  );
}

function Book(props : any) {
  const {name, image, date, author, pageCount} = props

  return (
    <div className='poster'>
      <img src={image}></img>
      <p>{name} - {author} - {date} - {pageCount}</p>
    </div>
  );
}

function Album(props : any) {
  const {name, image, author, genre, date, songs} = props

  return (
    <div className='poster'>
      <img src={image}></img>
      <p>{name} - {author} - {genre} - {date}</p>
      {
        songs.map((song : any) =>
          <Song name={song.name} artist={song.artist}/>
        )
      }
    </div>
  );
}

function Song(props : any) {
  const {name, artist} = props

  return (
    <div className='songs'>
      <p>{name} - {artist}</p>
    </div>
  )
}

export default App
