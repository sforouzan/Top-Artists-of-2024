import { ARTISTS } from './best-selling-music-artists';
import Artist from './components/Artist';

function App() {
  const artistList = ARTISTS.map(artist => <Artist key={artist.name} artist={artist}/>);
  
  return (
      <main className="mainApp">
        <h1>Best Pop Artists of 2024</h1>
        <div className="artistSection">
          {artistList}
        </div>
      </main>
  );
}

export default App;
