import { Command } from 'commander';
import greeting from './commands/greet.js';
import fetchData from './commands/fetch.js';
import reading from './commands/read.js';

const program =new Command();

program.name('ninja-utility').description('CLI utility with multiple comands').version('1.0.0');

program.command('greet').description('Display a colorful greeting mssage').action(greeting);

program.command('fetch').description('Fetch data fro a public API and display it').action(fetchData);

program.command('read <file>').description('Read and display the content of a file').action(reading);

program.parse(process.argv);