const add = (num, num2) => num + num2;

const main = () => {
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = add;
    }
};

main();
