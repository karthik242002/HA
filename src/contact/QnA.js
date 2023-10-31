// QnA.js

import React, { Component } from 'react';

class QnA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        { id: 1, question: "Question text goes here", answer: "Answers." },
        { id: 2, question: "Question text goes here", answer: "Answers" },
        { id: 3, question: "Question text goes here", answer: "Answers" },
        { id: 4, question: "Question text goes here", answer: "Answers" },
        { id: 5, question: "Question text goes here", answer: "Answers" },
        // Add more questions and answers here
      ],
      openQuestionId: null,
    };
  }

  toggleAnswer = (questionId) => {
    this.setState((prevState) => ({
      openQuestionId: prevState.openQuestionId === questionId ? null : questionId,
    }));
  };

  render() {
    const { questions, openQuestionId } = this.state;

    return (
      <div className='Qna'>
        <center>
             <h2>Frequently asked questions</h2>
        <p>Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</p>
        <div className=' q-a'>
          {questions.map((question) => (
            <div key={question.id}  >
              <div
                className="question"
                onClick={() => this.toggleAnswer(question.id)}
              >
                <p>{question.question}</p>
                <span className="dropdown-icon">
                  {openQuestionId === question.id ? "▲" : "▼"}
                </span>
              </div>
              {openQuestionId === question.id && (
                <div className="answer">{question.answer}</div>
              )}
            </div>
          ))}
        </div>
        <div className='still-q'>
            <h4>Still have questions?</h4>
            <p>Support details to capture customers that might be on the fence.</p>
            <button>Contact us</button>
        </div>
        <div className='still-next'>
            <p>Join our newsletter to stay up to date on features and releases.</p>
        </div>
        <div className='quest-get'>
            <input type="text" placeholder='Enter Your Email'/>
            <button>Subscribe</button>
            <p>By subscribing you agree to with our <a href="#">Privacy Policy</a>  and provide consent to receive updates from our company.</p>
            <p>By subscribing you agree to with our <a href="#">Terms and Conditions</a> and provide consent to receive updates from our company.</p>
        </div>
        </center>
       
      </div>
    );
  }
}

export default QnA;