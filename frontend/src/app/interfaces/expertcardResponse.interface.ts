

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
    expertCard: [
      {
        user_id: string;
        name: string;
        salary: string
        banner: string;
        description: string;

      }
    ];
    // error: {
    //   name: string;
    //   message: string;
    // };
  }
  
  export interface specialistResponse {
    specialists: [
      {
        name:string
        expert_profile_id: string,
        recent_work:string, 
        about:string, 
        delivery:string, 
        profile_image:string, 
        salary:string, 
        description:string, 
     
      }
    ]
  }