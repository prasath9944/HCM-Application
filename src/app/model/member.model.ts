export interface Member{
  memberId: number,
  firstName: string,
  lastName: string,
  username: string,
  physicianName:string,
  dateOfBirth:string,
  cliamId:string
}



export interface AddMember{
  firstName:string,
  lastName:string,
  username:string,
  password:string,
  confirmPassword:string;
  address:string,
  state:string,
  city:string,
  email:string,
  dateOfBirth:string
}
