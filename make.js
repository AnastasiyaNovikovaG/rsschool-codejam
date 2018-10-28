//JavaScript-C24.2.0 (SpiderMonkey)

function make() {
    let mas = [];
    let result;
    if (typeof(arguments[0]) !== typeof(make)) {

        for (let i = 0; i < arguments.length; i++) mas.push(arguments[i]);

        function f() {
            if (arguments.length === 0) return mas;
            for (let i = 0; i < arguments.length; i++) {
                print(typeof(arguments[i]));
                if (typeof(arguments[0]) !== typeof(make))
                    mas.push(arguments[i]);
                else {
                    result = mas.reduce(function (s, current) {
                        return arguments[i](s, current); //must fix
                    });
                }
            }
            return f;
        }

        f.toString = function () {

            return result;
        };

        return f;
    }
    else return 0;
}

