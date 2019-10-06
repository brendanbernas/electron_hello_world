const electron = require("electron")
const ipcRenderer = electron.ipcRenderer
const rootPath = require('electron-root-path').rootPath;
const path = require("path")


document.getElementById('drag').ondragstart = (event) => {
  event.preventDefault()
  fullPath = path.join(rootPath, "resources", "afile.txt")
  ipcRenderer.send('ondragstart', fullPath)
}