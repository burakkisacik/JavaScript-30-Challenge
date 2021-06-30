const inventors = [
    {
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955,
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727,
    },
    {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642,
    },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934,
    },
    {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630,
    },
    {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543,
    },
    {
        first: 'Max',
        last: 'Planck',
        year: 1858,
        passed: 1947,
    },
];

const people = [
    'Bernhard, Sandra',
    'Bethea, Erin',
    'Becker, Carl',
    'Bentsen, Lloyd',
    'Beckett, Samuel',
    'Blake, William',
    'Berger, Ric',
    'Beddoes, Mick',
    'Beethoven, Ludwig',
    'Belloc, Hilaire',
    'Begin, Menachem',
    'Bellow, Saul',
    'Benchley, Robert',
    'Blair, Robert',
    'Benenson, Peter',
    'Benjamin, Walter',
    'Berlin, Irving',
    'Benn, Tony',
    'Benson, Leana',
    'Bent, Silas',
    'Berle, Milton',
    'Berry, Halle',
    'Biko, Steve',
    'Beck, Glenn',
    'Bergman, Ingmar',
    'Black, Elk',
    'Berio, Luciano',
    'Berne, Eric',
    'Berra, Yogi',
    'Berry, Wendell',
    'Bevan, Aneurin',
    'Ben-Gurion, David',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bennington, Chester',
    'Bierce, Ambrose',
    'Billings, Josh',
    'Birrell, Augustine',
    'Blair, Tony',
    'Beecher, Henry',
    'Biondo, Frank',
];

//Tasks

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const someOldInventors = inventors.filter((inventor) => {
    return inventor.year.toString().startsWith('15');
});

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const firstLastNamesOfInventors = inventors.map((inventor) => {
    return `${inventor.first} ${inventor.last}`;
});

// Array.prototype.sort()
// 3. Sort the inventors by birth date, oldest to youngest
const sortedInventors = inventors.sort((a, b) => {
    if (a.year > b.year) {
        return 1;
    } else {
        return -1;
    }
});

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const liveTogether = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

// 5. Sort the inventors by years lived
const sortedInventorsByYearsLived = inventors.sort((a, b) => {
    const age1 = a.passed - a.year;
    const age2 = b.passed - b.year;
    if (age1 > age2) {
        return -1;
    } else {
        return 1;
    }
});

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// go to the link above, open the console and run following code there

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//     .map((link) => link.textContent)
//     .filter((streetName) => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck',
];

const transportation = data.reduce(function (obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
