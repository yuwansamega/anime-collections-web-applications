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
        },
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
        idMal,
        title {
          romaji
          english
          native
        },

        coverImage {
          medium
        }
      }
    }
  }
`