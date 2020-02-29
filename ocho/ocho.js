class Student {
    //fields
    university;
    course;
    fullName;
    points = [5, 4, 4, 5];
    isGrounded = false;

    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName
    };

    //methods
    getInfo(){
        return `Student ${this.course} course ${this.university} ${this.fullName}.`;
    }

    get marks(){
        if(!this.isGrounded){
            return this.points;
        }
        return null;
    }

    set marks(newMark){
        if(!this.isGrounded){
            this.points.push(newMark);
        }
        // this.points.push(newMark);
    }

    getAverageMark(){
        if(!this.isGrounded){
            return Number((this.marks.reduce((acc, currentValue) => acc + currentValue) / this.marks.length).toFixed(2));
        }
        return null;
    }

    dismiss(){
        this.isGrounded = true;
    }

    recover(){
        this.isGrounded = false;
    }
};

class BudgetStudent extends Student {

    constructor(university, course, fullName){
        super(university, course, fullName);
        setInterval(() => {
            debugger;
            this.getScholarship();
        },30000);
    }

    getScholarship(){
        if(!this.isGrounded && this.getAverageMark() >= 4){
            console.log('You have received 1400uah');
        }else{
            console.log('No scholarship for you this time!');
        }
    }
};
const ivan = new BudgetStudent('NULP', 1, 'Ivan Ivanovych');
console.log(ivan);
// console.log(ivan.getScholarship());
// console.log(ivan.getAverageMark());
// ivan.dismiss();
// console.log(ivan.getScholarship());
/*
const mauricio = new Student('NULP', '5th', 'Mauricio Morocho');
console.log(mauricio);
console.log(mauricio.getInfo());
console.log(mauricio.marks);
mauricio.marks = 5;
console.log(mauricio.marks);
console.log(mauricio.getAverageMark());
// mauricio.dismiss();
// console.log(mauricio.marks);
mauricio.marks = 5;
mauricio.marks = 5;
mauricio.marks = 5;
mauricio.marks = 5;
console.log(mauricio.marks);
console.log(mauricio.getAverageMark());*/

// mauricio.recover();
// console.log(mauricio.getAverageMark());

////////
class User {
    name = 'unknown';
    lastName = '';
    static takenNames = [];

    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
        User.takenNames.push(name);
    }
    get fullName(){
        return this.name +' '+ this.lastName;
    }
    set fullName(name){
        this.name = name.split(' ')[0];
        this.lastName = name.split(' ')[1];
    }
    static isNameTaken(name){
        return User.takenNames.includes(name);
    }

    getName(){
        return this.name;
    }
}

class ContentWriter extends User {
    posts = ['CNN'];
    constructor(name, posts){
        super(name);
        this.posts.push(...posts);
    }
    getName(){
        const name = super.getName();
        if(name === ''){
            return 'no name';
        }
        return name;
    }
}
/*
const user = new User('mauricio', 'morocho');

const writer = new ContentWriter('John Smith', ['Why I like JS']);
console.log(writer.name);
console.log(writer.posts);

const writer2 = new ContentWriter('', ['TNT']);
console.log(writer2.getName());

const myObj = {}
console.log(myObj instanceof User);
console.log(writer instanceof User);
console.log(user instanceof ContentWriter);
console.log(writer.constructor === ContentWriter);
console.log(writer.constructor === User);*/


/*
const writer = new ContentWriter('Jon', 'Smith');
console.log(writer.name);
console.log(writer.lastName);
console.log(writer.fullName);
console.log(writer.posts);*/

/*
const user = new User('mauricio', 'morocho');
console.log(user.name);
user.fullName = 'Fernando Morocho'
console.log(user.name);
console.log(user.lastName);*/

// class Square {
//     constructor(width){
//         this.width = width;
//         this.height = width;
//     }

//     get area(){
//         return this.width * this.height;
//     }

//     set area(area){
//         this.width = Math.sqrt(area);
//         this.height = this.width;
//     }
// }

// const square1 = new Square(25);
// console.log(square1.area);
// square1.area = 25;
// console.log(square1.width);


setInterval(() => {
    // console.log('Hello');
}, 1000);