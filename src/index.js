'use strict';


class SmartCalculator {
    constructor(initialValue) {
        // your implementation
        this.thisNumber = initialValue;
        this.array = [];
    }

    add(number) {
        // your implementation
        this.array += " " + "+" + " " + number.toString();
        return this;
    }

    subtract(number) {
        // your implementation
        this.array += " " + "-" + " " + number.toString();
        return this;
    }

    multiply(number) {
        // your implementation
        this.array += " " + "*" + " " + number.toString();
        return this;
    }

    devide(number) {
        // your implementation
        this.array += " " + "/" + " " + number.toString();
        return this;
    }

    pow(number) {
        // your implementation
        if(!this.array.length)
            this.array += "Math.pow(" + this.thisNumber.toString() + "," + number.toString() + ")";
        else {
            var temp = [];
            var tempNumber;
            for (var i = this.array.length - 1; i >= 0; i--)
                if (this.array[i] === ' ')
                    break;
            tempNumber = ++i;

            for (i; i != this.array.length; i++)
                temp += this.array[i];

            this.array = this.array.slice(0, tempNumber);

            if(temp[0] === 'M') {
                for (var i = temp.length - 1; i >= 0; i--)
                    if (temp[i] === ',')
                        break;

                tempNumber = ++i;

                var temp2;

                for (i; temp[i] != ')'; i++)
                    temp2 += temp[i];

                
            }



            this.array += "Math.pow(" + temp + "," + number.toString() + ")";
        }

        // this.thisNumber = Math.pow(this.thisNumber, number);
        return this;
    }

    valueOf() {
        if(this.array[0] !== 'M')
            this.array = this.thisNumber.toString() + this.array;
        this.thisNumber = eval(this.array);
        return this.thisNumber;
    }

    toString() {
        this.array = this.thisNumber.toString() + this.array;
        this.thisNumber = eval(this.array);
        return (this.thisNumber + "");
    }
}

module.exports = SmartCalculator;
