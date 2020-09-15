var warriorOptions = "<div class='col-12'><div class='checkbox'><input type='checkbox' id='hammer' class='checkbox style-2 pull-right' onclick='chooseWeapon()'/>"
warriorOptions += "<label for='hammer'><span>Hammer</span></label><input type='checkbox' id='axe' class='checkbox style-2 pull-right' onclick='chooseWeapon()'/>"
warriorOptions += "<label for='axe'><span>Axe</span></label><input type='checkbox' id='sword' class='checkbox style-2 pull-right' onclick='chooseWeapon()'/>"
warriorOptions += "<label for='sword'><span>Sword</span></label></div></div>"



function chooseWeapon(){
    filteredByPriceInstruments = []
    if(document.getElementById("checkbox1").checked){
        document.getElementById("weaponChoice").innerHTML += warriorOptions
    }else if(document.getElementById("checkbox2").checked){
        //fddgdfgfg
    }else if(document.getElementById("checkbox3").checked){
        //dsgdshgfdh
    }
}