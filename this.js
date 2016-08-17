let employee = {
    name: "Vivek",
    getName: function() {

        setTimeout(function() {
            console.log(this)
        }, 2000)
    }
}


employee.getName()