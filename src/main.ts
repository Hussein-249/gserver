import { app, BrowserWindow, Menu, ipcMain} from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow | null;
function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    Menu.setApplicationMenu(null);

    mainWindow.loadFile(path.join(__dirname, '../../views/index.html'));

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}


app.on('ready', () => {
    createMainWindow();
});

// form submission
// ipcMain.on('form-submission', (event, data) => {
// });
