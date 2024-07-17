import { Location } from '@/datas/type';
import React, { createContext, useState } from 'react';

interface LocationContext {
    locations: Location[];
    setLocations: React.Dispatch<React.SetStateAction<Location[]>>;
}

export const LocationContext = createContext<LocationContext | null>(null);

export function LocationContextProvider({ children }: { children: React.ReactNode }) {
    const [locations, setLocations] = useState<Location[]>([]);
    return (
        <LocationContext.Provider value={{ locations, setLocations }}>
            {children}
        </LocationContext.Provider>
    );
}

