
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipcMain = electron.ipcMain
const globalShortcut = electron.globalShortcut

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
  // win.webContents.openDevTools()

  globalShortcut.register('CommandOrControl+X', () => {
    win.loadFile('index.html')
  })
}

app.on('ready', createWindow)

ipcMain.on('ondragstart', (event, filePath) => {

  event.sender.startDrag({
    file: filePath,
    icon: 'images/folder.png'
  })
})