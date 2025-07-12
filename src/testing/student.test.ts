import { clear, data, load } from "../dataStore";
import { Classroom, User } from "../interfaces";
import { getStudent } from "../student";


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
    while (kafkaId == soshiroId || kafkaId == classId || soshiroId == classId) {
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
});
