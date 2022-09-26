import {
  Container,
  BookImage,
  BookTitle,
  BookAuthor
} from './styles'

interface BookProps {
  author: string;
  book_image: string;
  title: string;
}

export function MostRead({ author, book_image, title }: BookProps) {
  return (
    <Container>
      <BookImage source={{ uri: book_image }} />
      <BookTitle numberOfLines={1}>{title}</BookTitle>
      <BookAuthor numberOfLines={1}>{author}</BookAuthor>
    </Container>
  )
}