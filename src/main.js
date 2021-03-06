const path = require('path');
const url = require('url');
const electron = require('electron');
const {app, BrowserWindow} = electron;


let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 800
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashed: true
  }));

  win.webContents.openDevTools();

  win.on('closed', () => {
   win = null;
  })
}

app.on('ready', createWindow);



