import React from 'react';
import "./E3.css"

let comment_str = `
identity_function = function (x) {
    return x
};

addf = function (x) {
    return function (y) {
        return x + y
    }
};

applyf = function (func) {
    return function (x) {
        return function (y) {
            return func(x, y)
        }
    }
};

curry = function (func, x) {
    return function (y) {
        return func(x, y)
    }
};

inc = (x) => curry(add, 1)(x);

methodize = function (func) {
    return function (x) {
        return func(this, x)
    }
};

demethodize = Function.prototype.bind.bind(Function.prototype.call);

twice = function (bifunc) {
    return function (x) {
        return bifunc(x, x)
    }
};

composeu = function (unfunc, unfunc2) {
    return function (x) {
        var firstFunc = unfunc(x);
        return unfunc2(firstFunc);
    }
};

composeb = function (bifunc, bifunc2) {
    return function (x, y, z) {
        var firstFunc = bifunc(x, y);
        return bifunc2(firstFunc, z);
    }
};

once = function (func) {
    return function (x, y) {
        if (typeof arrX !== 'undefined' && typeof arrY !== 'undefined') {
            for (var i = 0; i < arrX.length; i++) {
                if (arrX[i] === x && arrY[i] == y) {
                    return "Fehler, diese Zahlen wurden bereits berechnet!";
                }
            }
            arrX[arrX.length] = x;
            arrY[arrY.length] = y;
        }
        else {
            arrX = [x];
            arrY = [y];
        }
        return func(x, y);
    }
};

counterf = function (x) {
    return {
        count: x,
        inc() {
            ++x;
            return x;
        },
        dec() {
            --x;
            return x;
        }
    };
};

revocable = function (func) {
    return {
        var: revoked = false,
        invoke(param) {
            if (revoked) {
                return "Fehlerabbruch!";
            }
            return func(param);
        },
        revoke() {
            revoked = true;
        }
    }
};

arrayWrap = function () {
    return {
        var: arrayz = [],
        get(index) {
            if (index >= arrayz.length) {
                return "Fehler: Index out of bound!";
            }
            return arrayz[index];
        },
        append(element) {
            arrayz[arrayz.length] = element;
        },
        store(index, element) {
            if (index >= arrayz.length) {
                return "Fehler: Index out of bound!";
            }
            arrayz[index] = element;
        },
        size() {
            return arrayz.length;
        }
    }
};

function Subscriber() {
    this.data = null;
    function update(data){
        this.data = data;
    }

    function getData() {
        return this.data;
    }
}


publisher={
    var:subscriber = [],
    var:ownData = null,
    publish(data){
        ownData = data;
        for (var i = 0; i < subscriber.length; i++) {
            subscriber[i].update(data);
        }
    },
    getData(){
        return ownData;
    },
    subscribe(sub) {
        subscriber[subscriber.length] = sub;
    }
};

gensymf = function (sym) {
    let count = 0
    return function () {
        let result = sym + count
        count += 1
        return result
    }
}

fibonaccif = function (n1, n2) {
    return function () {
        let result = n1
        let temp = n1 + n2
        n1 = n2
        n2 = temp
        return result
    }
}

addg = function (x) {
    return function (y) {
        if (typeof y === "number") {
            x = x + y
            return arguments.callee
        } else {
            return x
        }
    }
}

applyg = function (fun) {
    return function (x) {
        return function (y) {
            if (typeof y === "number") {
                x = fun(x, y)
                return arguments.callee
            } else {
                return x
            }
        }
    }
}

m = function (value, src=value.toString()) {
    return {
        "value": value,
        "source": src
    }
}

addm = function (m1, m2) {
    return m(m1.value + m2.value, "("+m1.source + "+" + m2.source+")")
}

binarymf = function (fun, sym) {
    return function (m1, m2) {
        return m(fun(m1.value, m2.value), "("+m1.source + sym + m2.source+")")
    }
}

binarymf = function (fun, sym) {
    return function (m1, m2) {
        if (typeof m1 === "number") {
            return m(fun(m1, m2), "("+m1 + sym + m2+")")
        } else {
            return m(fun(m1.value, m2.value), "("+m1.source + sym + m2.source+")")
        }
    }
}

unarymf = function (fun, sym) {
    return function (m1) {
        if (typeof m1 === "number") {
            return m(fun(m1), "(" + sym + m1+")")
        } else {
            return m(fun(m1.value), "("+sym + " " + m1.source+")")
        }
    }
}

hyp = function (a, b) {
    return Math.sqrt((3**2) + (4**2))
}

exp = function (x) {
    if (!Array.isArray(x)){
        return x
    }
    let fun = x[0]
    if (x.length === 2) {
        return fun(exp(x[1]))
    } else {
        return fun(exp(x[1]), exp(x[2]))
    }
}

store = function (x) {
    variable = x
}

quatre = function (fun, x1, x2, resfun) {
    return resfun(fun(x1, x2))
}

unaryc = function (fun) {
    return function (x, call) {
        call(fun(x))
    }
}

binaryc = function (fun) {
    return function (x, y, call) {
        call(fun(x, y))
    }
}
`




let split_arr = comment_str.split("\n");
let result_arr = []
for (let i = 0; i < split_arr.length * 2; i++) {
    if (i % 2 === 0) {
        result_arr[i] = split_arr[i / 2];
    } else {
        result_arr[i] = <br/>
    }
}


function E3Tag (props) {
    return (
        <article id={"E3Body"}>
            <h1>Javascript</h1>
            <br/>
            <p>
                Functions of this exercise:
                <br/>
                    <div id={"E3div"}>
                        {result_arr}
                    </div>


            </p>


        </article>
    )
}




export default E3Tag