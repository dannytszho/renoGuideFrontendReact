import { Link } from 'react-router-dom'
import Nevada from '../Images/Nevada.png'
import { LongButton, CollapseButton } from './Button'
import HikerIcon from '../svg/HikerIcon'
import KayakIcon from '../svg/KayakIcon'
import DowntownIcon from '../svg/DowntownIcon'
import CoffeeIcon from '../svg/CoffeeIcon'
import Footer from './Footer'
import RestaurantCard from './RestaurantCard'
import RestaurantData from '../data/RestaurantData'

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col">
        <div className="flex justify-center mt-20">
          <img src={Nevada} alt="navada" />
        </div>
        <h2
          data-testid="homepage-1"
          className="flex justify-center font-iceland text-2xl m-2"
        >
          · Reno · Lake Tahoe ·
        </h2>
      </div>

      {/* Food and Drinks section */}
      <div className="grid gap-4 justify-center m-10 font-iceland">
        <p className="flex justify-center text-2xl m-2 whitespace-pre">
          ↓{'   '}Food & Drinks{'   '}↓
        </p>
        <div data-testid="homepage-2">
          {RestaurantData.map(place => (
            <CollapseButton
              key={place.name}
              details={
                <RestaurantCard
                  pic={place.pic}
                  address={place.address}
                  addressUrl={place.addressUrl}
                  phone={place.phone}
                  phoneDisplay={place.phoneDisplay}
                  hypeLink={place.hypeLink}
                  hypeLinkDisplay={place.hypeLinkDisplay}
                />
              }
            >
              <div className="flex">
                {place.icon}
                <h2 className="text-2xl mx-auto">{place.name}</h2>
              </div>
            </CollapseButton>
          ))}
        </div>
      </div>
      {/* Activities section */}

      <section className="grid gap-4 justify-center m-10 font-iceland">
        <p className="flex justify-center text-2xl whitespace-pre">
          ↓{'   '}Activities{'   '}↓
        </p>

        <LongButton>
          <Link to="/hikingtrails">
            <div className="flex">
              <div className="pl-4">
                <HikerIcon />
              </div>
              <h2 className="text-2xl mx-auto">Hiking</h2>
            </div>
          </Link>
        </LongButton>
        <LongButton>
          <a
            href="http://www.raftingreno.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex">
              <div className="pl-4">
                <KayakIcon />
              </div>
              <h2 className="text-2xl mx-auto">Whitewater Rafting</h2>
            </div>
          </a>
        </LongButton>
        <LongButton>
          <a href="https://downtownreno.org/" target="_blank" rel="noreferrer">
            <div className="flex">
              <div className="pl-4">
                <DowntownIcon />
              </div>
              <h2 className="text-2xl mx-auto">Reno Downtown</h2>
            </div>
          </a>
        </LongButton>
      </section>

      {/* Tip section */}
      <section className="grid gap-4 justify-center m-10 font-iceland">
        <p className="flex justify-center text-2xl whitespace-pre">
          ↓{'   '}Tip Jar{'   '}↓
        </p>
        <LongButton>
          <a
            href="https://www.buymeacoffee.com/dannytszho"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex">
              <div className="pl-4">
                <CoffeeIcon />
              </div>
              <h2 className="text-2xl mx-auto">Buy me a Coffee</h2>
            </div>
          </a>
        </LongButton>
      </section>
      {/* Footer section */}
      <Footer />
    </>
  )
}
export default HomePage
