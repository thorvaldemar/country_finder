/**
 * @typedef {Object} CountryType
 * @property {string} code - The same thing as the country's ISO 3166-1 code
 * @property {string} name - The full english name of the country
 * @property {string} zone - The timezone of the country
 */

/** @type {Array<CountryType>|null} */
let __CountryList = null;

/**
 * Retrieves the clients country details
 * @returns {Promise<CountryType>}
 */
async function getCountry() {
    return new Promise((resolve, reject) => {
        if (__CountryList) return get();
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status !== 200) return reject(xhr);

            __CountryList = JSON.parse(xhr.response)
            get();
        };
        xhr.open("GET", 'https://thorvaldemar.github.io/country_finder/countries.json', true);
        xhr.send();

        function get() {
            resolve(__CountryList.find(country => country.zone === Intl.DateTimeFormat().resolvedOptions().timeZone));
        }
    });
}