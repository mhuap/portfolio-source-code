import React from 'react';
import Function from '../components/function.js';
import Template from '../components/template';

function SoftwareContent() {
  return (
    <>
      <Function
        name='Portfolio'
        subtitle='Website - personal project [solo]'>
        <p>
          Built and designed the website you're looking at right now!
        </p>
        <p>
          I worked on this as an exercise in front-end development.
        </p>
        <p className='techs'>
          <ul>
            <li>Javascript</li>
            <li>HTML/CSS</li>
            <li>ReactJS</li>
            <li>Gatsby</li>
          </ul>
        </p>
      </Function>
      <Function
        name='SmartFleet'
        subtitle='Web-app - hackathon project [team of 4]'>
        <p>
          Built a car fleet management system for B2B use. Managers can assign tasks to drivers,
          and remotely give them access to the car. Drivers can then access the car without a key.
          Once on a task, managers can keep track of the car's location, and are alerted to any
          unreasonable odometer readings.
        </p>
        <p>
          I mainly focused on the back-end and built the API connecting our app to the SmartCar and Google APIs.
        </p>
        <p className='techs'>
          <ul>
            <li>Python</li>
            <li>Flask</li>
            <li>SmartCar API</li>
            <li>Google APIs: Geocoding, Maps Javascript, Distance Matrix </li>
            <li>Javascript</li>
            <li>HTML/CSS</li>
          </ul>
        </p>
      </Function>
      <Function
        name='Childhood Illness Diagnosis App'
        subtitle='Android mobile app - personal project [solo]'>
        <p>
          Built an app to facilitate the use of the diagnosis questionnaire described in <a href='http://apps.who.int/iris/bitstream/10665/104772/16/9789241506823_Chartbook_eng.pdf?ua=1'>WHO’s Integrated Management of Childhood Illness Chart Booklet</a>.
          Users input the patient’s age, answer questions, and receive a diagnosis based on their answers.
        </p>
        <p>
          I worked on this as an exercise in Android development.
        </p>
        <p className='techs'>
          <ul>
            <li>Java</li>
            <li>SQL</li>
            <li>Room Persistance Library</li>
            <li>Android Platforms API</li>
            <li>Android Studio</li>
          </ul>
        </p>
      </Function>

      <Function
        name='Maze Cube'
        subtitle='Desktop video-game - personal project [solo]'>
        <p>
          Built a 3D game in Unity that involved moving a cube around a maze and shooting projectiles to spring the cube over walls and defeat enemies.
        </p>
        <p className='techs'>
          <ul>
            <li>C#</li>
            <li>Unity3D</li>
          </ul>
        </p>
      </Function>

      <Function
        name='Pseudo-theremin Looper'
        subtitle='FPGA Musical Instrument - course project [solo]'>
        <p>
          Created a musical instrument and looping machine with an FPGA. The user controls notes with simultaneous use and coordination of switches and PS2 mouse. I also implemented a looping feature that allowed the user to load in notes and play them back.
        </p>
        <p className='techs'>
          <ul>
            <li>Verilog</li>
            <li>Altera DE1-SoC</li>
            <li>Quartus II</li>
          </ul>
        </p>
      </Function>

    </>
  );
}

function Software(){
  return (
    <Template software={true}>
      <SoftwareContent />
    </Template>
  );
}

export default Software;
