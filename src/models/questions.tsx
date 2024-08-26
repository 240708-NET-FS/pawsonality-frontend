interface Option {
    text: string;
    animal: string;
  }
  
  interface Question {
    question: string;
    options: Option[];
  }
  
  type QuestionsDTO = Question[];
  
  export default QuestionsDTO;