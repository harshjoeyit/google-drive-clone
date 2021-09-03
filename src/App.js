import './App.css';
import File from './components/Object/File'
import Folder from './components/Object/Folder'
import AddNewBtn from './components/Object/AddNewBtn'
import CreateNew from './components/Overlay/CreateNew';
import Rename from './components/Overlay/Rename';

function App() {
  return (
    <div className="App">
      {/* <CreateNew /> */}
      {/* <Rename /> */}
      <File />
      <Folder />
      <AddNewBtn />
    </div>
  );
}

export default App;
