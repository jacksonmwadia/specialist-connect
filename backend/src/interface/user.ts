export interface User {
  user_id: string;
  name: string;
  phone_no: string;
  email: string;
  role: string;
  image: string; // Optional field for the user's image URL
  password: string;
}

export interface loginUserDetails{
        
        userId: string;
        name: string;
        email: string;
        nationalId: string;
        phoneNumber: string;
        dateOfBirth: Date;
        location: string;
        gender: string;
        nationality: string;
        occupation: string;
        // password: string;
    
    
}