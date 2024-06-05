function selectParticipient() {
    var names = document.getElementById("participients").value;
    var splittedNames = names.split(/[,;\n]/);
    var selectedName = splittedNames[Math.floor(Math.random() * splittedNames.length)];
    document.getElementById("selectedParticipient").textContent = selectedName;
    var newNames = splittedNames.filter(name => name != selectedName).join("\n");
    document.getElementById("participients").value = newNames;
}
module.exports = { selectParticipient };