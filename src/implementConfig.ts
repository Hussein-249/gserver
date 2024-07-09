import * as fs from 'fs';
import simpleGit, { SimpleGit } from 'simple-git';

const localPath = ' ';

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


function setEnv() {
    return;
}