import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'The title of the product',
    example: 'Blue T-Shirt',
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty({
    description: 'The price of the product',
    example: 29.99,
    required: false,
    minimum: 0,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @ApiProperty({
    description: 'A detailed description of the product',
    example: 'Comfortable cotton t-shirt in blue color',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'The URL-friendly name of the product',
    example: 'blue-t-shirt',
    required: false,
  })
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiProperty({
    description: 'The number of items in stock',
    example: 100,
    required: false,
    minimum: 0,
  })
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @ApiProperty({
    description: 'Available sizes for the product',
    example: ['S', 'M', 'L', 'XL'],
    isArray: true,
  })
  @IsString({ each: true })
  @IsArray()
  sizes: string[];

  @ApiProperty({
    description: 'The gender category of the product',
    example: 'unisex',
    enum: ['men', 'women', 'kid', 'unisex'],
  })
  @IsIn(['men', 'women', 'kid', 'unisex'])
  gender: string;

  @ApiProperty({
    description: 'Tags associated with the product',
    example: ['cotton', 'summer', 'casual'],
    required: false,
    isArray: true,
  })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tags: string[];
}
