import './App.css';
import Publication from './components/Publication'

function App() {
  const name = "Oleg"
  const nickname = "@oleg3456"
  const date = "26.04.2001"
  const userImg = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg"
  const publicationImg = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale"
  return (
    <div className="App">
      <Publication name={name} nickname={nickname} date={date} userImg={userImg} publicationImg={publicationImg}/>
    </div>
  );
}

export default App;
