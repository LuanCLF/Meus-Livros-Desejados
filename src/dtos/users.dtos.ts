export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
}
export interface LoginUserDto {
  email: string;
  password: string;
}
export interface EditUserDto {
  name: string;
  email: string;
  password: string;
}
export interface DeleteUserDto {
  email: string;
  password: string;
}
