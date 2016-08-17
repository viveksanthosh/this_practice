let employee = {
    name: "Vivek",
    getName: function() {
     console.log(this)
    }
}

employee.getName()