var complex = /** @class */ (function () {
    function complex(re, im) {
        this.re = re;
        this.im = im;
    }
    complex.prototype.add = function (com) {
        var a = this.re + com.re;
        var b = this.re + com.im;
        return new complex(a, b);
        //let tmp = new complex(a,b);
        //return tmp;
    };
    complex.prototype.subtract = function (com) {
        var a = this.re - com.re;
        var b = this.re - com.im;
        return new complex(a, b);
    };
    complex.prototype.getMod = function () {
        return Math.sqrt((Math.pow(this.re, 2)) + (Math.pow(this.im, 2)));
    };
    complex.prototype.toString = function () {
        console.log("re: ", this.re, ",  ", "im: ", this.im);
    };
    return complex;
}());
var a = new complex(3, 4);
var b = new complex(7, 4);
var c = a.add(b);
var d = new complex(3, -2);
var e = c.subtract(d);
e.toString();
