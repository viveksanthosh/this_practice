let employee = {
        name: "Vivek",
        getName: function() {
            console.log(this.name);
        }
    },
    singer = {
        name: "Floor Jensen",
        getName: function() {
            console.log(this.name);
        }
    }


employee.getName.call(singer)