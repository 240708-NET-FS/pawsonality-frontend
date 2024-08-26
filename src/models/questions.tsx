// interface Option {
//     text: string;
//     animal: string;
//   }
  
//   interface Question {
//     question: string;
//     options: Option[];
//   }
  
//   type QuestionsDTO = Question[];


  interface AnswerDTO {
    answerID?: number;
    questionID?: number;
    answerText: string;
    answerType: string;
    question: number | null;
  }
  
  interface QuestionDTO {
    questionID: number;
    questionText: string;
    answer: AnswerDTO[];
    
  }
  
  type QuestionsDTO = QuestionDTO[];
  
  export default QuestionsDTO;