import ajax from "../functions/_ajax";
import L from '../vendors/leaflet';

export default class Salesmap {

    /**
     * @callback ajaxCallback
     * @param {Object} response
     */

    /**
     * @param {String} mapid
     * @param {Object} options
     * @param {{element: HTMLElement, url: string, callback: ajaxCallback, datas: Object}[]} options.buttons
     * @param {Boolean} options.display
     */
    constructor(mapid, options = {})
    {
        //Options
        this.options = Object.assign({
            buttons: [],
            display: true,
        }, options);
        this.zoom = null;

        //DOM
        this.mapElement = document.getElementById(mapid);
        this.customerCountries = this.mapElement.dataset.customer_countries.split(',');
        this.setMap(mapid).addGeojson();

        //Events
        this.onWindowResize();
        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    style(feature) {
        let opacity = this.customerCountries.indexOf(feature.properties.iso_a2) === -1 ? 0 : 0.7;
        return {
            fillColor: '#dc0fee',
            weight: 2,
            color: 'white',
            dashArray: '3',
            fillOpacity: opacity
        };
    }

    setMap(mapid)
    {
        this.map = L.map(mapid, {
            zoomControl: false,
            dragging: false,
            scrollWheelZoom: false,
            doubleClickZoom: false,
        });
        this.layer = new L.TileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            }
        );
        this.map.addLayer(this.layer);
        return this;
    }

    addGeojson()
    {
        ajax(this.mapElement.dataset.geojson, (geojson) => {
            L.geoJson(geojson, {style: this.style.bind(this)}).addTo(this.map);
        });
        return this;
    }

    setView()
    {
        const params = [
            {
                height: '180px',
                maxWidth: '300px',
                lat: 40
            },
            {
                height: '350px',
                maxWidth: '550px',
                lat: 40
            },
            {
                height: '600px',
                maxWidth: '1100px',
                lat: 30
            }
        ]
        this.mapElement.style.height = params[this.zoom].height;
        this.mapElement.style.maxWidth = params[this.zoom].maxWidth;
        this.map.setView(new L.LatLng(params[this.zoom].lat, 0), this.zoom);
    }

    onWindowResize()
    {
        let windowWidth = window.innerWidth;
        let zoom = null;
        if (windowWidth < 500) {
            zoom = 0;
        } else if (windowWidth < 1000) {
            zoom = 1;
        } else {
            zoom = 2;
        }
        if (zoom !== this.zoom) {
            this.zoom = zoom;
            this.setView();
        }
    }
}