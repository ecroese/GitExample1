myobj = {"People":[
    {
        "Id": 1,
        "Firstname": "Pieterke", 
        "Lastname": "Fritske",
        "Email": "Fritske@gmail.com",
        "Active" : true
    },
    {
        "Id": 2,
        "Firstname": "Pieeeterje",
        "Lastname": "Fretskje",
        "Email": "Fretske@gmail.com",
        "Active" : false
    },
    {
        "Id": 3,
        "Firstname": "Petterke",
        "Lastname": "Frietke",
        "Email": "Frietke@gmail.com",
        "Active" : true
    }
]}  

console.log(typeof myobj.People[1].Id);
console.log(typeof myobj.People[2].Active);
console.log(typeof myobj.People[0].Email);