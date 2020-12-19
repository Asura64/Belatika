import places from '../vendors/places';

export default class Address {

    /**
     * @param {HTMLElement} addressInput
     */
    constructor(addressInput)
    {
        if (!addressInput instanceof HTMLElement) {
            return console.error('addressInput doit être un élément du DOM');
        }
        this.addressInput = addressInput;
        this.appId = this.addressInput.dataset.appId;
        this.appKey = this.addressInput.dataset.appKey;

        this.setOptions().initPlaces();
    }

    /**
     * @desc https://community.algolia.com/places/documentation.html#options
     * @return {this}
     */
    setOptions()
    {
        this.fixedOptions = {
            appId: this.appId,
            apiKey: this.appKey,
            container: this.addressInput,
            templates: {
                value: function(suggestion) {
                    return suggestion.name;
                }
            }
        };
        this.reconfigurableOptions = {
            language: 'fr',
            type: 'address',
        };

        return this;
    }

    /**
     * @desc Active Algolia places pour l'autocomplétion des champs d'adresse
     * @return {this}
     */
    initPlaces() {
        let placesAutocomplete = places(this.fixedOptions).configure(this.reconfigurableOptions);
        this.addressInput.setAttribute('autocomplete', 'new-password');

        placesAutocomplete.on('change', function resultSelected(e) {
            document.getElementById('address_country').value = e.suggestion.country || '';
            document.getElementById('address_city').value = e.suggestion.city || '';
            document.getElementById('address_postcode').value = e.suggestion.postcode || '';
        });
        placesAutocomplete.on('clear', () => {
            document.getElementById('address_country').value = '';
            document.getElementById('address_city').value = '';
            document.getElementById('address_postcode').value = '';
        });

        return this;
    }
}
