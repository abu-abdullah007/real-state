"use client"
import SearchBlock from "@/components/organisms/SearchBlock";
import Cards from "@/components/organisms/Cards";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { fetchDataFromAPI } from "@/features/fetchDataSlice";
import Loading_spin from "../atoms/Loading_effect";
import Error from "../atoms/Error";

export default function CardHolder() {
  const dispatch = useDispatch<AppDispatch>()


  const { projects, loading, error } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchDataFromAPI())
  }, [dispatch])

  if (loading) return <Loading_spin />
  if (error) return <Error />

  return (
    <div className="w-full h-auto">
      <SearchBlock />
      <Cards data={projects} />
    </div>
  );
}
