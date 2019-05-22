const { ipcMain } = require('electron')

ipcMain.on('toMain', (event, data) => {
    console.log(666)
    console.log(data)
})