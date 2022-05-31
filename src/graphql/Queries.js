import { gql } from "@apollo/client";

export const GET_ALL_ANIME = gql`
  query ($page: Int!, $perPage: Int!) { 
    Page (page: $page, perPage: $perPage) {
      media {
        id,
        title {
          romaji
          english
          native
          userPreferred
        },
        status,
        description,
        season,
        startDate {
          year
        },
        endDate {
          year
        },
        averageScore,
        genres,
        type,
        episodes,
        duration,
        chapters,
        volumes,
        bannerImage,
        coverImage{
          large
        }
      }
    }
  }`;

export const GET_ANIME = gql`
  query ($id: Int!) { 
    Page {
      media (id: $id) {
        id,
        title {
          romaji
          english
          native
        },
        status,
        description,
        season,
        startDate {
          year
        },
        endDate {
          year
        },
        averageScore,
        genres,
        type,
        episodes,
        duration,
        chapters,
        volumes,
        bannerImage,
        coverImage{
          large
        }
      }
    }
  }
`