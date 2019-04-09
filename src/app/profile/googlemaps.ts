/// <reference types="@types/googlemaps" />


export interface ICoordinates {
    lat: number;
    lng: number;
    isWork: boolean;
  }

export interface IMapAttributes{
    centerlat: number;
    centerlng: number;
    zoom: number;
    mapTypeControl: boolean;
    streetViewControl: boolean;
    fullscreenControl: boolean;
    zoomControl: boolean;
}

export class GoogleMapsHandler{

    map: google.maps.Map;
    gmapElement: any;
    markers: Array<ICoordinates>;

    blueIcon = { url: '../../../assets/images/icon_blue_pin.png',
        size: new google.maps.Size(25, 34),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(12, 34)
    };

    redIcon = { url: '../../../assets/images/icon_red_pin.png',
        size: new google.maps.Size(25, 34),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(12, 34)
    };

    constructor(gmapElement: any, markers: Array<ICoordinates>){
        this.gmapElement = gmapElement;
        this.markers = markers;
    }

    public showMap (mapAttributes: IMapAttributes): void {
        const mapProp = {
            center: new google.maps.LatLng(mapAttributes.centerlat, mapAttributes.centerlng),
            zoom: mapAttributes.zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: mapAttributes.mapTypeControl,
            streetViewControl: mapAttributes.streetViewControl,
            fullscreenControl: mapAttributes.fullscreenControl,
            zoomControl: mapAttributes.zoomControl
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        // let infoWindow = new google.maps.InfoWindow();

        this.markers.forEach(x => {
            let marker = new google.maps.Marker({
                position: {lat: x.lat, lng: x.lng},
                map: this.map,
                icon: x.isWork ? this.redIcon : this.blueIcon
            });

    /*       google.maps.event.addListener(marker, 'click', x => {
            infoWindow.setContent('this is some place in Africa');
            infoWindow.setPosition(x.position);
            infoWindow.open(this.map, x);
        }); */
        });
    }
}