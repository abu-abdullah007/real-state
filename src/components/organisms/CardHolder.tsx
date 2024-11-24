import SearchBlock from "@/components/organisms/SearchBlock";
import Cards from "@/components/organisms/Cards";

export default function CardHolder() {
  return (
    <div className="w-full h-auto">
      <SearchBlock />
      <Cards/>
    </div>
  );
}
