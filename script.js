var notes = [];

function saveNote() {
    var textInput = document.getElementById("text-input");
    var note = textInput.value;
    if (note !== "") {
        notes.push(note);
        textInput.value = "";
        updateNotesList();
    }
}

function updateNotesList() {
    var notesList = document.getElementById("notes-list");
    notesList.innerHTML = "";
    for (var i = 0; i < notes.length; i++) {
        var noteElement = document.createElement("div");
        noteElement.className = "note";
        noteElement.textContent = notes[i];
        notesList.appendChild(noteElement);
    }
}

var saveButton = document.getElementById("save");
saveButton.addEventListener("click", saveNote);

window.addEventListener("load", updateNotesList);
