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
        var brackets = [];
        var number2 = [];
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

                for(var i = tempNumber; temp[i] !== ')'; i++) {
                    number2+=temp[i];
                }

                for(i; i < temp.length; i++) {
                    brackets += temp[i];
                }

                temp = temp.slice(0, tempNumber);

                temp = temp + "Math.pow(" + number2 + "," + number.toString() + ")" + brackets;

                this.array = this.array + temp;

            }

            else
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
