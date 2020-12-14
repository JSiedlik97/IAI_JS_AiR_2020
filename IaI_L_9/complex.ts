class complex {
    re: number;
    im: number;

    constructor(re: number, im: number){
        this.re = re;
        this.im = im;
    }
    add(com: complex): complex{

        let a = this.re + com.re;
        let b = this.re + com.im;
        return new complex(a,b);
        //let tmp = new complex(a,b);
        //return tmp;

    }
    subtract(com: complex): complex{
         let a = this.re - com.re;
         let b = this.re - com.im;
         return new complex(a,b);
    }
    getMod(): number {

       return Math.sqrt((Math.pow(this.re,2))+(Math.pow(this.im,2)));
    }


    toString(){
        console.log("re: ", this.re, ",  ", "im: ", this.im)

    }

}

let a = new complex( 3, 4);
let b = new complex( 7, 4);
let c = a.add(b);

let d = new complex( 3, -2);
let e = c.subtract(d);

e.toString();