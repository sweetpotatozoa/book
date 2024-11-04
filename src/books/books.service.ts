// book.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { BookDto } from './dto/book.model';

@Injectable()
export class BooksService {
  private books: BookDto[] = [];

  create(bookData: BookDto): BookDto {
    const newBook = { ...bookData, id: Date.now() };
    this.books.push(newBook);
    return newBook;
  }

  findAll(): BookDto[] {
    return this.books;
  }

  findOne(id: number): BookDto {
    const book = this.books.find((b) => b.id === id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  update(id: number, updatedData: Partial<BookDto>): BookDto {
    const bookIndex = this.books.findIndex((b) => b.id === id);
    if (bookIndex === -1) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    this.books[bookIndex] = {
      ...this.books[bookIndex],
      ...updatedData,
      lastModifiedDate: new Date(),
    };
    return this.books[bookIndex];
  }

  delete(id: number): void {
    const bookIndex = this.books.findIndex((b) => b.id === id);
    if (bookIndex === -1) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    this.books.splice(bookIndex, 1);
  }
}
