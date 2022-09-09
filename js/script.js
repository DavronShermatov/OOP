// OOP haqida

const car = {
    mator: "X",
    colors:["red", "black", "white"],
    isAirbag:true,
    speed: function(){
        console.log(240)
    },
}

const gm={
    isAirbag:false,
}

const bmw=Object.create(car);



Object.setPrototypeOf(gm,car);
console.log(gm);
console.log(bmw);

