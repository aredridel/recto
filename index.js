const {app, BrowserWindow} = require('electron')

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        show: false
    });

    mainWindow.on('ready-to-show', () => mainWindow.show());
    mainWindow.on('close', () => app.quit());
    mainWindow.loadURL('file://' + __dirname + '/index.html');
});
