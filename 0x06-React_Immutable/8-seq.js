import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const lazySeq = Seq(object);

  const filteredStudents = lazySeq.filter(student => student.score > 70);

  const JSObj = filteredStudents.toJS();

  Object.keys(JSObj).map((key) => {
    JSObj[key].firstName = JSObj[key].firstName.charAt(0).toUpperCase() + JSObj[key].firstName.slice(1);
    JSObj[key].lastName = JSObj[key].lastName.charAt(0).toUpperCase() + JSObj[key].lastName.slice(1);
    return JSObj[key];
  });

  console.log(JSObj);
}
