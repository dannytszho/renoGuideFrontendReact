import BeerIcon from '../svg/BeerIcon'
import DiningIcon from '../svg/DiningIcon'
import Depot from '../Images/TheDepot.png'
import Louis from '../Images/Louis.png'
import Genoa from '../Images/Genoa.png'

const RestaurantData = [
  {
    name: 'The Depot',
    icon: <BeerIcon />,
    pic: Depot,
    address: '325 E. 4TH STREET, RENO, NV 89512',
    addressUrl:
      'https://www.google.com/maps/place/The+Depot+Craft+Brewery+%26+Distillery/@39.531084,-119.811749,17z/data=!3m1!4b1!4m5!3m4!1s0x8099474a497e4dd5:0x47738ce5eaae0fda!8m2!3d39.531084!4d-119.809555',
    phone: '+17757374330',
    phoneDisplay: '775-737-4330',
    hypeLink: 'https://www.thedepotreno.com/',
    hypeLinkDisplay: 'thedepotreno.com',
  },
  {
    name: 'Louis Basque Corner',
    icon: <DiningIcon />,
    pic: Louis,
    address: '301 E. 4TH STREET, RENO, NV 89512',
    addressUrl:
      "https://www.google.com/maps/place/Louis'+Basque+Corner/@39.5308943,-119.812329,17z/data=!3m1!4b1!4m5!3m4!1s0x8099474a46878899:0xd4aecd4254f77c92!8m2!3d39.5308943!4d-119.810135",
    phone: '+17753237203',
    phoneDisplay: '775-323-7203',
    hypeLink: 'https://louisbasquecorner.com/',
    hypeLinkDisplay: 'louisbasquecorner.com',
  },
  {
    name: 'Genoa Bar and Saloon',
    icon: <DiningIcon />,
    pic: Genoa,
    address: '2282 MAIN ST, GENOA, NV 89411',
    addressUrl:
      'https://www.google.com/maps/place/Genoa+Bar+and+Saloon/@39.5749058,-120.5016792,8.83z/data=!4m5!3m4!1s0x809999c879f14717:0x47e89ae29591f818!8m2!3d39.0032181!4d-119.8464727?hl=en',
    phone: '+17757823870',
    phoneDisplay: '775-782-3870',
    hypeLink: 'https://www.yelp.com/biz/genoa-bar-genoa',
    hypeLinkDisplay: 'genobar.com',
  },
]

export default RestaurantData
