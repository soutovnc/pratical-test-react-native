import React, { useEffect, useState } from "react";

import { FlatList, StatusBar } from "react-native";
import {
  Container,
  HeaderHome,
  ContainerTextHeader,
  TextHeader,
  ContainerAvatarHeader,
  Avatar,
  ScrollableContainer,
  Title
} from "./styles"

import { SearchInput } from "../../components/SearchInput";
import { Book } from "../../components/Book";

import { api } from "../../services/api";

interface BookProps {
  author: string;
  book_image: string;
  title: string;
}

interface CategoryProps {
  display_name: string;
}

export function Home() {
  const [ recomendations, setRecomendations ] = useState<BookProps[]>([]);
  const [ weeklyMostRead, setWeeklyMostRead ] = useState<BookProps[]>([]);
  const [ categories, setCategories ] = useState<CategoryProps[]>([]);

  useEffect(() => {
    async function getBooks() {
      const books = await api.get(
        '/overview.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR'
      );

      const list = books.data.results.lists;
      const recomendations = [] as BookProps[];
      const weeklyMostRead = [] as BookProps[];

      list.forEach((category) => {
        weeklyMostRead.push({
          author: category.books[0].author,
          book_image: category.books[0].book_image,
          title: category.books[0].title,
        });

        recomendations.push({
          author: category.books[1].author,
          book_image: category.books[1].book_image,
          title: category.books[1].title,
        });
      });

      setWeeklyMostRead(weeklyMostRead);
      setRecomendations(recomendations);
    }

    async function getCategories() {
      const result = await api.get(
        '/names.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR'
      );

      const list = result.data.results;
      const categories = [] as CategoryProps[];

      list.forEach((category) => {
        categories.push({
          display_name: category.display_name,
        });
      });

      setCategories(categories);
    }

    getBooks();
    getCategories();
    console.log({ categories });
  }, []);

  return (
    <Container>
      <StatusBar 
        backgroundColor="#FFF"
        translucent
        barStyle="dark-content"
      />

      <HeaderHome>
        <ContainerTextHeader>
          <TextHeader>Olá, Vínicius!</TextHeader>
        </ContainerTextHeader>
        <ContainerAvatarHeader>
          <Avatar 
            source={{
              uri: "https://avatars.githubusercontent.com/u/54877403?v=4"
            }}
          />
        </ContainerAvatarHeader>
      </HeaderHome>
      
      <ScrollableContainer>
        <SearchInput />
        
        <Title>Para você</Title>

        <FlatList 
          data={recomendations}
          keyExtractor={(item) => Math.random().toString()}
          renderItem={({item}) => (
            <Book
              author={item.author}
              book_image={item.book_image}
              title={item.title}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
        />

        <Title>Categorias</Title>

        
      </ScrollableContainer>

    </Container>
  )
}