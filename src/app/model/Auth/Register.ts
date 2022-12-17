export interface Register{
  username: string,
  password: string,
  role:string
}


export interface encriptedRegister{
  username:string,
  role:string,
  passwordHash:any,
  passwordSalt:any
}
