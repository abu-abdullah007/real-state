"use client"
import SearchBlock from "@/components/organisms/SearchBlock";
import { useState } from "react";
import { useQuery } from '@apollo/client';
import Cards from "@/components/organisms/Cards";
import { GET_PROJECTS } from "@/graphql/querys";


export default function CardHolder() {

  const [searchedAllData, setSearchedAllData] = useState<{ [key: string]: string }>({})  // catching query params from child components
  const { Title, page, limit, sortMethod, Sort } = searchedAllData

  const { data } = useQuery(GET_PROJECTS, {   // adding filter query params for card data
    variables: {
      search: Title,
      page: parseInt(page) ? parseInt(page) : 1,
      limit: parseInt(limit) ? parseInt(limit) : 30,
      order: sortMethod === 'ascending' ? 'asc' : 'desc',
      sort: ''
    },
  });

  return (

    <div className="w-full h-auto">
      <SearchBlock searchData={setSearchedAllData} />
      <Cards data={data} />
    </div>

  );
}
