import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow | null;
function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile(path.join(__dirname, '../../views/index.html'));

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}


app.on('ready', () => {
    createMainWindow();
});
