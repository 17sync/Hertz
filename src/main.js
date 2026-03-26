const{app, BrowserWindow}=require("electron");

function createWindow(){
  const win=new BrowserWindow({
    width: 292,
    height: 430,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false, 
    transparent: true,
    webPreferences: {
       nodeIntegration: true,
       enableRemoteModule: true,
       contextIsolation: false
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", ()=>{
  if (process.platform!=="darwin") app.quit();
});