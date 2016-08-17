let employee = {
    name: "Vivek",
    getName: function() {
     console.log(this)
    }
}

let getName=employee.getName.bind(employee);
getName();