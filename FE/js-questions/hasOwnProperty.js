// https://medium.com/@danduan/preparing-for-the-frontend-interview-in-50-hours-5b972d43a07c

const person = {
    name: 'Bob',
    address: {
        city: 'NoCity',
        pincode: 123456
    }
}

Object.prototype.hasOwnPropertyDeep = function (target) {
    const self = this;

    const hasProperty = (obj) => {
        if (obj === null) return false;

        for (let key in obj) {
            if (key === target) return true;

            if (obj[key].constructor.name === 'Object') {
                return hasProperty(obj[key]);
            }
        }

        return false;
    }

    return hasProperty(self);
}

console.log(person.hasOwnPropertyDeep('pincode'));