import './App.css'
import ListItems from './components/ListItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App () {
  const listItems = [
    {
      icon: 'https://www.musora.com/musora-cdn/image/https://d2vyvo0tyx8ig5.cloudfront.net/sales/2023/songs-icon.svg',
      header: '1000+ popular songs.',
      content: 'Get note-for-note song breakdowns for every style, era, and skill level.'
    },
    {
      icon: 'https://www.musora.com/musora-cdn/image/https://d2vyvo0tyx8ig5.cloudfront.net/sales/2023/tempo-icons.svg',
      header: 'Find the perfect tempo.',
      content: 'Slow down any section of a song to make those tricky bars easier.'
    },
    {
      icon: 'https://www.musora.com/musora-cdn/image/https://d2vyvo0tyx8ig5.cloudfront.net/sales/2023/loop-icons.svg',
      header: 'Loop the hard parts.',
      content: 'Use the built-in-metronome – your new best friend for difficult rhythms.'
    },
    {
      icon: 'https://www.musora.com/musora-cdn/image/https://d2vyvo0tyx8ig5.cloudfront.net/sales/2023/timing-icons.svg',
      header: 'Improve your timing.',
      content: 'Get note-for-note song breakdowns for every style, era, and skill level.'
    },
    {
      icon: 'https://www.musora.com/musora-cdn/image/https://d2vyvo0tyx8ig5.cloudfront.net/sales/2023/devices-icons.svg',
      header: 'Take your songs anywhere.',
      content: 'Accessible on any device, or printable, so you can play any song, any time.'
    }
  ];

  return (
    <div className="container-bg text-white">
      <div className="mx-auto py-4">
        <div className="text-center">
          <h2>
            <strong>Play your favorite songs.</strong>
          </h2>
          <p>
            You’ll have <strong>all the tools you need</strong> to make sure you never miss a note.
          </p>
        </div>
        <div className="d-flex justify-content-center flex-column-reverse">
          <div className="
              d-flex
              flex-row
              flex-wrap
              justify-content-center
              mt-3
            "
          >
            {listItems.map(listItem => <ListItems key={listItem.icon} listItem={listItem} />)}
          </div>
          <div className="d-flex align-items-center w-100">
            <iframe
              className="px-4"
              src="https://www.soundslice.com/slices/MMlyc/embed/"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
        <div className="
            text-center
            d-flex
            flex-column
            align-items-center
            flex-sm-row
            justify-content-sm-center
          ">
          <a
            href="#"
            className="
              mb-3
              mb-sm-0
              me-sm-2
              text-decoration-none
              favorite-song-button
              favorite-song-button-outline
              "
          >
            SEE SONG LIST
            <FontAwesomeIcon icon="music" className="ms-1"/>
          </a>
          <a
            href="#"
            className="
              text-decoration-none
              favorite-song-button
              favorite-song-button-none-outline
              "
          >
            START FOR FREE
            <FontAwesomeIcon icon="arrow-right" className="ms-1" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
