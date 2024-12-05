import { ReactNode } from "react";

export interface Geoname {
  adminCode1: string;
  lng: string;
  geonameId: number;
  toponymName: string;
  countryId: string;
  fcl: string;
  population: number;
  countryCode: string;
  name: string;
  fclName: string;
  adminCodes1: {
    ISO3166_2: string;
  };
  countryName: string;
  fcodeName: string;
  adminName1: string;
  lat: string;
  fcode: string;
};

export interface TransformedData {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
};

export interface WeatherWidgetProps {
  weather: string
}

export interface AdditionalDataListProps {
  additionalData: { name: string; value: string }[];
}

export interface MyTextProps {
  children: ReactNode;
  style?: string;
}