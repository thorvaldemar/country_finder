import countries from './countries';

export type CountryType = {
    /** - The same thing as the country's ISO 3166-1 code */
    code: string
    /** - The full english name of the country */
    name: string
    /** - The timezone-code of the country */
    zone: string
};

/** Retrieves the clients country details */
export default function getCountry(): CountryType | undefined {
    return countries.find(country => country.zone === Intl.DateTimeFormat().resolvedOptions().timeZone);
}