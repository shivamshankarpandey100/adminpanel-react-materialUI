// http://localhost:8082/student/allstudents
export function fetchStudents() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8082/student/allstudents");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchStudentById(id) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(
      "http://localhost:8082/student/seestudent/" + id
    );
    const data = await response.json();

    resolve({ data });
  });
}
export function updateStudentById(update, id) {
  return new Promise(async (resolve) => {
    console.log(update);
    const response = await fetch("http://localhost:8082/student/update/" + id, {
      method: "PUT",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}
