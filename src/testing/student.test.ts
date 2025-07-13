import { clear, data, load } from "../dataStore";
import { Classroom, User } from "../interfaces";
import { getStudent, updateStudent } from "../student";


describe("Getting a studnet", () => {

  function setUp(kafkaId: number, soshiroId: number, classId: number) {

    const student: User = {
      userId: kafkaId,
      name: "Kafka Hibino",
      email: "kafkahibino@gmail.com",
      password: "IamNotKaijuno.8",
      sessions: ["insert text"],
    };

    const teacher: User = {
      userId: soshiroId,
      name: "Soshiro Hoshina",
      email: "soshirohoshina@gmail.com",
      password: "kidsshelter",
      sessions: ["insert text"],
    };

    const classroom: Classroom = {
      name: "JAKDF 3rd divison",
      students: [student],
      teacher: [teacher],
      leaderboard: [],
      classroomId: classId,
    };

    load();
    clear(data);
    load();
    data.userIds.push(kafkaId);
    data.userIds.push(soshiroId);
    data.classroomIds.push(classId);
    data.classrooms.push(classroom);
  }



  test("The class and student exist", () => {
    let kafkaId = Math.floor(Math.random() * 1000000);
    let soshiroId = Math.floor(Math.random() * 1000000);
    let classId = Math.floor(Math.random() * 1000000);
    while (kafkaId === soshiroId || kafkaId === classId || soshiroId === classId) {
      kafkaId = Math.floor(Math.random() * 1000000);
      soshiroId = Math.floor(Math.random() * 1000000);
      classId = Math.floor(Math.random() * 1000000);
    }
    setUp(kafkaId, soshiroId, classId);
    const student = getStudent(kafkaId, classId);


    expect(student).toStrictEqual({
      userId: kafkaId,
      name: "Kafka Hibino",
      email: "kafkahibino@gmail.com",
      password: "IamNotKaijuno.8",
      sessions: ["insert text"],
    });
    //leaderboard: { id: number; points: number; name: string; }[];
  });

  test("The class exist, the student does not", () => {
    let kafkaId = Math.floor(Math.random() * 1000000);
    let soshiroId = Math.floor(Math.random() * 1000000);
    let classId = Math.floor(Math.random() * 1000000);
    let randomId = 4;
    while (kafkaId === soshiroId || kafkaId === classId || soshiroId === classId || randomId === kafkaId) {
      kafkaId = Math.floor(Math.random() * 1000000);
      soshiroId = Math.floor(Math.random() * 1000000);
      classId = Math.floor(Math.random() * 1000000);
    }
    setUp(kafkaId, soshiroId, classId);
    const student = getStudent(randomId, classId);


    expect(student).toStrictEqual(undefined);
    //leaderboard: { id: number; points: number; name: string; }[];
  });

  test("The student exists, the class does not", () => {
    let kafkaId = Math.floor(Math.random() * 1000000);
    let soshiroId = Math.floor(Math.random() * 1000000);
    let classId = Math.floor(Math.random() * 1000000);
    let randomId = 4;
    while (kafkaId === soshiroId || kafkaId === classId || soshiroId === classId || randomId === classId) {
      kafkaId = Math.floor(Math.random() * 1000000);
      soshiroId = Math.floor(Math.random() * 1000000);
      classId = Math.floor(Math.random() * 1000000);
    }
    setUp(kafkaId, soshiroId, classId);
    const student = getStudent(kafkaId, randomId);


    expect(student).toStrictEqual(undefined);
    //leaderboard: { id: number; points: number; name: string; }[];
  });
});


describe("update a students values", () => {
  function setUp(kafkaId: number, soshiroId: number, classId: number) {

    const student: User = {
      userId: kafkaId,
      name: "Kafka Hibino",
      email: "kafkahibino@gmail.com",
      password: "IamNotKaijuno.8",
      sessions: ["insert text"],
    };

    const teacher: User = {
      userId: soshiroId,
      name: "Soshiro Hoshina",
      email: "soshirohoshina@gmail.com",
      password: "kidsshelter",
      sessions: ["insert text"],
    };

    const classroom: Classroom = {
      name: "JAKDF 3rd divison",
      students: [student],
      teacher: [teacher],
      leaderboard: [],
      classroomId: classId,
    };

    load();
    clear(data);
    load();
    data.userIds.push(kafkaId);
    data.userIds.push(soshiroId);
    data.classroomIds.push(classId);
    data.classrooms.push(classroom);
  }


  test("updating", () => {
    let kafkaId = Math.floor(Math.random() * 1000000);
    let soshiroId = Math.floor(Math.random() * 1000000);
    let classId = Math.floor(Math.random() * 1000000);
    let newclassId = Math.floor(Math.random() * 1000000);
    while (kafkaId === soshiroId || kafkaId === classId || soshiroId === classId || newclassId === classId) {
      kafkaId = Math.floor(Math.random() * 1000000);
      soshiroId = Math.floor(Math.random() * 1000000);
      classId = Math.floor(Math.random() * 1000000);
      newclassId = Math.floor(Math.random() * 1000000);
    }
    setUp(kafkaId, soshiroId, classId);
    const student = getStudent(kafkaId, classId);
    const classroom: Classroom = {
      name: "JAKDF 2rd divison",
      students: [],
      teacher: [],
      leaderboard: [],
      classroomId: newclassId,
    };

    expect(student).not.toStrictEqual(undefined);
    if (student === undefined) {
      return;
    }

    student.name = "Reno Ichikawa";
    student.email = "renoichikawa@gmai.com";
    student.classroom = classroom

    updateStudent(student.userId, classId, {
      name: student.name,
      email: student.email,
      classroom: student.classroom
    })


  })

});
