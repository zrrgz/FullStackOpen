const App = () => {
  const course = 'Half Stack application development'
  const part = [{
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }]

  return (
    <div>
      <Header course={course} />
      <Content 
        part={part}
      />
      <Total part={part} />
    </div>
  )
}

const Header = (props) => {
  return (<h1>{props.course}</h1>)
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part[0].name} exercise={props.part[0].exercises} />
      <Part part={props.part[1].name} exercise={props.part[1].exercises} />
      <Part part={props.part[2].name} exercise={props.part[2].exercises} />
    </>
  )
}

const Part = (props) => {
  return (<p>{props.part} {props.exercise}</p>)
}

const Total = (props) => {
  return (<p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>)
}

export default App
