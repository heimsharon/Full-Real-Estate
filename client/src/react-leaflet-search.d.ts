declare module 'react-leaflet-search' {
  import { Component } from 'react';
  import { MapContainerProps } from 'react-leaflet';

  interface ReactLeafletSearchProps extends MapContainerProps {
    position?: string;
    inputPlaceholder?: string;
    showMarker?: boolean;
    zoom?: number;
    closeResultsOnClick?: boolean;
    openSearchOnLoad?: boolean;
    provider?: string;
    providerOptions?: object;
    popUp?: (info: any) => JSX.Element | false;
  }

  export default class ReactLeafletSearch extends Component<ReactLeafletSearchProps> {}
}