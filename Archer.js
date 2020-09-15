class Archer extends Player{
    static AllowedWeapons(){
        return ["Bow", "Sword"]
    }

    constructor(baseWeapon, gender, name){
        if(AllowedWeapons().includes(baseWeapon.Type)){
            super(baseWeapon, gender, name)
        }
    }

    Attack(){
        "The Archer "+ Player.prototype.Attack.call()
    }
}