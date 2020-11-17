var obj = {
    noms: ["Pierre", "Paul", "Jacques"],
    log: () => {
        //syntaxe ES6
        setTimeout(() => {
            //syntaxe ES6
            console.log(this); //window
            console.log(this.noms); //undefined
        }, 10);
    },
};
obj.log();

var obj = {
    noms: ["Pierre", "Paul", "Jacques"],
    log: function () {
        //syntaxe classique
        setTimeout(() => {
            //syntaxe ES6
            console.log(this); //obj
            console.log(this.noms); //["Pierre", "Paul", "Jacques"]
        }, 10);
    },
};
obj.log();
