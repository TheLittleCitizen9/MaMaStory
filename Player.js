class Player{
    constructor(baseWeapon, gender, name){
        this.BaseWeapon = baseWeapon
        this.Gender = gender
        this.Name = name
    }

    Attack(){
        return this.Name + " Attacked with "+ this.BaseWeapon.Damage +" Damage! "+this.BaseWeapon.Attack()
    }
}