


export const circumference = (x, y) => (Math.PI * 2 * x).toPrecision(y ?  y: 5 )
/* gives the circumference of a circle if you know the radius. */
//change the value 

export const areaOfSquare = (x) => x*x
// area of a square given the lenght of one side


export const areaOfTriangle = (b, h) => (b*h)/2 
//area of a triangle is given by the formula base * height / 2


export const areaOfTrapezoid = (a, b, h) => ((a + b) / 2) * h 

// you need to know the a which is the top base , b the bottom base , and h is the height



export const areaOfParallelogram = (b, h) =>  b * h 


//volumes


//volume of a cone 
export const volumeOfCone = (r, h) =>  (1 / 3) * Math.pi * r * r * h 


//volume of a rectangular prism
export const volumeOfRectangularPrism = (b, w, h) => b * w * h 
// a rectangular prism can also have the same sides on all sides which make it a cube. 
