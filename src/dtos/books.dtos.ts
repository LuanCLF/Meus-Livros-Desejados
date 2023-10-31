export interface AddBookDto {
  title: string;
  author: string;
  date?: string;
  gender?: string;
}
export interface EditBookDto {
  title: string;
  author: string;
  date?: string;
  gender?: string;
}

export interface EditBookQueryDto {
  bookID: number;
}
