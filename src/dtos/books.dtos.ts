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

export interface ListBooksQueryDto {
  filter: string | undefined;
  page: number | undefined;
  take: number | undefined;
}
export interface ListBooksDto {
  filter: string;
  page: number;
  take: number;
}
