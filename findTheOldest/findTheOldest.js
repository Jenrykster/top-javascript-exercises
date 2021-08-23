const findTheOldest = function(people) {
    let oldest = people.reduce((lastPerson, actual)=>{
        let lastPersonAge;
        let actPersonAge;
        actPersonAge = actual.yearOfDeath - actual.yearOfBirth;
        if(typeof lastPerson.yearOfDeath == 'undefined'){
            let thisYear = new Date().getFullYear();
            lastPersonAge = thisYear - lastPerson.yearOfBirth;
        }else{
            lastPersonAge = lastPerson.yearOfDeath - lastPerson.yearOfBirth;
        }
        console.log(actPersonAge, lastPersonAge)
        return actPersonAge > lastPersonAge ? actual : lastPerson;
        
    })
    return oldest;
};

module.exports = findTheOldest;
