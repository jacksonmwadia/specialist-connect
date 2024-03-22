export interface User{
    image: string;
    salary(salary: any): unknown;
    description(description: any): unknown;
    profile_image(profile_image: any): unknown;
    banner(banner: any): unknown;
    user_id:string;
    name:string;
    email:string;
    phone_no:string;
    role?:string;
    created_at?:string;
    password:string;

}

export interface updateUser{
  name:string;
  email:string;
  phone_no:string;
  password:string;

}
