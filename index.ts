#! /usr/bin/env node
import fs from 'fs';
import { homedir } from 'os';
import path from 'path';
import chalk from "chalk"
const folder_name = `HACKED FILES`;
const desktopPath = path.join(homedir(), 'Desktop', folder_name);
console.log(chalk.green.bold(`\t\tYOUR DEVICE IS HACKED NOW...😈`));
setTimeout(() => {
    console.log(chalk.red.bold.italic(`\t\t     Enjoy buddy...`))
    
}, 3000);

// Check if the folder already exists
for(let i = 1; i <= 250 ; i++){
if (!fs.existsSync(desktopPath)) {
    // If not, create the folder
    fs.mkdirSync(`${desktopPath} ${i}`);
}}