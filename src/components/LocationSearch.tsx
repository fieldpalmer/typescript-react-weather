import React, {FC, useState} from "react";

interface LocationSearchProps {
  onSearch: (search: string) => void;
}

export const LocationSearch: FC<LocationSearchProps> = ({onSearch}) => {
  const [locationSearch, setLocationSearch] = useState('');
  const disableSearch = locationSearch.trim() === '';

  const addLocation = () => {
    onSearch(locationSearch);
    setLocationSearch('');
  };

  return (
    <div className="input-group">
      <input className="form-control" type="text" onChange={e => setLocationSearch(e.target.value)} value={locationSearch} placeholder="enter location" aria-label="form-input-location-search" />
      <span className="input-group-text m-0 p-0 " id="basic-addon2">
        <button className="btn btn-success rounded-0"
          onClick={addLocation} disabled={disableSearch}>Search
        </button>
      </span>
    </div>
  );
}