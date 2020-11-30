const livesTaken = {
  named: [
    { id: 1, name: 'Eric Garner', age: 43 },
    { id: 2, name: 'John Crawford III', age: 22 },
    { id: 3, name: 'Michael Brown', age: 18 },
    { id: 4, name: 'Natasha McKenna', age: 37 },
    { id: 5, name: 'Freddie Gray', age: 25 },
    { id: 6, name: 'Tamir Rice', age: 12 },
    { id: 7, name: 'Ezell Ford', age: 25 },
    { id: 8, name: 'Jerame Reid', age: 36 },
    { id: 9, name: 'Anthony Hill', age: 26 },
    { id: 10, name: 'Atatiana Jefferson', age: 28 },
    { id: 11, name: 'Eric Harris', age: 44 },
    { id: 12, name: 'Walter Scott', age: 50 },
    { id: 13, name: 'William Chapman II', age: 18 },
    { id: 14, name: 'Jonathan Sanders', age: 39 },
    { id: 15, name: 'Joseph Mann', age: 51 },
    { id: 16, name: 'Sandra Bland', age: 28 },
    { id: 17, name: 'Alton Sterling', age: 37 },
    { id: 18, name: 'Samuel DuBose', age: 43 },
    { id: 19, name: 'Tony Robinson', age: 19 },
    { id: 20, name: 'Jamar Clark', age: 24 },
    { id: 21, name: 'Quintonio LeGrier', age: 19 },
    { id: 22, name: 'Bettie Jones', age: 55 },
    { id: 23, name: 'Sylville Smith', age: 23 },
    { id: 24, name: 'Oscar Grant III', age: 22 },
    { id: 25, name: 'Akai Gurley', age: 28 },
    { id: 26, name: 'Rayshard Brooks', age: 27 },
    { id: 27, name: 'Javier Ambler', age: 40 },
    { id: 28, name: 'Ahmaud Arbery', age: 25 },
    { id: 29, name: 'Laquan McDonald', age: 17 },
    { id: 30, name: 'Trayvon Martin', age: 17 },
    { id: 31, name: 'Jonathan Ferrell', age: 24 },
    { id: 32, name: 'Rekia Boyd', age: 22 },
    { id: 33, name: 'Elijah McClain', age: 23 },
    { id: 34, name: 'Sean Bell', age: 23 },
    { id: 35, name: 'Kathryn Johnston', age: 92 },
    { id: 36, name: 'Aiyana Jones', age: 7 },
    { id: 37, name: 'Amadou Diallo', age: 23 },
    { id: 38, name: 'Charley Leundeu Keunang', age: 43 },
    { id: 39, name: 'George Stinney', age: 14 },
    { id: 40, name: 'Emmett Till', age: 14 },
    { id: 41, name: 'Jordan Davis', age: 17 },
    { id: 51, name: 'Brendon Glenn', age: 29 },
    { id: 52, name: 'Rumain Brisbon', age: 34 },
    { id: 53, name: 'Michelle Cusseaux', age: 50 },
    { id: 54, name: 'Gabriella Nevarez', age: 22 },
    { id: 55, name: 'Darnesha Harris', age: 17 },
    { id: 56, name: 'Kendrec McDade', age: 19 },
    { id: 57, name: 'Matthew Ajibade', age: 22 },
    { id: 58, name: 'David Felix', age: 24 },
    { id: 59, name: 'Mya Hall', age: 27 },
    { id: 60, name: 'Tanisha Anderson', age: 37 },
    { id: 62, name: 'Lavall Hall', age: 25 },
    { id: 63, name: 'Kris Jackson', age: 22 },
    { id: 64, name: 'Christian Taylor', age: 19 },
    { id: 65, name: 'Darrius Stewart', age: 19 },
    { id: 66, name: 'Dante Parker', age: 36 },
    { id: 67, name: 'India Kager', age: 27 },
    { id: 68, name: 'Darius Simmons', age: 13 },
    { id: 69, name: 'Alonzo Smith', age: 27 },
    { id: 70, name: 'Felix Kumi', age: 61 },
    { id: 71, name: 'Nathaniel Harris Pickett', age: 29 },
    { id: 72, name: 'Michael Lee Marshall', age: 50 },
    { id: 73, name: 'Richard Perkins', age: 39 },
    { id: 74, name: 'Janet Wilson', age: 31 },
    { id: 75, name: 'Calin Roquemore', age: 23 },
    { id: 91, name: 'Philando Castile', age: 32 },
    { id: 92, name: 'Terence Crutcher', age: 40 },
    { id: 93, name: 'Paul O’Neal', age: 18 },
    { id: 94, name: 'Jordan Edwards', age: 15 },
    { id: 95, name: 'Stephon Clark', age: 22 },
    { id: 96, name: 'Antwon Rose Jr.', age: 17 },
    { id: 97, name: 'Botham Jean', age: 26 },
    { id: 98, name: 'Breonna Taylor', age: 26 },
    { id: 99, name: 'George Floyd', age: 46 }
  ],
  unnamed: [ 
    { id: 42 },
    { id: 43 },
    { id: 44 },
    { id: 45 },
    { id: 46 },
    { id: 47 },
    { id: 48 },
    { id: 49 },
    { id: 50 },
    { id: 61 },
    { id: 76 },
    { id: 77 },
    { id: 78 },
    { id: 79 },
    { id: 80 },
    { id: 81 },
    { id: 82 },
    { id: 83 },
    { id: 84 },
    { id: 85 },
    { id: 86 },
    { id: 87 },
    { id: 88 },
    { id: 89 },
    { id: 90 }
  ]
};

const kinshipTerms = [ 'brother', 'sister', 'family member', 'child', 'son',
  'daughter', 'girlfriend', 'boyfriend', 'mother', 'father', 'wife', 'husband',
  'neighbor', 'partner', 'classmate', 'best friend', 'friend' ];

const createRandomizedList = () => {
  const { named, unnamed } = livesTaken;
  const random = num => Math.floor(Math.random() * num);
  const list = [];
  const ratio = named.length / unnamed.length;

  while (named.length) {
    const person = named.splice(random(named.length), 1)[0];
    list.push(person);
  }

  // evenly interleave random unnamed spheres throughout
  let i = 0;
  while (unnamed.length) {
    const person = unnamed.splice(random(unnamed.length), 1)[0];
    person.name = `Someone's ${kinshipTerms[random(kinshipTerms.length)]}`;
    list.splice((i + 1) * ratio + i, 0, person);
    i++;
  }

  return list;
};