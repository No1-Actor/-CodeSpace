const ChildProcess = require('child_process');

const {spawn, spawnSync} = ChildProcess

const chdir = spawnSync('chdir');

console.log(chdir.stdout.toString());

const ls = spawnSync('ls', ['-lh']);
console.log(ls.stdout.toString());