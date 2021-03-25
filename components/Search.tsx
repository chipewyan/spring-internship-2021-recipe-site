import React, { useState } from "react";
import { MdSearch } from "react-icons/md"

export type SearchProps = {
    onSubmit: (keyword: string) => void;
    keyword: string;
};

const Search: React.FC<SearchProps> = (rprops: SearchProps) => {
    const [searchword, setSearchword] = useState(rprops.keyword);
    return (
        <div>
            <form
            onSubmit = {(e) => {
                e.preventDefault();
                rprops.onSubmit(searchword);
            }}
        >
        <button onClick = {() => rprops.onSubmit(searchword)}>
            <MdSearch />
        </button>
        </form>
        </div>
    )
}

export {}

{/* export default Search; */}
