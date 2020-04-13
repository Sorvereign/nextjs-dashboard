import React from 'react';
import * as Vibrant from 'node-vibrant';


let v2 = new Vibrant('../../A-Good-Ad-Design.png');

function Ads ({v}: v2) {

	render() {
  return <>{v.getPalette((err, palette) => console.log(palette))}</>;
	}
	};

export default Ads;
