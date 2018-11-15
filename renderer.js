// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const util = require('util');
const { spawn } = require( 'child_process' );

const dateButton = document.getElementById('dateButton');
const stdoutContainer = document.getElementById('stdout');
const stderrContainer = document.getElementById('stderr');
const exitCodeContainer = document.getElementById('exitcode');
// Listen for demo button clicks
dateButton.addEventListener('click', (event) => {
    console.log("dateButton CLICK");
    cmd1(stdoutContainer, stderrContainer, exitCodeContainer);
});

async function cmd1(stdOutContainer, stdErrContainer, exitCodeContainer) {
    p = spawn( 'date', [] );
    p.stdout.on( 'data', data => {
        stdOutContainer.innerHTML = data;
    });

    p.stderr.on( 'data', data => {
        stdErrContainer.innerHTML = data;
    });
    p.on( 'close', code => {
        exitCodeContainer.innerHTML = code;
    });
  }