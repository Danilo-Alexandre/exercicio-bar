function Client(name){
    this.name = name
    this.id = Math.floor(Math.random() * 1000000)
    this.consumption = []
    this.tab = 0
    this.order = (...order) => {
        this.consumption.push(...order)
        order.forEach(ord => this.tab = ord.price + this.tab)
        if(openTabs.indexOf(this) < 0){
            openTabs.push(this)
        }
        
    }  
    this.remove = remove =>{
        for(i=0 ; i<this.consumption.length ; i++){
            if(this.consumption[i] === remove){
                this.consumption.splice(i,1)
                this.tab = this.tab - remove.price
                
                break
            }
        }
        if(this.tab === 0){
            for(i=0 ; i<openTabs.length ; i++){
                if(openTabs[i] === this){
                   let index = openTabs.indexOf(this)
                   openTabs.splice(index, 1)
                }
            }
        }
    }
     
}


function Drinks(name, price){
    this.name = name
    this.price = price
}

let oldFashion = new Drinks("Old Fashion", 30)
let mojito = new Drinks("Mojito", 22)

let danilo = new Client("Danilo")
let maria = new Client("Maria")
let thais = new Client("Thais")
let fernando = new Client("Fernando")
let diego = new Client("Diego")

let openTabs = []

danilo.order(mojito, oldFashion,mojito)
danilo.remove(mojito)
danilo.order(oldFashion)
thais.order(oldFashion)
thais.order(oldFashion)
thais.remove(oldFashion)
thais.remove(oldFashion)
maria.order(mojito)
fernando.order(mojito)
fernando.order(mojito, oldFashion)
maria.remove(mojito)
fernando.remove(mojito)
fernando.remove(oldFashion)



console.log(openTabs)





