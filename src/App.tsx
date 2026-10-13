import './App.css'

function App() {
  return (
    <>
    <div className='sector'>
      <h1>Movies</h1>
      <div className='container'>
        <Movie name="Inception" image="https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg" date="2009" />
        <Movie name="Perks Of Being A Wallflower" image="https://fwcdn.pl/fpo/26/39/572639/7559915_2.3.jpg" date="2010" />
        <Movie name="Shutter Island" image="https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" date="2015"/>
      </div>
    </div>

    <div className='sector'>
      <h1>Books</h1>
      <div className='container'>
        <Book name="Earthsea" image="https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg" />
        <Book name="Perks Of Being A Wallflower" image="https://fwcdn.pl/fpo/26/39/572639/7559915_2.3.jpg" />
        <Book name="Shutter Island" image="https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"/>
      </div>
    </div>
    </>
  )
}

function Movie(props : any) {
  const {name, image, date} = props

  return (
    <div className='poster'>
      <img src={image}></img>
      <p>{name} - {date}</p>
    </div>
  );
}

function Book(props : any) {
  const {name, image, date, pageCount} = props

  return (
    <div className='poster'>
      <img src={image}></img>
      <p>{name} - {date} - {pageCount}</p>
    </div>
  );
}

function Music(props : any) {
  const {name, album, image, author, genre, date} = props

  return (
    <div className='poster'>
      <img src={image}></img>
      <p>{name} - {album} - {author} - {genre} - {date}</p>
    </div>
  );
}

export default App
