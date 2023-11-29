import countries from './countries';

export type CountryType = {
    code: string
    name: string
    zone: string
};

export default function getCountry(): CountryType | undefined {
    return countries.find(country => country.zone === Intl.DateTimeFormat().resolvedOptions().timeZone);
}