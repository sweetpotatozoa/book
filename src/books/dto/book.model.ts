// book.model.ts
export class BookDto {
  id: number;
  title: string;
  author: string;
  registrationDate: Date;
  lastModifiedDate: Date;
  isAvailable: boolean; // 대출 가능 여부
}
