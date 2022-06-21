const notes = require('./notes.js');
const yargs = require('yargs');
const chalk = require('chalk');


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        body: {
            describe: "Add body",
            demandOption: true,
            type: 'string'
        },
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note. ',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note. ',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){ 
       notes.readNotes(argv.title)
    } 
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List a note. ',
    handler(params) {
        notes.listNotes()
    }
})
yargs.parse();