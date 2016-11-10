var employee1 ={
    
    name : "Biswajit Sahu",
    age : 23,
    salary : 30000,
    address :{
        
        city : "Bengaluru",
        state : "Karnataka",
        pincode : 560076
    }
}
var employee2 ={
    
    name : "Tapati Raj",
    age : 23,
    salary : 40000,
    address :{
        
        city : "Bengaluru",
        state : "Karnataka",
        pincode : 560076
    }
}
var employee3 ={
    
    name : "Ankush Kumar",
    age : 23,
    salary : 20000,
    address :{
        
        city : "Bengaluru",
        state : "Karnataka",
        pincode : 560032
    }
}
var employee4 ={
    
    name : "Swadhina Nayak",
    age : 24,
    salary : 30000,
    address :{
        
        city : "Bengaluru",
        state : "Karnataka",
        pincode : 560012
    }
}
var employee5 ={
    
    name : "Kumar Vivek",
    age : 23,
    salary : 35000,
    address :{
        
        city : "Bengaluru",
        state : "Karnataka",
        pincode : 560014
    }
}

var employeeArray = [];
employeeArray.push(employee1);
employeeArray.push(employee2);
employeeArray.push(employee3);
employeeArray.push(employee4);
employeeArray.push(employee5);
for(var i =0;i<employeeArray.length;i++){
    
    console.log("employee"+[i+1]);
        console.log( "Name :"+employeeArray[i].name);
        console.log("Age :"+employeeArray[i].age);
        console.log("salary :"+employeeArray[i].salary);
        console.log("City :"+employeeArray[i].address.city);
        console.log("State :"+employeeArray[i].address.state);
        console.log("Pincode :"+employeeArray[i].address.pincode);
        
        
    }

















