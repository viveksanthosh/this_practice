let employee = {
    name: "Vivek",
    getName: function() {

        setTimeout(function() {
            console.log(this)
        }.bind(this), 2000)
    }
}


employee.getName()