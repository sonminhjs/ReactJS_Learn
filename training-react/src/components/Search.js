import { useState } from "react";

function Search({ searchItemName }) {

    const [valueSearch, setValueSearch] = useState("");
    const searchItemComponent = () => {
        searchItemName(valueSearch);
    };

    return (
        <>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group w-50" >
                    <input
                        type="text"
                        name="keyword"
                        className="form-control search "
                        placeholder="Nhập từ khóa . . ."
                        value={valueSearch}
                        onChange={(e) => setValueSearch(e.target.value)}
                    />

                    <button
                        onClick={searchItemComponent}
                        className="btn btn-primary search2"
                        type="button"
                    >
                        <span className="">Search</span>
                    </button>

                </div>
            </div>
        </>
    );
}

export default Search;