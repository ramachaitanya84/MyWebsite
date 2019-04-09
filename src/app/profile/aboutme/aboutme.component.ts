import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ICoordinates, GoogleMapsHandler, IMapAttributes } from '../googlemaps';


@Component({
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})

export class AboutmeComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  markers: Array<ICoordinates> = [{lat: 1.3566, lng: 103.8094, isWork: true}, {lat: 17.3850, lng: 78.4867, isWork: true},
                                  {lat: 19.0760, lng: 72.8777, isWork: true}, {lat: 12.9716, lng: 77.5946, isWork: true},
                                  {lat: 28.6139, lng: 77.2090, isWork: true}, {lat: 52.5695, lng: -0.2405, isWork: true},
                                  {lat: 44.9778, lng: -93.2650, isWork: true}, {lat: 43.6532, lng: -79.3832, isWork: true},
                                  {lat: 22.3193, lng: 114.1694, isWork: false}, {lat: 25.0330, lng: 121.5654, isWork: false},
                                  {lat: 21.0278, lng: 105.8342, isWork: false}, {lat: 10.8231, lng: 106.6297, isWork: false},
                                  {lat: 13.7563, lng: 100.5018, isWork: false}, {lat: 13.3550, lng: 103.8552, isWork: false},
                                  {lat: 3.1390, lng: 101.6869, isWork: false}, {lat: 2.1896, lng: 102.2501, isWork: false},
                                  {lat: 1.1367, lng: 104.4258, isWork: false}, {lat: 51.5074, lng: -0.1278, isWork: false},
                                  {lat: -6.2088, lng: 106.8456, isWork: false}, {lat: 40.7128, lng: -74.0060, isWork: false},
                                  {lat: 43.0389, lng: -87.9065, isWork: false}, {lat: 47.6062, lng: -122.3321, isWork: false},
                                  {lat: 34.0522, lng: -118.2437, isWork: false}, {lat: 36.1699, lng: -115.1398, isWork: false},
                                  {lat: 37.7749, lng: -122.4194, isWork: false}, {lat: 32.7767, lng: -96.7970, isWork: false},
                                  {lat: 33.4484, lng: -112.0740, isWork: false}, {lat: 39.0997, lng: -94.5786, isWork: false},
                                  {lat: 25.3344, lng: 83.0143, isWork: false}, {lat: 13.0827, lng: 80.2707, isWork: false},
                                  {lat: 12.8373, lng: 79.7042, isWork: false}, {lat: 12.2958, lng: 76.6394, isWork: false},
                                  {lat: 29.9457, lng: 78.1642, isWork: false}, {lat: 11.6854, lng: 76.1320, isWork: false},
                                  {lat: 13.6288, lng: 79.4192, isWork: false}, {lat: 16.3067, lng: 80.4365, isWork: true},
                                  {lat: 16.2379, lng: 80.6444, isWork: false}, {lat: 16.5062, lng: 80.6480, isWork: false},
                                  {lat: 17.6868, lng: 83.2185, isWork: false}, {lat: 19.7669, lng: 74.4773, isWork: false},
                                  {lat: 18.7557, lng: 73.4091, isWork: false}, {lat: 24.7914, lng: 85.0002, isWork: false},
                                  {lat: 10.0634, lng: 105.5943, isWork: false}, {lat: 20.9101, lng: 107.1839, isWork: false},
                                  {lat: 25.0490, lng: 121.7875, isWork: false}, {lat: 39.0968, lng: -120.0324, isWork: false},
                                  {lat: 36.4864, lng: -118.5658, isWork: false}
                                 ];
  mapAttributes: IMapAttributes = {
                    centerlat: 40.0000,
                    centerlng: 0,
                    zoom: 1,
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: false,
                    zoomControl: false
                  };

  constructor() { }

  ngOnInit() {
    let initGoogleMap = new GoogleMapsHandler(this.gmapElement, this.markers);
    initGoogleMap.showMap(this.mapAttributes);
  }
}


