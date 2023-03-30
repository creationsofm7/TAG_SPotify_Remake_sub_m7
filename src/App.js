import './App.css';





function App() {
  return (
    <div className="App">
        <div className="mgc">
          <div className="mgi1"><Sidebar /></div>
          <div className="mgi"><App1 /></div>

        </div>
      
      
      
     <Bottommusicbar /> 
    </div>
  );
}
function App1() {
  return (
    <div className="App1">
      <h2 className='text1'>Good Morning</h2>
      <THegrid />
      <h2 className='text1'>Made for MorningStar</h2>
      <Albumgrid />
      <h2 className='text1'>New Releases</h2>
      <Albumgrid />
      <h2 className='text1'>Play the radio</h2>
      <Albumgrid />
      
      
      
    </div>
  );
}

function THegrid() {
  return (
    <div className="grid-container">
        <div className="grid-item">Music1</div>
        <div className="grid-item">music2</div>
        <div className="grid-item">music3</div>
        <div className="grid-item">music4</div>
        <div className="grid-item">music4</div>
        <div className="grid-item">music4</div>
    </div>

  );
}

// create a bottom play button bar with a play button and a pause button
function Bottommusicbar() {
  return (
    <div className="bottommusicbar">
      <div className="musicbar">
        <h3>Playing: Silence BY Artist</h3>
      </div>
      <div className="playbutton">
        <img className='playb' src="https://img.icons8.com/ios/50/000000/back--v1.png" height='50px'/>
        <img className='playb' src="https://img.icons8.com/ios/50/000000/play--v1.png" height='50px'/>
        <img className='playb' src="https://img.icons8.com/ios/50/000000/forward--v1.png" height='50px'/>
        
      </div>
      <div className="volumesettings">
        <img className='vs' src="https://img.icons8.com/ios/50/000000/speaker--v1.png" height='50px' />
        <input type="range" min="0" max="100" value="50" className="slider" id="myRange" />
      </div> 

      
       
      
    </div>

  )
}

function Sidebar() {
  return (
    <div className="sidebar">
      < a href="https://www.google.com/"><img src="https://img.icons8.com/ios-filled/50/000000/home-page.png"/><h3>Home</h3></a>
      < a href="https://www.google.com/"><h3>Search</h3></a>
      < a href="https://www.google.com/"><h3>Your Library</h3></a>
      < a href="https://www.google.com/"><h3>Playlist1</h3></a>
      < a href="https://www.google.com/"><h3>Playlist2</h3></a>
      < a href="https://www.google.com/"><h3>Playlist3</h3></a>
      <MusicCard />

     
    </div>

  )
}

function MusicCard() {
  return (
    <div className="musiccard">
      <div className="musiccardimage">
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/160db2f2cc6eaef1ad40cb4f5f43cffd_screen.jpg?ts=1561422695" width="200px" height="200px" />
        <h4 className='one'>Silence - the Album</h4>
      </div>
    </div>
  )
}


function Albumgrid() {
  return (
    <div className="grid-container-album">
        <div className="grid-item-alb"><MusicCard /></div>
        <div className="grid-item-alb"><MusicCard /></div>
        <div className="grid-item-alb"><MusicCard /></div>
        <div className="grid-item-alb"><MusicCard /></div>
        

    </div>

  );
}



export default App;
