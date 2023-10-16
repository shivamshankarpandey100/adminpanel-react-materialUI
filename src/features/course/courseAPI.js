
export function fetchCourses(){
  return new Promise(async (resolve) =>{
   
    const response = await fetch("http://localhost:8082/course/allcourses"); 
    const data = await response.json()
    resolve({data})
  }
  );
}