import LocationIcon from '../svg/LocationIcon'
import PhoneIcon from '../svg/PhoneIcon'
import HyperLinkIcon from '../svg/HyperLinkIcon'

interface Props {
  pic: any
  address: string
  addressUrl: string
  phone: string
  phoneDisplay: string
  hypeLink: string
  hypeLinkDisplay: string
}

const RestaurantCard = ({
  pic,
  address,
  addressUrl,
  phone,
  phoneDisplay,
  hypeLink,
  hypeLinkDisplay,
}: Props) => {
  return (
    <>
      <div className="grid justify-items-center">
        <div>
          <img src={pic} alt="depot" />
        </div>
        <div className="flex m-3">
          <LocationIcon />
          <a
            href={addressUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-2 hover:text-blue-300"
          >
            {address}
          </a>
        </div>
        <div className="flex m-2">
          <PhoneIcon />
          <a href={`tel:${phone}`} className="ml-2 hover:text-blue-300">
            {phoneDisplay}
          </a>
        </div>
        <div className="flex m-2">
          <HyperLinkIcon />
          <a
            href={hypeLink}
            target="_blank"
            rel="noreferrer"
            className="ml-2 hover:text-blue-300"
          >
            {hypeLinkDisplay}
          </a>
        </div>
      </div>
    </>
  )
}

export default RestaurantCard
