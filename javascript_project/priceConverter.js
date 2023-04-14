const itemlist = {
    "item1":5,
    "item2":7,
    "item3":18,
    "item4":30
};

const exchangeValue=80;

const convertedList = Object.keys(itemlist).map(key=>{
    const price = itemlist[key]*exchangeValue;
    return {[key]:price};
});

console.log(convertedList);