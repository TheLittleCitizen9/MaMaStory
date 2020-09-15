class Wizard extends Player{
    static AllowedWeapons(){
        return ["Wand"]
    }

    constructor(baseWeapon, gender, name){
        if(AllowedWeapons().includes(baseWeapon.Type)){
            super(baseWeapon, gender, name)
        }
    }

    Attack(){
        "The Wizard "+ Player.prototype.Attack.call()
    }
}