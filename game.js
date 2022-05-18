

//character stats
class Character{
    constructor(health,max_health,exp,max_exp,level,inventory){
        this.health = health;
        this.max_health = max_health;
        this.exp = exp;
        this.max_exp = max_exp;
        this.level = level;
        this.inventory = inventory;
    }
}

//in-game item
class Item{
    constructor(item_name, health_add,health_subtract, probability){
        this.item_name = item_name;
        this.health_add = health_add;
        this.health_subtract = health_subtract;
        this.probability = probability;
    }
}

//item list
const bread = new Item("bread",10,0,0.5);
const knife = new Item("knife",0,10,0.5);
items = [bread, knife]

const player = new Character(100,100,0,100,1,[]);

function game(){
    if (player.exp >= player.max_exp){
        player.level = player.level + 1;
        player.exp = player.exp - player.max_exp;
        player.max_exp = player.max_exp + 50;
        player.max_health = player.max_health + 50;
        player.health = player.max_health;
    }
    let stats = "You are a level "+player.level+" survivor. You have "+player.health+"/"+player.max_health+" health and "+player.exp+"/"+player.max_exp+" XP.";
    document.getElementById("character").innerHTML=stats;
}

document.getElementById("search").onclick = function() {search()};

function search(){
    let found_item = Math.floor(Math.random() * items.length);
    let result = "You found a "+items[found_item].item_name;
    player.exp = player.exp + 10;
    document.getElementById("search_results").innerHTML = result;
    game();
}


window.onload = game();