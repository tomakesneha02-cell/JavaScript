// Singleton is a design pattern that ensures only one 
// instance of an object is created and 
// reused throughout the application.

const jsuder={
    name:"sneha",
    fname:"sneha Tomake",
    age:22,
    location:"kolhapur",
    email:"snehatomake2@gmail.com",
    lastlogindays:["monday","monday"]

}

console.log(jsuder)
console.log(jsuder.email);
console.log(jsuder["email"]);
console.log(jsuder["fname"]);

// symbol:-- Symbol is a primitive data type used to create unique identifiers/property keys in JavaScript.
 
const a=Symbol("id")
const b=Symbol("id")

console.log(a===b)


const id= Symbol("id")
const user={
    name:"sneha",
    [id]:101
};
console.log(user[id])


//non single tone

// const tinderUser ={}

// tinderUser.id = "123abc"
// tinderUser.name="sneha"
// tinderUser.islogged=false

// console.log("tinderuser data:--",tinderUser)


const regularuser={
    name : "sneha ",
    fullname:{
        username:{
            fname:"sneha",
            lname:"tomake"
        }
    }
}

console.log(regularuser.fullname);
console.log(regularuser.fullname.username);

//object de-structued and json  


console.log("-------------------------------------");

const course={
    cname:"js in hindi",
    price:"999",
    coursIntructor:"sneha"
}

// course.coursIntructor

const {cname:coursname}=course

// console.log(cname); give error 

console.log(coursname)

