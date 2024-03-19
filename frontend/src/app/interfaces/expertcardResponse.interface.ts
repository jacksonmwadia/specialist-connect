

export interface ExpertCardResponse {
    expertCards: [
      {
        card_id: string;
        name: string;
        banner: string;
        description: string;
        salary: string;
      }
    ];
    error: {
      name: string;
      message: string;
    };
  }
  export interface OneexpertcardResponse {
    product: [
      {
        card_id: string;
        name: string;
        banner: string;
        description: string;
        salary: string;

      }
    ];
    // error: {
    //   name: string;
    //   message: string;
    // };
  }
  
  