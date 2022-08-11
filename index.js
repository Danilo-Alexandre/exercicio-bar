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
    this.remove = (...remove) =>{
        for(i=0 ; i<this.consumption.length ; i++){
            for(j=0 ; j < remove.length ; j++){
            if(this.consumption[i] === remove[j]){
                this.consumption.splice(i,1)
                this.tab = this.tab - remove[j].price
            }
        }break
        }
        if(this.tab === 0){
            removeClient(this)
                
            
        }
    }
     
}


function Drinks(name, price){
    this.name = name
    this.price = price
}

const allDrinks = [["Mojito", 22], ["Old Fashion", 30],["Cosmopolitan", 35] , ["Draft Beer", 12], ["Water", 4]]
const objDrinks = []

allDrinks.forEach(el => {
    let instance = new Drinks(el[0], el[1])
    objDrinks.push(instance)
})



function removeClient(el){
    let index = openTabs.indexOf(el)
        openTabs.splice(index, 1)
}


function transferTab(oldTab, newTab){
    newTab.consumption = newTab.consumption.concat(oldTab.consumption)
    newTab.tab = newTab.tab + oldTab.tab
    oldTab.tab = 0
    oldTab.consumption = []
    removeClient(oldTab)
    
}


const allNames = ["Danilo", "Thais", "Karine", "Paulo", "Diego"]
const allClients = []

const openTabs = []

     
  allNames.forEach(el=>{
      let instance = new Client(el)
      allClients.push(instance)


  })

     
allClients[0].order(objDrinks[2])
allClients[0].order(objDrinks[1])
allClients[1].order(objDrinks[0])
allClients[1].order(objDrinks[1])
allClients[1].order(objDrinks[0])
allClients[1].order(objDrinks[0])

allClients[1].remove(objDrinks[0], objDrinks[1] )




console.log(openTabs)





