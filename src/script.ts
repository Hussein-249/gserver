import { ipcRenderer } from 'electron';

const formElement = document.getElementById('config-form');

if (formElement) {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const formData = {
            dbUsername: (document.getElementById('db-username') as HTMLInputElement).value,
            dbPassword: (document.getElementById('db-password') as HTMLInputElement).value,
            sitename: (document.getElementById('sitename') as HTMLInputElement).value,
            port: (document.getElementById('port') as HTMLInputElement).value,
            adminUsername: (document.getElementById('admin-username') as HTMLInputElement).value,
            adminPassword: (document.getElementById('admin-password') as HTMLInputElement).value,
            uploadKey: (document.getElementById('upload-key') as HTMLInputElement).value,
            remoteRepo: (document.getElementById('remote-repo') as HTMLInputElement).value,
            localPath: (document.getElementById('local-path') as HTMLInputElement).value
        };
    
        ipcRenderer.send('submit-form', formData);
    });
} else {
    console.error('ID "config-form" not found.');
}
