// const App = () => {
//   const course = {
//     id: 1,
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         e]xercises: 10,
//         id: 1
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7,
//         id: 2
//       },
//       {
//         name: 'State of a component',
//         exercises: 14,
//         id: 3
//       }
//     ]
// }

//   const Part = (props) =>  (
//     <div>
//       {props.name} {props.exercises}
//     </div>
//   )

//   function Content () {
//     return (
//   <div>
//   <Part name={course.parts[0].name} exercises={course.parts[0].exercises}/>
//   <Part name={course.parts[1].name} exercises={course.parts[1].exercises}/>
//   <Part name={course.parts[2].name} exercises={course.parts[2].exercises}/>
//   </div> )}

// const Header = () => (
// <h1>{course.name}</h1> )

//   const Course = () => (
//     <div>
//     <Header/>
//     <Content/>
//     </div>
//     )

//   return <Course course={course} />
// }

// export default App

// const Header = (props)=> {
//   return (
//     <div>
//       <p>Header {props.course} {props.exercises}</p>
//     </div>
//   )
// }

// const Content = (props)=> {
//   return (
//     <div>
//       <p>Content {props.part}</p>
//     </div>
//   )
// }

// const Total = (props)=> {
//   return (
//     <div>
//       <p>TotalData {props.total}</p>
//     </div>
//   )
// }
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//      < Header course={course}/>
//      < Content part={part1}/>
//      < Content part={part2}/>
//      < Content part={part3}/>
//      < Total total={exercises1 + exercises2 + exercises3}/>

//     </div>
//   )
// }

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1.name}
      </p>
      <p>
        {part2.name}
      </p>
      <p>
        {part3.name}
      </p>
      <p>
        {part1.exercises}
      </p>
      <p>
        {part2.exercises}
      </p>
      <p>
        {part3.exercises}
      </p>
    </div>
  )
}
// import { useState } from "react";

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   setTimeout(() => setCounter(counter + 1), 1000);
//   console.log("rendering...", counter);
//   return <div>{counter}</div>;
// };

// export default App;
