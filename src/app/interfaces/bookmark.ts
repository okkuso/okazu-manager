export interface IBookmark {
  userId: string;
  title: string;
  url: string;
  description: string;
  createdDate: Date;
  updatedDate: Date;
  isDeleted: boolean;
}
