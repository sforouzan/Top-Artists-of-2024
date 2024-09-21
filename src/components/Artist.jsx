export default function Artist(props) {

    const {artist} = props;

    return (
        <div className="artistInfo">
            <div className="artistImageContainer">
                <img className="artistImage" src={artist.image} alt={artist.alt}/>
            </div>
            <h3 className="artistName">{artist.name}</h3>
            <p className="artistDetails"><span className="boldText">Country: </span>{artist.country}</p>
            <p className="artistDetails"><span className="boldText">Spotify Streams: </span>{artist.streams}</p>
        </div>
    )
}