// book.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDto } from './dto/book.model';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() bookData: BookDto): BookDto {
    return this.booksService.create(bookData);
  }

  @Get()
  findAll(): BookDto[] {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): BookDto {
    const bookId = parseInt(id, 10);
    return this.booksService.findOne(bookId);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatedData: Partial<BookDto>,
  ): BookDto {
    const bookId = parseInt(id, 10);
    return this.booksService.update(bookId, updatedData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    const bookId = parseInt(id, 10);
    this.booksService.delete(bookId);
  }
}
