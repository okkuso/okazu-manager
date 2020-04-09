import { IBookmark } from '../interfaces/bookmark';

export class Bookmark implements IBookmark {
  constructor(
    public userId: string,
    public title: string,
    public url: string,
    public description: string,
    public createdDate: Date,
    public updatedDate: Date,
    public isDeleted: boolean,
  ) { }
}
