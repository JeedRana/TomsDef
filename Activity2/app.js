import { rightDiv } from "./image.js"
import { leftdiv } from "./info.js"

const data ={
    title1:      "Golden Retriever Pup",
    para1:      "Meet Max  a lively golden retriever with a heart of gold and a wagging tail that never stops With his fluffy coat shining in the sunlight he's always ready for an adventure whether it's chasing balls in the park or cuddling up on the couch for a cozy movie night.",
    myImage:    "dog.jpg",
    
}

const{ title1,  para1,  myImage,} = data

container.append(leftdiv(title1,  para1))
container.append(rightDiv( myImage))