function Student(name, roll_no, Class, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.Class = Class;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    this.printTop3Subjects = function() {
        const sortedSubjects = Object.entries(this.marks_of_5_subjects)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3);
        const top3Subjects = sortedSubjects.map(subject => subject[0]);
        console.log('Top 3 Subjects:', top3Subjects.join(', ') + "\n");
    };

    this.printReportCard = function() {
        // Calculate percentage
        const totalMarks = Object.values(this.marks_of_5_subjects).reduce((acc, mark) => acc + mark, 0);
        const percentage = (totalMarks / 500) * 100;

        // Print report card
        console.log('+---------------------------------+');
        console.log('|     REPORT CARD                 |');
        console.log('+---------------------------------+');
        console.log(`| Name     - ${this.name}         |`);
        console.log(`| Roll no. - ${this.roll_no}      |`);
        console.log(`| Class    - ${this.Class}        |`);
        console.log(`| Section  - ${this.section}      |`);
        // Print marks of each subject
        for (const subject in this.marks_of_5_subjects) {
            console.log(`| ${subject.charAt(0).toUpperCase() + subject.slice(1)}  - ${this.marks_of_5_subjects[subject]}      |`);
        }
        console.log(`| Percentage - ${percentage.toFixed(1)} %  |`);
        console.log('+--------------------+');
    };
}

const student1 = new Student('Suraj', 780039, '10th', 'A', {
    science: 90,
    maths: 80,
    social_science: 60,
    english: 76,
    hindi: 70
});

// Call methods to print top 3 subjects and report card
student1.printTop3Subjects();
student1.printReportCard();
