export const contactForm = (req,res)=>{


/* Data from frontend */

const {name,email,message} = req.body;



console.log(name);

console.log(email);

console.log(message);



/* Response */

res.send("Form submitted successfully 😎");

}