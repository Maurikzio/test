const students = ['Sasha' , 'Ihor', 'Lena', 'Ira', 'Alex', 'Svetlana'];

const themes = ['Differential equations', 'Automata theory', 'Algorithms and data structure'];

const marks = [4, 5, 5, 3, 4, 5]

//1
//Sasha,Lena - Ihor,Ira - Alex,Sveta

console.log('--students in pairs---');
const getPairs = (listOfStudents) => {
    return [
        [listOfStudents[0], listOfStudents[2]], 
        [listOfStudents[1], listOfStudents[3]], 
        [listOfStudents[4], listOfStudents[5]]
    ]; 
};
const studentsInPairs = getPairs(students);
console.log(studentsInPairs);


//2
const joinPairsAndProject = (pairs, project) => {
    const pairsAndProject = [];
    for(let i = 0; i<project.length; i++){
        pairsAndProject.push([pairs[i].join(' and '), project[i]]);
    }
    return pairsAndProject;
}
console.log('--pairs with projects---');
const studentsAndProject = joinPairsAndProject(studentsInPairs, themes);
console.log(studentsAndProject);


//3 - join marks with students
const joinStudentsWithMarks = (studentsList, marksList) => {
    const pairStudentMark = [];
    for(let i=0; i<studentsList.length; i++){
        pairStudentMark.push([studentsList[i],marksList[i]]);
    }
    return pairStudentMark;
}
console.log('--students with marks---');
const marksAndStudents = joinStudentsWithMarks(students, marks);
console.log(marksAndStudents);


//4 - give each pair a random 1-5 mark
console.log('--themes with random marks---');
const generateRandomMark = (min=1, max=5) => {
    const rand = min + Math.random() * max + 1 - min;
    return Math.floor(rand);
}

const assignMarksToPairs = (pairsList) => {
    return pairsList.map(pair => pair.concat(generateRandomMark()));
}

console.log(assignMarksToPairs(studentsAndProject));
console.log('----');
console.log(studentsAndProject);