// using the filter function//
export default function getStudentsByLocation(students, city) {
  return students.filter((obj) => obj.location === city);
}
