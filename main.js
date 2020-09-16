var warriorOptions = "<div class='col-12'><div class='checkbox' id='choices'><input type='checkbox' id='hammer' class='checkbox style-2 pull-right' value='Hammer' onclick='showCreateButton()'/>"
warriorOptions += "<label for='hammer'><span>Hammer</span></label><input type='checkbox' id='axe' class='checkbox style-2 pull-right' value='Axe' onclick='showCreateButton()'/>"
warriorOptions += "<label for='axe'><span>Axe</span></label><input type='checkbox' id='sword' class='checkbox style-2 pull-right' value='Sword' onclick='showCreateButton()'/>"
warriorOptions += "<label for='sword'><span>Sword</span></label></div></div>"


var wizardOptions = "<div class='col-12'><div class='checkbox'><input type='checkbox' id='wand' class='checkbox style-2 pull-right' value='Wand' onclick='showCreateButton()'/>"
wizardOptions += "<label for='wand'><span>Wand</span></label></div></div>"


var archerOptions = "<div class='col-12'><div class='checkbox'><input type='checkbox' id='bow' class='checkbox style-2 pull-right' value='Bow' onclick='showCreateButton()'/>"
archerOptions += "<label for='bow'><span>Bow</span></label><input type='checkbox' id='sword' class='checkbox style-2 pull-right' value='Sword' onclick='showCreateButton()'/>"
archerOptions += "<label for='sword'><span>Sword</span></label></div></div>"

var createPlayerButton = "<div class='col-12'><button type='button'  onclick='createPlayer()'>Create</button></div>"

//import { Warrior } from "Warrior.js"

var baseWarrior = ""
var weapon = ""
var allPlayers = []

function chooseWeapon(){
    if(document.getElementById("checkbox1").checked){
        baseWarrior = "Warrior"
        document.getElementById("weaponChoice").innerHTML += warriorOptions
    }else if(document.getElementById("checkbox2").checked){
        baseWarrior = "Wizard"
        document.getElementById("weaponChoice").innerHTML += wizardOptions
    }else if(document.getElementById("checkbox3").checked){
        baseWarrior = "Archer"
        document.getElementById("weaponChoice").innerHTML += archerOptions
    }
}

function showCreateButton(){
    var isChecked = anyCheckbox()
    if(isChecked){
        document.getElementById("submit").innerHTML += createPlayerButton
    }
    else{
        document.getElementById("submit").innerHTML = ""
    }
}

function anyCheckbox()
{
    var w = document.getElementById("weaponChoice")
    var inputElements = w.getElementsByClassName("checkbox")
    for (var i = 0; i < inputElements.length; i++)
        if (inputElements[i].type == "checkbox")
            if (inputElements[i].checked)
                return true;
    return false;
}

function getWeapon()
{
    var w = document.getElementById("weaponChoice")
    var inputElements = w.getElementsByClassName("checkbox")
    for (var i = 0; i < inputElements.length; i++)
        if (inputElements[i].type == "checkbox")
            if (inputElements[i].checked){
                weapon = inputElements[i].value
            }
}

function createPlayer(){
    getWeapon()
    var name = document.getElementById("name").value
    var gender = document.getElementById("gender").value
    var player;
    if(baseWarrior == "Warrior"){
        player = new Warrior(weapon, gender, name)
        allPlayers.push(player)
    }else if(baseWarrior == "Wizard"){
        player = new Wizard(weapon, gender, name)
        allPlayers.push(player)
    }else if(baseWarrior == "Archer"){
        player = new Archer(weapon, gender, name)
        allPlayers.push(player)
    }

    console.log(allPlayers)
}