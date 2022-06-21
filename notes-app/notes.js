const { notStrictEqual } = require('assert');
const { default: chalk } = require('chalk');
const fs = require('fs');
const getNotes =  () => {
    return "your notes... ";
};

const addNote =  (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);
    debugger;
    if (!duplicateNote) {
        notes.push({title, body})
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added!") );
    } else {
        console.log(chalk.red.inverse("This title is taken. ") );
    }
    console.log(notes);
}

const removeNote = (titleToRemove) => {
    const notesList = loadNotes();
    const newList = notesList.filter((note) =>note.title !== titleToRemove );
 
    if (notesList.length > newList.length) {
        saveNotes(newList);
        console.log(chalk.bgGreen("note removed!"));
    } else {
        console.log(chalk.bgRed("No note found!"));
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return []
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.yellow("Your notes: "));
    notes.forEach(note => {
        console.log("title: " + note.title + " body: " + note.body );
    });
}

const readNotes = (titleToRead) => {
    const notes = loadNotes();
    const noteResult = notes.find(note => note.title === titleToRead)

    if (noteResult) {
        console.log(chalk.bgGreen(noteResult.title) + ": " + noteResult.body);
    } else {
        console.log(chalk.red("Such title does not exist in database"));
    }
}

module.exports = { getNotes, addNote, removeNote, listNotes, readNotes}

