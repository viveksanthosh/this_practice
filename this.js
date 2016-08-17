let employee = {
    name: "Vivek",
    getName: function() {
     console.log(this.name)
    }
}

employee.getName()