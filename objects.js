
function Room(name, intro){
    var idStart = 0;
    var createId = function(){
        idStart++;
        return idStart;
    };
    this.id= createId();
    this.items= [ ];
    this.enemies=[ ];
    this.name= name;
    this.exits=[ ];
    this.intro=intro;
}
function Character(name, kingdomOfOrigin, faith, rank) {
    var idStart = 0;
    var createId = function(){
        idStart++;
        return idStart;
    };

    this.id = createId();
    this.health = 10;
    this.kingdomOfOrigin = kingdomOfOrigin;
    this.abilities = [];
    this.inventory = [];
    this.faith = faith;
    this.wealth = wealth();
    this.rank = rank;
    this.name = name;
}
function enemies(name){
    var idStart = 0;
    var createId = function(){
        idStart++;
        return idStart;
    };
    this.type=0;
    this.attackPower=AttackPower();
    this.name=name;
    this.id = createId();

}
function item(name){
    var idStart = 0;
    var createId = function(){
        idStart++;
        return idStart;
    };
    this.id=createId();
    this.name=name;
    this.type=0;
    this.description=" ";
}
function consumable(type,description,name){
    var idStart = 0;
    var createId = function(){
        idStart++;
        return idStart;
    };
    this.effect=[ ];
    this.id=createId();
    this.name=name;
    this.type=type;
    this.description=description;
}
function armor(name){
    var idStart = 0;
    var createId = function(){
        idStart++;
        return idStart;
    };
    this.id=createId();
    this.name=name;
    this.type=0;
    this.description=" ";
    this.defence=0;
    this.rarity=0;
    this.resistance=[ ];
}
function weapon(name){
    var idStart = 0;
    var createId = function() {
        idStart++;
        return idStart;
    };
    this.id=createId();
    this.name=name;
    this.type=0;
    this.description=" ";

    this.attack=0;
    this.rarity=0;
    this.element=0;
}
function perk(name){
    var idStart = 0;
    var createId = function() {
        idStart++;
        return idStart;
    };
    this.name=name;
    this.id=createId();
    this.effect=[];
}
