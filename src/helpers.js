export const getUrl = (url) => {
  return `https://storage.googleapis.com/mazuproductions/${url}`
}

export const getUrlFT = (url) => {
  return `https://flirttool.com/media/${url}`
}

function parseAddress(response) {
  let results = response.results
  let parseAddress = results.reduce((accumulator, obj) => {
      let componentCountainsCountry = obj.types.includes('country');
      let componentCountainsPostalCode = obj.types.includes('postal_code');

      if (componentCountainsCountry) {
          let address_components = obj.address_components
          let countryComponenet = address_components.find(c => c.types.includes('country'))
          accumulator.country = countryComponenet
      }

      if (componentCountainsPostalCode) {
          let address_components = obj.address_components
          let postalComponenet = address_components.find(c => (c.types.includes('postal_code') && c.types.length == 1))
          if (postalComponenet) {
              accumulator.postal_code = postalComponenet.short_name
              accumulator.street_address = obj.formatted_address
          }
      }
      return accumulator
  }, {
      country: null,
      postal_code: null,
      street_address: null
  })
  return parseAddress
}
async function reverseGeocode(lat, lng) {
  let response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCkktP7eEWHs8FJJ6hFe10co5etxojmnKA`, {
      method: 'POST',
  })
  let data = await response.json()
  let parsedAddress = parseAddress(data)
  return parsedAddress
}
export const getUserAddress = async  () => {
  let userLocation = localStorage.getItem('location');
  if (userLocation) {
      console.log("no API hit")
      return JSON.parse(userLocation)
  }
  let response = await fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCkktP7eEWHs8FJJ6hFe10co5etxojmnKA', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          considerIp: true
      })
  })
  let data = await response.json()
  let location = data.location
  let userAddress = await reverseGeocode(location.lat, location.lng)
  localStorage.setItem('location', JSON.stringify(userAddress));
  return userAddress
}