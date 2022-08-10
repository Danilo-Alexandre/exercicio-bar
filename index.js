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
            removeClient(this)
                
            
        }
    }
     
}


function Drinks(name, price){
    this.name = name
    this.price = price
}



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
const openTabs = []

const allClients = []
     
  allNames.forEach(el=>{
      let instance = new Client(el)
      allClients.push(instance)


  })

     




console.log(allClients.indexOf("Danilo"))





