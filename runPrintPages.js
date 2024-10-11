import { exec } from 'child_process';

// Function to run a shell command and return a promise
function runCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`Error executing command '${command}': ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
            }
            console.log(`stdout: ${stdout}`);
            resolve();
        });
    });
}

// Function to build the HTML and then run the print script
async function runBuildAndPrint() {
    try {
        console.log('Building HTML page...');
        await runCommand('npx quartz build'); // Run Quartz build

        console.log('Running printPage.js...');
        await runCommand('node printPage.js'); // Run print script
    } catch (error) {
        console.error(error);
    }
}

// Run the build and print process immediately
runBuildAndPrint();

// Set an interval to run the build and print process every 30 seconds
setInterval(runBuildAndPrint, 30000); // 30000ms = 30 seconds
