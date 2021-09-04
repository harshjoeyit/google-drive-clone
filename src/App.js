import React, { useState, useEffect } from "react";
import "./App.css";
import File from "./components/Object/File";
import Folder from "./components/Object/Folder";
import AddNewBtn from "./components/Object/AddNewBtn";
import CreateNew from "./components/Overlay/CreateNew";
import Rename from "./components/Overlay/Rename";
import back_btn from "./images/arrow_up.png";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Options from "./components/Options/Options";

class FileFolderObject {
  constructor(type = "", name = "", children = []) {
    this.type = type;
    this.name = name;
    // files will not have children, only folders will
    this.children = children;
  }
}

const childrenOfRootObject = [
  new FileFolderObject("folder", "Apps", [
    new FileFolderObject("folder", "Mini Militia", []),
    new FileFolderObject("file", "setup.exe"),
  ]),
  new FileFolderObject("folder", "Pictures", [
    new FileFolderObject("folder", "Raj. Trip", []),
    new FileFolderObject("file", "profile.jpeg"),
    new FileFolderObject("file", "screenshot.png"),
  ]),
  new FileFolderObject("folder", "Vidoes"),
  new FileFolderObject("folder", "Docs"),
  new FileFolderObject("file", "budget.pdf"),
  new FileFolderObject("file", "profile.jpg"),
  new FileFolderObject("folder", "Folder 1"),
  new FileFolderObject("folder", "Folder 2"),
  new FileFolderObject("file", "index.html"),
];

const rootObject = new FileFolderObject("folder", "root", childrenOfRootObject);

function App() {
  const [breadcrumb, SetBreadcrumb] = useState([]);
  const [object, setObject] = useState(rootObject);
  const [indices, setIndices] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
    // whenever indices change, change breadcrumbs
    SetBreadcrumb(getCurrentBreadcrumbs(object, indices));
    // TODO: make breadcurmbs hyperlink
  }, [indices]);

  const folderOpenHandler = (index) => {
    setIndices([...indices, index]);
  };

  const handleBackBtnPress = () => {
    let copyIndices = [...indices];
    copyIndices.pop();
    setIndices(copyIndices);
  };

  const handleBreadcrumbItemPress = (currLen) => {
    let copyIndices = [...indices];
    while (copyIndices.length != currLen) {
      copyIndices.pop();
    }
    setIndices(copyIndices);
  };

  const handleAddNew = () => {
    setShowCreateModal(true);
  };

  const handleCreate = (name, type) => {
    const newObject = new FileFolderObject(type, name);
    let copyObject = { ...object };
    let res = copyObject;

    for (let i = 0; i < indices.length; i++) {
      res = res.children[indices[i]];
    }
    if(checkDuplicateName(res.children, name)) {
      setError('File/Folder with name already exists!')
      return
    }
    setError('')
    res.children.push(newObject);

    setObject(copyObject);
    setShowCreateModal(false);
  };

  const handleRename = (newName, changeIndex) => {
    let copyObject = { ...object };
    let res = copyObject;

    for (let i = 0; i < indices.length; i++) {
      res = res.children[indices[i]];
    }
    if(checkDuplicateName(res.children, newName)) {
      setError('File/Folder with name already exists!')
      return
    }
    res.children[changeIndex].name = newName;
    setObject(copyObject);
  };

  const handleDelete = (deleteIndex) => {
    let copyObject = { ...object };
    let res = copyObject;

    for (let i = 0; i < indices.length; i++) {
      res = res.children[indices[i]];
    }
    res.children.splice(deleteIndex, 1);
    setObject(copyObject);
  };

  return (
    <div className="App">
      <header>
        <div className="back_btn_container">
          <img
            src={back_btn}
            atl="go_back"
            onClick={handleBackBtnPress}
            // can press back button when at least any folder is open
            style={{ opacity: breadcrumb.length > 1 && 1 }}
          />
        </div>
        <Breadcrumb
          items={breadcrumb}
          onItemClick={handleBreadcrumbItemPress}
        />
      </header>
      <div className="object_space">
        {getCurrentObject(object, indices).children.map((item, index) =>
          item.type === "file" ? (
            <File 
              name={item.name} 
              key={index} 
              onRename={handleRename}
              onDelete={handleDelete}
              index={index}
              error={error}
            />
          ) : (
            <Folder
              name={item.name}
              key={index}
              index={index}
              onOpen={folderOpenHandler}
              onRename={handleRename}
              onDelete={handleDelete}
            />
          )
        )}
        {showCreateModal ? (
          <CreateNew 
            onCreate={handleCreate} 
            onClose={() => setShowCreateModal(false)} 
            error={error}
          />
        ) : (
          <AddNewBtn onClick={handleAddNew} />
        )}
      </div>
      {/* <Options xPos='60' yPos='50'/> */}
    </div>
  );
}

function getCurrentBreadcrumbs(object, indices) {
  let breadcrumbs = ["root"],
    res = object;
  for (let i = 0; i < indices.length; i++) {
    res = res.children[indices[i]];
    breadcrumbs.push(res.name);
  }
  return breadcrumbs;
}

// Loop over indices to get to current open folder
function getCurrentObject(object, indices) {
  let res = object;
  for (let i = 0; i < indices.length; i++) {
    res = res.children[indices[i]];
  }
  return res;
}


function checkDuplicateName(objects, newName) {
  for(let i=0; i<objects.length; i++) {
    if(objects[i].name === newName) {
      return true
    }
  }
  return false
}

export default App;
