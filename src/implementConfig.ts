import * as fs from 'fs';
import * as path from 'path';
import simpleGit, { SimpleGit } from 'simple-git';

const localPath = path.join(__dirname, '');

const envFilePath = '.env';

function cloneRemoteRepository(remoteURL: string) {
    try{
        const git: SimpleGit = simpleGit();
        git.clone(remoteURL, localPath,)
        .then(() => {
                console.log('Repo cloned');
        })
        .catch((err:any) => {
            throw(err);
        })
    } catch(err) {
        console.error(err);
    }
}


function setEnv(dbUsername: string, dbPassword: string, port: string, username: string, password: string, uploadKey: string) {
    const DEV = `DEV_RESET=TRUE`;
    const PORT = `PORT=${port}\n`;
    const ARTICLE_COLL = `ARTICLE_COLL=Articles`;
    const ANALYTICS_COLL = `ANALYTICS_COLL=Analytics`;
    const LIVE_COLL = `LIVE_COLL=Live`;
    const UPLOAD_KEY = `UPLOAD_KEY=${uploadKey}`;

    // probably need to fix mongoDB role before continuing
    // fs.writeFileSync
    return;
}