export interface IBookmark {
  id?: string;
  userId: string;
  title: string;
  url: string;
  description: string;
  createdDate: Date;
  updatedDate: Date;
  isDeleted: boolean;
}
