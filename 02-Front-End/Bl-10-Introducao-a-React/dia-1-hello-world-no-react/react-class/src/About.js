import React from 'react';

class About extends React.Component {
  render() {
    const skills = ['HTML', 'CSS', 'Bash', 'JavaScript']
    const jsxSkills = skills.map((skill) => <li>{skill}</li>)
    return (
      <div>
        <h1>Moisés</h1>
        <p>Sou um jovem estudante de tecnologia.</p>
        <h2>Minhas Habilidades</h2>
        <ul>
          <li>{ jsxSkills }</li>
        </ul>
      </div>
    )
  }
}

export default About;
