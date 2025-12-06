type ChatbotMessage = {
    isUser : boolean;
    content : ChatbotContent[]
}

type ChatbotContent = {
    type : string;
    text : string;
}

type AnalysisResult = {
  result: {
    freshness: number;
    description: string;
  };
}

type CalorieResult = {
    result : {
        totalCalories : number;
        healthScore : number;
        ingredients : {
            name : string;
            amount : number;
            calorie : number;
            defects : {
                name : string;
            }[]
        }[]
    }
}

type FileInfo = {
  url: string | null;
  content: File | null;
}

export type {ChatbotMessage, ChatbotContent, AnalysisResult, FileInfo, CalorieResult}