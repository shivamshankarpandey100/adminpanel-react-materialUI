
export function fetchStudents(){
  return new Promise(async (resolve) =>{
   
    const response = await fetch(" http://localhost:8082/student/allstudents"); 
    const data = await response.json()
    resolve({data})
  }
  );
}