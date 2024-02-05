// 1) https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
// a)
class Movie
{
    constructor(title,studio,rating){
        this.title=title
        this.studio=studio
        this.rating=rating
    }
}
// b)
class Movie1
{
    constructor(title,studio,rating){
        this.title=title
        this.studio=studio
        this.rating="PG"
    }
// c)
setPg(pg){
    this.rating=pg
    console.log(this.rating)
    }
}
// d)
let mov= new Movie("Casino Royale","Eon Productions","PG13")
console.log(mov)
let mov1=new Movie1("Casino Royale","Eon Productions")
console.log(mov1)
mov1.setPg(`New Rating = ${"PG10"}`)
console.log(mov1)





// 2) https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
// Convert the UML diagram to Typescript class
class Circle
{
    constructor(radius,color){
        this.radius=radius
        this.color=color
    }
getRadius(){
    return this.radius
}
setRadius(radius){
    this.radius=radius
    console.log(`setColur = ${this.radius}`)
}
getColor(){
    return this.color
}
setColor(color){
    this.color=color
    console.log(`setColor = ${this.color}`)
}
toString(){
    return `Radius: ${this.radius} Color: ${this.color}`
}
getArea(){
    return ((Math.PI)*this.radius*this.radius)
}
getCircumference(){
    return (2*(Math.PI)*this.radius)
}
}
var cir=new Circle(2,"Blue")
console.log(cir)
console.log(`getRadius = ${cir.getRadius()}`)
cir.setRadius(1)
console.log(`getColor = ${cir.getColor()}`)
cir.setColor("Red")
console.log(cir.toString())
console.log(`Area = ${cir.getArea().toFixed(2)}`)
console.log(`Circumference = ${cir.getCircumference().toFixed(2)}`)




// 3) Write a “person” class to hold all the details 
class Person
{
    constructor (firstName,lastName,age,experience,location,email,contact){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.experience=experience
        this.location=location
        this.email=email
        this.contact=contact
    }
}
let a=new Person("Navaneetha Krishnan","P",22,"Nil","Chennai","krissnank89038@gmail.com",8903848938);
console.log(a)




// 4) write a class to calculate the Uber price
class Uber
{
    constructor (basePrize,bookingCost,costPerKm,distance,waitingCostPerMin){
    this.basePrize=basePrize
    this.bookingCost=bookingCost
    this.costPerKm=costPerKm
    this.distance=distance
    this.waitingCostPerMin=waitingCostPerMin
  }

amount()
{
    let calculation=((this.distance*this.costPerKm)+this.basePrize+this.bookingCost+this.waitingCostPerMin);
    return `Uber Cost = ${calculation}`
}
}

let b=new Uber(10,10,12,10,0);
console.log(b);
console.log(b.amount())