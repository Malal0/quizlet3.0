import { useState } from 'react';
import QuizPage from './assets/components/QuizPage';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {

  return (
    <div className='app'>
      <div className='blur'>
        <div className='container'>
          {
            false &&
            <>
              <h1 className='title'>Quizlet</h1>
              <ul>
                <li>import quiz data</li>
                <li>make question block component</li>
                <li>make question</li>
                <li>make answer components</li>
                <li>make css</li>
                <li>make submit button</li>
              </ul>
            </>
          }
          <QuizPage />
        </div>
      </div>
    </div>
  )
}

export default App
