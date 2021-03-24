import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import { Container } from './styles';

function addCourseAction(title){
  return { type: 'ADD_COURSE', title}
}


function CourseList() {
  const qty = 2;
  const courses = useSelector(state => state.data.slice(0,qty),[qty])
  const dispatch = useDispatch()

  function addCourse(){
    dispatch(addCourseAction('GraphQL'))
  }
  return (
    <>
    <ul>
      {courses.map( course => (<li key={course}>{course}</li>))}
    </ul>
    <button type="button" onClick={addCourse}>Adicionar curso</button>
    </>
  );
}

export default CourseList;
