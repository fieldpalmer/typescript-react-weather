import React, {FC} from "react";
import {WeatherLocation} from "../model/Weather";

interface LocationTableProps {
  locations: WeatherLocation[];
  current: WeatherLocation | null;
  onSelect: (location: WeatherLocation) => void;
}

export const LocationTable: FC<LocationTableProps> = ({locations, onSelect, current}) =>
  <div>
    {
      locations.length === 0 ? 
      <div className="">
        <p className="fs-3 mt-3">Locations</p>
        <p className="fst-italic small">Your searched locales appear here</p>
      </div> :
      <div className="locationsTable mt-3">
        {/* <p className="fs-3 mt-3">Locations</p> */}
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th className="fs-3 mt-3">Locations</th>
            </tr>
          </thead>
          <tbody>
            {locations.map(location =>
              <tr key={location.id}
                  className={current?.id === location.id ? 'table-primary' : ''}
                  onClick={() => onSelect(location)}>
                <td>{location.name}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    }
  </div>