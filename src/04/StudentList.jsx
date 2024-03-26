import Student from "./Student";

export default function StudentList() {
  return (
    <>
      <Student name="홍길동" age={30} isStudent={true} />
      <Student name="박주희" age={26} isStudent={true} />
      <Student />
    </>
  );
}
