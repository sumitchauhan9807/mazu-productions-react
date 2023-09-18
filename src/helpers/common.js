
import { GET_CLOUD_PUT_URL } from 'queries'
import {apolloClient} from 'index'
import axios from 'axios'



export const getNavigateURL = (user) => {
  if(user.token) {
    return '/dashboard'
  }
  if(!user.token) {
    return '/login'
  }
}
export const uploadToCloud = async (file,progressCallback) => {
  try {
    
    let mimeType = file.type
    let name = makeId(5)+'_'+ file.name
    console.log(file);
    console.log(name)
    const { data, errors } = await apolloClient.query({
    query: GET_CLOUD_PUT_URL,
    variables: {
      filename: name,
      mimetype: mimeType,
    },
  });
  let putUrl = data.getCloudPutUrl
  let uploadProgress
  // console.log(putUrl,"putUrlputUrlputUrl")
  // return putUrl
    return new Promise((resolve,reject)=>{
        axios.request({
          method: "PUT", 
          url: putUrl, 
          data: file, 
          // headers_list:['Content-Type:video/mp4'],
          headers:{
            'Content-Type':mimeType
          },
          onUploadProgress: (p) => {
            // console.log(p); 
            // console.log(Math.ceil(p.loaded/p.total * 100))
            uploadProgress = Math.ceil(p.loaded/p.total * 100)
            // console.log(uploadProgress)
            progressCallback(uploadProgress)
            // document.getElementById('progress').innerHTML = `${Math.ceil(p.progress * 100)}  %`
            //this.setState({
                //fileprogress: p.loaded / p.total
            //})
          }
        }).then (data => {
          console.log(data)
          uploadProgress = 0
            resolve({
              filename:name,
              mimetype:mimeType
            })
        }).catch((e)=>{
          uploadProgress = 0
          reject(e)
        })
    })
  }catch(e) {
    console.log(e)
  }
}

function makeId(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function getLocations() {
  return  [
    {
      "country": "Afghanistan",
      "code": "AF",
      "currency": "afn",
      "calling_codes": "+93",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"
    },
    {
      "country": "Åland Islands",
      "code": "AX",
      "currency": "eur",
      "calling_codes": "+358",
      "flag": "https://flagcdn.com/ax.svg"
    },
    {
      "country": "Albania",
      "code": "AL",
      "currency": "all",
      "calling_codes": "+355",
      "flag": "https://flagcdn.com/al.svg"
    },
    {
      "country": "Algeria",
      "code": "DZ",
      "currency": "dzd",
      "calling_codes": "+213",
      "flag": "https://flagcdn.com/dz.svg"
    },
    {
      "country": "American Samoa",
      "code": "AS",
      "currency": "usd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/as.svg"
    },
    {
      "country": "Andorra",
      "code": "AD",
      "currency": "eur",
      "calling_codes": "+376",
      "flag": "https://flagcdn.com/ad.svg"
    },
    {
      "country": "Angola",
      "code": "AO",
      "currency": "aoa",
      "calling_codes": "+244",
      "flag": "https://flagcdn.com/ao.svg"
    },
    {
      "country": "Anguilla",
      "code": "AI",
      "currency": "xcd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/ai.svg"
    },
    {
      "country": "Antigua and Barbuda",
      "code": "AG",
      "currency": "xcd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/ag.svg"
    },
    {
      "country": "Argentina",
      "code": "AR",
      "currency": "ars",
      "calling_codes": "+54",
      "flag": "https://flagcdn.com/ar.svg"
    },
    {
      "country": "Armenia",
      "code": "AM",
      "currency": "amd",
      "calling_codes": "+374",
      "flag": "https://flagcdn.com/am.svg"
    },
    {
      "country": "Aruba",
      "code": "AW",
      "currency": "awg",
      "calling_codes": "+297",
      "flag": "https://flagcdn.com/aw.svg"
    },
    {
      "country": "Australia",
      "code": "AU",
      "currency": "aud",
      "calling_codes": "+61",
      "flag": "https://flagcdn.com/au.svg"
    },
    {
      "country": "Austria",
      "code": "AT",
      "currency": "eur",
      "calling_codes": "+43",
      "flag": "https://flagcdn.com/at.svg"
    },
    {
      "country": "Azerbaijan",
      "code": "AZ",
      "currency": "azn",
      "calling_codes": "+994",
      "flag": "https://flagcdn.com/az.svg"
    },
    {
      "country": "Bahamas",
      "code": "BS",
      "currency": "bsd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/bs.svg"
    },
    {
      "country": "Bahrain",
      "code": "BH",
      "currency": "bhd",
      "calling_codes": "+973",
      "flag": "https://flagcdn.com/bh.svg"
    },
    {
      "country": "Bangladesh",
      "code": "BD",
      "currency": "bdt",
      "calling_codes": "+880",
      "flag": "https://flagcdn.com/bd.svg"
    },
    {
      "country": "Barbados",
      "code": "BB",
      "currency": "bbd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/bb.svg"
    },
    {
      "country": "Belarus",
      "code": "BY",
      "currency": "byn",
      "calling_codes": "+375",
      "flag": "https://flagcdn.com/by.svg"
    },
    {
      "country": "Belgium",
      "code": "BE",
      "currency": "eur",
      "calling_codes": "+32",
      "flag": "https://flagcdn.com/be.svg"
    },
    {
      "country": "Belize",
      "code": "BZ",
      "currency": "bzd",
      "calling_codes": "+501",
      "flag": "https://flagcdn.com/bz.svg"
    },
    {
      "country": "Benin",
      "code": "BJ",
      "currency": "xof",
      "calling_codes": "+229",
      "flag": "https://flagcdn.com/bj.svg"
    },
    {
      "country": "Bermuda",
      "code": "BM",
      "currency": "bmd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/bm.svg"
    },
    {
      "country": "Bhutan",
      "code": "BT",
      "currency": "btn",
      "calling_codes": "+975",
      "flag": "https://flagcdn.com/bt.svg"
    },
    {
      "country": "Bolivia (Plurinational State of)",
      "code": "BO",
      "currency": "bob",
      "calling_codes": "+591",
      "flag": "https://flagcdn.com/bo.svg"
    },
    {
      "country": "Bonaire, Sint Eustatius and Saba",
      "code": "BQ",
      "currency": "usd",
      "calling_codes": "+599",
      "flag": "https://flagcdn.com/bq.svg"
    },
    {
      "country": "Bosnia and Herzegovina",
      "code": "BA",
      "currency": "bam",
      "calling_codes": "+387",
      "flag": "https://flagcdn.com/ba.svg"
    },
    {
      "country": "Botswana",
      "code": "BW",
      "currency": "bwp",
      "calling_codes": "+267",
      "flag": "https://flagcdn.com/bw.svg"
    },
    {
      "country": "Bouvet Island",
      "code": "BV",
      "currency": "nok",
      "calling_codes": "+47",
      "flag": "https://flagcdn.com/bv.svg"
    },
    {
      "country": "Brazil",
      "code": "BR",
      "currency": "brl",
      "calling_codes": "+55",
      "flag": "https://flagcdn.com/br.svg"
    },
    {
      "country": "British Indian Ocean Territory",
      "code": "IO",
      "currency": "usd",
      "calling_codes": "+246",
      "flag": "https://flagcdn.com/io.svg"
    },
    {
      "country": "United States Minor Outlying Islands",
      "code": "UM",
      "currency": "gbp",
      "calling_codes": "+246",
      "flag": "https://flagcdn.com/um.svg"
    },
    {
      "country": "Virgin Islands (British)",
      "code": "VG",
      "currency": "usd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/vg.svg"
    },
    {
      "country": "Virgin Islands (U.S.)",
      "code": "VI",
      "currency": "usd",
      "calling_codes": "+1 340",
      "flag": "https://flagcdn.com/vi.svg"
    },
    {
      "country": "Brunei Darussalam",
      "code": "BN",
      "currency": "bnd",
      "calling_codes": "+673",
      "flag": "https://flagcdn.com/bn.svg"
    },
    {
      "country": "Bulgaria",
      "code": "BG",
      "currency": "bgn",
      "calling_codes": "+359",
      "flag": "https://flagcdn.com/bg.svg"
    },
    {
      "country": "Burkina Faso",
      "code": "BF",
      "currency": "xof",
      "calling_codes": "+226",
      "flag": "https://flagcdn.com/bf.svg"
    },
    {
      "country": "Burundi",
      "code": "BI",
      "currency": "bif",
      "calling_codes": "+257",
      "flag": "https://flagcdn.com/bi.svg"
    },
    {
      "country": "Cambodia",
      "code": "KH",
      "currency": "khr",
      "calling_codes": "+855",
      "flag": "https://flagcdn.com/kh.svg"
    },
    {
      "country": "Cameroon",
      "code": "CM",
      "currency": "xaf",
      "calling_codes": "+237",
      "flag": "https://flagcdn.com/cm.svg"
    },
    {
      "country": "Canada",
      "code": "CA",
      "currency": "cad",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/ca.svg"
    },
    {
      "country": "Cabo Verde",
      "code": "CV",
      "currency": "cve",
      "calling_codes": "+238",
      "flag": "https://flagcdn.com/cv.svg"
    },
    {
      "country": "Cayman Islands",
      "code": "KY",
      "currency": "kyd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/ky.svg"
    },
    {
      "country": "Central African Republic",
      "code": "CF",
      "currency": "xaf",
      "calling_codes": "+236",
      "flag": "https://flagcdn.com/cf.svg"
    },
    {
      "country": "Chad",
      "code": "TD",
      "currency": "xaf",
      "calling_codes": "+235",
      "flag": "https://flagcdn.com/td.svg"
    },
    {
      "country": "Chile",
      "code": "CL",
      "currency": "clp",
      "calling_codes": "+56",
      "flag": "https://flagcdn.com/cl.svg"
    },
    {
      "country": "China",
      "code": "CN",
      "currency": "cny",
      "calling_codes": "+86",
      "flag": "https://flagcdn.com/cn.svg"
    },
    {
      "country": "Christmas Island",
      "code": "CX",
      "currency": "aud",
      "calling_codes": "+61",
      "flag": "https://flagcdn.com/cx.svg"
    },
    {
      "country": "Cocos (Keeling) Islands",
      "code": "CC",
      "currency": "aud",
      "calling_codes": "+61",
      "flag": "https://flagcdn.com/cc.svg"
    },
    {
      "country": "Colombia",
      "code": "CO",
      "currency": "cop",
      "calling_codes": "+57",
      "flag": "https://flagcdn.com/co.svg"
    },
    {
      "country": "Comoros",
      "code": "KM",
      "currency": "kmf",
      "calling_codes": "+269",
      "flag": "https://flagcdn.com/km.svg"
    },
    {
      "country": "Congo",
      "code": "CG",
      "currency": "xaf",
      "calling_codes": "+242",
      "flag": "https://flagcdn.com/cg.svg"
    },
    {
      "country": "Congo (Democratic Republic of the)",
      "code": "CD",
      "currency": "cdf",
      "calling_codes": "+243",
      "flag": "https://flagcdn.com/cd.svg"
    },
    {
      "country": "Cook Islands",
      "code": "CK",
      "currency": "nzd",
      "calling_codes": "+682",
      "flag": "https://flagcdn.com/ck.svg"
    },
    {
      "country": "Costa Rica",
      "code": "CR",
      "currency": "crc",
      "calling_codes": "+506",
      "flag": "https://flagcdn.com/cr.svg"
    },
    {
      "country": "Croatia",
      "code": "HR",
      "currency": "hrk",
      "calling_codes": "+385",
      "flag": "https://flagcdn.com/hr.svg"
    },
    {
      "country": "Cuba",
      "code": "CU",
      "currency": "cuc",
      "calling_codes": "+53",
      "flag": "https://flagcdn.com/cu.svg"
    },
    {
      "country": "Curaçao",
      "code": "CW",
      "currency": "ang",
      "calling_codes": "+599",
      "flag": "https://flagcdn.com/cw.svg"
    },
    {
      "country": "Cyprus",
      "code": "CY",
      "currency": "eur",
      "calling_codes": "+357",
      "flag": "https://flagcdn.com/cy.svg"
    },
    {
      "country": "Czech Republic",
      "code": "CZ",
      "currency": "czk",
      "calling_codes": "+420",
      "flag": "https://flagcdn.com/cz.svg"
    },
    {
      "country": "Denmark",
      "code": "DK",
      "currency": "dkk",
      "calling_codes": "+45",
      "flag": "https://flagcdn.com/dk.svg"
    },
    {
      "country": "Djibouti",
      "code": "DJ",
      "currency": "djf",
      "calling_codes": "+253",
      "flag": "https://flagcdn.com/dj.svg"
    },
    {
      "country": "Dominica",
      "code": "DM",
      "currency": "xcd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/dm.svg"
    },
    {
      "country": "Dominican Republic",
      "code": "DO",
      "currency": "dop",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/do.svg"
    },
    {
      "country": "Ecuador",
      "code": "EC",
      "currency": "usd",
      "calling_codes": "+593",
      "flag": "https://flagcdn.com/ec.svg"
    },
    {
      "country": "Egypt",
      "code": "EG",
      "currency": "egp",
      "calling_codes": "+20",
      "flag": "https://flagcdn.com/eg.svg"
    },
    {
      "country": "El Salvador",
      "code": "SV",
      "currency": "usd",
      "calling_codes": "+503",
      "flag": "https://flagcdn.com/sv.svg"
    },
    {
      "country": "Equatorial Guinea",
      "code": "GQ",
      "currency": "xaf",
      "calling_codes": "+240",
      "flag": "https://flagcdn.com/gq.svg"
    },
    {
      "country": "Eritrea",
      "code": "ER",
      "currency": "ern",
      "calling_codes": "+291",
      "flag": "https://flagcdn.com/er.svg"
    },
    {
      "country": "Estonia",
      "code": "EE",
      "currency": "eur",
      "calling_codes": "+372",
      "flag": "https://flagcdn.com/ee.svg"
    },
    {
      "country": "Ethiopia",
      "code": "ET",
      "currency": "etb",
      "calling_codes": "+251",
      "flag": "https://flagcdn.com/et.svg"
    },
    {
      "country": "Falkland Islands (Malvinas)",
      "code": "FK",
      "currency": "fkp",
      "calling_codes": "+500",
      "flag": "https://flagcdn.com/fk.svg"
    },
    {
      "country": "Faroe Islands",
      "code": "FO",
      "currency": "dkk",
      "calling_codes": "+298",
      "flag": "https://flagcdn.com/fo.svg"
    },
    {
      "country": "Fiji",
      "code": "FJ",
      "currency": "fjd",
      "calling_codes": "+679",
      "flag": "https://flagcdn.com/fj.svg"
    },
    {
      "country": "Finland",
      "code": "FI",
      "currency": "eur",
      "calling_codes": "+358",
      "flag": "https://flagcdn.com/fi.svg"
    },
    {
      "country": "France",
      "code": "FR",
      "currency": "eur",
      "calling_codes": "+33",
      "flag": "https://flagcdn.com/fr.svg"
    },
    {
      "country": "French Guiana",
      "code": "GF",
      "currency": "eur",
      "calling_codes": "+594",
      "flag": "https://flagcdn.com/gf.svg"
    },
    {
      "country": "French Polynesia",
      "code": "PF",
      "currency": "xpf",
      "calling_codes": "+689",
      "flag": "https://flagcdn.com/pf.svg"
    },
    {
      "country": "French Southern Territories",
      "code": "TF",
      "currency": "eur",
      "calling_codes": "+262",
      "flag": "https://flagcdn.com/tf.svg"
    },
    {
      "country": "Gabon",
      "code": "GA",
      "currency": "xaf",
      "calling_codes": "+241",
      "flag": "https://flagcdn.com/ga.svg"
    },
    {
      "country": "Gambia",
      "code": "GM",
      "currency": "gmd",
      "calling_codes": "+220",
      "flag": "https://flagcdn.com/gm.svg"
    },
    {
      "country": "Georgia",
      "code": "GE",
      "currency": "gel",
      "calling_codes": "+995",
      "flag": "https://flagcdn.com/ge.svg"
    },
    {
      "country": "Germany",
      "code": "DE",
      "currency": "eur",
      "calling_codes": "+49",
      "flag": "https://flagcdn.com/de.svg"
    },
    {
      "country": "Ghana",
      "code": "GH",
      "currency": "ghs",
      "calling_codes": "+233",
      "flag": "https://flagcdn.com/gh.svg"
    },
    {
      "country": "Gibraltar",
      "code": "GI",
      "currency": "gip",
      "calling_codes": "+350",
      "flag": "https://flagcdn.com/gi.svg"
    },
    {
      "country": "Greece",
      "code": "GR",
      "currency": "eur",
      "calling_codes": "+30",
      "flag": "https://flagcdn.com/gr.svg"
    },
    {
      "country": "Greenland",
      "code": "GL",
      "currency": "dkk",
      "calling_codes": "+299",
      "flag": "https://flagcdn.com/gl.svg"
    },
    {
      "country": "Grenada",
      "code": "GD",
      "currency": "xcd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/gd.svg"
    },
    {
      "country": "Guadeloupe",
      "code": "GP",
      "currency": "eur",
      "calling_codes": "+590",
      "flag": "https://flagcdn.com/gp.svg"
    },
    {
      "country": "Guam",
      "code": "GU",
      "currency": "usd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/gu.svg"
    },
    {
      "country": "Guatemala",
      "code": "GT",
      "currency": "gtq",
      "calling_codes": "+502",
      "flag": "https://flagcdn.com/gt.svg"
    },
    {
      "country": "Guernsey",
      "code": "GG",
      "currency": "gbp",
      "calling_codes": "+44",
      "flag": "https://flagcdn.com/gg.svg"
    },
    {
      "country": "Guinea",
      "code": "GN",
      "currency": "gnf",
      "calling_codes": "+224",
      "flag": "https://flagcdn.com/gn.svg"
    },
    {
      "country": "Guinea-Bissau",
      "code": "GW",
      "currency": "xof",
      "calling_codes": "+245",
      "flag": "https://flagcdn.com/gw.svg"
    },
    {
      "country": "Guyana",
      "code": "GY",
      "currency": "gyd",
      "calling_codes": "+592",
      "flag": "https://flagcdn.com/gy.svg"
    },
    {
      "country": "Haiti",
      "code": "HT",
      "currency": "htg",
      "calling_codes": "+509",
      "flag": "https://flagcdn.com/ht.svg"
    },
    {
      "country": "Heard Island and McDonald Islands",
      "code": "HM",
      "currency": "aud",
      "calling_codes": "+672",
      "flag": "https://flagcdn.com/hm.svg"
    },
    {
      "country": "Vatican City",
      "code": "VA",
      "currency": "eur",
      "calling_codes": "+379",
      "flag": "https://flagcdn.com/va.svg"
    },
    {
      "country": "Honduras",
      "code": "HN",
      "currency": "hnl",
      "calling_codes": "+504",
      "flag": "https://flagcdn.com/hn.svg"
    },
    {
      "country": "Hungary",
      "code": "HU",
      "currency": "huf",
      "calling_codes": "+36",
      "flag": "https://flagcdn.com/hu.svg"
    },
    {
      "country": "Hong Kong",
      "code": "HK",
      "currency": "hkd",
      "calling_codes": "+852",
      "flag": "https://flagcdn.com/hk.svg"
    },
    {
      "country": "Iceland",
      "code": "IS",
      "currency": "isk",
      "calling_codes": "+354",
      "flag": "https://flagcdn.com/is.svg"
    },
    {
      "country": "India",
      "code": "IN",
      "currency": "inr",
      "calling_codes": "+91",
      "flag": "https://flagcdn.com/in.svg"
    },
    {
      "country": "Indonesia",
      "code": "ID",
      "currency": "idr",
      "calling_codes": "+62",
      "flag": "https://flagcdn.com/id.svg"
    },
    {
      "country": "Ivory Coast",
      "code": "CI",
      "currency": "xof",
      "calling_codes": "+225",
      "flag": "https://flagcdn.com/ci.svg"
    },
    {
      "country": "Iran (Islamic Republic of)",
      "code": "IR",
      "currency": "irr",
      "calling_codes": "+98",
      "flag": "https://flagcdn.com/ir.svg"
    },
    {
      "country": "Iraq",
      "code": "IQ",
      "currency": "iqd",
      "calling_codes": "+964",
      "flag": "https://flagcdn.com/iq.svg"
    },
    {
      "country": "Ireland",
      "code": "IE",
      "currency": "eur",
      "calling_codes": "+353",
      "flag": "https://flagcdn.com/ie.svg"
    },
    {
      "country": "Isle of Man",
      "code": "IM",
      "currency": "gbp",
      "calling_codes": "+44",
      "flag": "https://flagcdn.com/im.svg"
    },
    {
      "country": "Israel",
      "code": "IL",
      "currency": "ils",
      "calling_codes": "+972",
      "flag": "https://flagcdn.com/il.svg"
    },
    {
      "country": "Italy",
      "code": "IT",
      "currency": "eur",
      "calling_codes": "+39",
      "flag": "https://flagcdn.com/it.svg"
    },
    {
      "country": "Jamaica",
      "code": "JM",
      "currency": "jmd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/jm.svg"
    },
    {
      "country": "Japan",
      "code": "JP",
      "currency": "jpy",
      "calling_codes": "+81",
      "flag": "https://flagcdn.com/jp.svg"
    },
    {
      "country": "Jersey",
      "code": "JE",
      "currency": "gbp",
      "calling_codes": "+44",
      "flag": "https://flagcdn.com/je.svg"
    },
    {
      "country": "Jordan",
      "code": "JO",
      "currency": "jod",
      "calling_codes": "+962",
      "flag": "https://flagcdn.com/jo.svg"
    },
    {
      "country": "Kazakhstan",
      "code": "KZ",
      "currency": "kzt",
      "calling_codes": "+76",
      "flag": "https://flagcdn.com/kz.svg"
    },
    {
      "country": "Kenya",
      "code": "KE",
      "currency": "kes",
      "calling_codes": "+254",
      "flag": "https://flagcdn.com/ke.svg"
    },
    {
      "country": "Kiribati",
      "code": "KI",
      "currency": "aud",
      "calling_codes": "+686",
      "flag": "https://flagcdn.com/ki.svg"
    },
    {
      "country": "Kuwait",
      "code": "KW",
      "currency": "kwd",
      "calling_codes": "+965",
      "flag": "https://flagcdn.com/kw.svg"
    },
    {
      "country": "Kyrgyzstan",
      "code": "KG",
      "currency": "kgs",
      "calling_codes": "+996",
      "flag": "https://flagcdn.com/kg.svg"
    },
    {
      "country": "Lao People's Democratic Republic",
      "code": "LA",
      "currency": "lak",
      "calling_codes": "+856",
      "flag": "https://flagcdn.com/la.svg"
    },
    {
      "country": "Latvia",
      "code": "LV",
      "currency": "eur",
      "calling_codes": "+371",
      "flag": "https://flagcdn.com/lv.svg"
    },
    {
      "country": "Lebanon",
      "code": "LB",
      "currency": "lbp",
      "calling_codes": "+961",
      "flag": "https://flagcdn.com/lb.svg"
    },
    {
      "country": "Lesotho",
      "code": "LS",
      "currency": "lsl",
      "calling_codes": "+266",
      "flag": "https://flagcdn.com/ls.svg"
    },
    {
      "country": "Liberia",
      "code": "LR",
      "currency": "lrd",
      "calling_codes": "+231",
      "flag": "https://flagcdn.com/lr.svg"
    },
    {
      "country": "Libya",
      "code": "LY",
      "currency": "lyd",
      "calling_codes": "+218",
      "flag": "https://flagcdn.com/ly.svg"
    },
    {
      "country": "Liechtenstein",
      "code": "LI",
      "currency": "chf",
      "calling_codes": "+423",
      "flag": "https://flagcdn.com/li.svg"
    },
    {
      "country": "Lithuania",
      "code": "LT",
      "currency": "eur",
      "calling_codes": "+370",
      "flag": "https://flagcdn.com/lt.svg"
    },
    {
      "country": "Luxembourg",
      "code": "LU",
      "currency": "eur",
      "calling_codes": "+352",
      "flag": "https://flagcdn.com/lu.svg"
    },
    {
      "country": "Macao",
      "code": "MO",
      "currency": "mop",
      "calling_codes": "+853",
      "flag": "https://flagcdn.com/mo.svg"
    },
    {
      "country": "North Macedonia",
      "code": "MK",
      "currency": "mkd",
      "calling_codes": "+389",
      "flag": "https://flagcdn.com/mk.svg"
    },
    {
      "country": "Madagascar",
      "code": "MG",
      "currency": "mga",
      "calling_codes": "+261",
      "flag": "https://flagcdn.com/mg.svg"
    },
    {
      "country": "Malawi",
      "code": "MW",
      "currency": "mwk",
      "calling_codes": "+265",
      "flag": "https://flagcdn.com/mw.svg"
    },
    {
      "country": "Malaysia",
      "code": "MY",
      "currency": "myr",
      "calling_codes": "+60",
      "flag": "https://flagcdn.com/my.svg"
    },
    {
      "country": "Maldives",
      "code": "MV",
      "currency": "mvr",
      "calling_codes": "+960",
      "flag": "https://flagcdn.com/mv.svg"
    },
    {
      "country": "Mali",
      "code": "ML",
      "currency": "xof",
      "calling_codes": "+223",
      "flag": "https://flagcdn.com/ml.svg"
    },
    {
      "country": "Malta",
      "code": "MT",
      "currency": "eur",
      "calling_codes": "+356",
      "flag": "https://flagcdn.com/mt.svg"
    },
    {
      "country": "Marshall Islands",
      "code": "MH",
      "currency": "usd",
      "calling_codes": "+692",
      "flag": "https://flagcdn.com/mh.svg"
    },
    {
      "country": "Martinique",
      "code": "MQ",
      "currency": "eur",
      "calling_codes": "+596",
      "flag": "https://flagcdn.com/mq.svg"
    },
    {
      "country": "Mauritania",
      "code": "MR",
      "currency": "mro",
      "calling_codes": "+222",
      "flag": "https://flagcdn.com/mr.svg"
    },
    {
      "country": "Mauritius",
      "code": "MU",
      "currency": "mur",
      "calling_codes": "+230",
      "flag": "https://flagcdn.com/mu.svg"
    },
    {
      "country": "Mayotte",
      "code": "YT",
      "currency": "eur",
      "calling_codes": "+262",
      "flag": "https://flagcdn.com/yt.svg"
    },
    {
      "country": "Mexico",
      "code": "MX",
      "currency": "mxn",
      "calling_codes": "+52",
      "flag": "https://flagcdn.com/mx.svg"
    },
    {
      "country": "Micronesia (Federated States of)",
      "code": "FM",
      "currency": "usd",
      "calling_codes": "+691",
      "flag": "https://flagcdn.com/fm.svg"
    },
    {
      "country": "Moldova (Republic of)",
      "code": "MD",
      "currency": "mdl",
      "calling_codes": "+373",
      "flag": "https://flagcdn.com/md.svg"
    },
    {
      "country": "Monaco",
      "code": "MC",
      "currency": "eur",
      "calling_codes": "+377",
      "flag": "https://flagcdn.com/mc.svg"
    },
    {
      "country": "Mongolia",
      "code": "MN",
      "currency": "mnt",
      "calling_codes": "+976",
      "flag": "https://flagcdn.com/mn.svg"
    },
    {
      "country": "Montenegro",
      "code": "ME",
      "currency": "eur",
      "calling_codes": "+382",
      "flag": "https://flagcdn.com/me.svg"
    },
    {
      "country": "Montserrat",
      "code": "MS",
      "currency": "xcd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/ms.svg"
    },
    {
      "country": "Morocco",
      "code": "MA",
      "currency": "mad",
      "calling_codes": "+212",
      "flag": "https://flagcdn.com/ma.svg"
    },
    {
      "country": "Mozambique",
      "code": "MZ",
      "currency": "mzn",
      "calling_codes": "+258",
      "flag": "https://flagcdn.com/mz.svg"
    },
    {
      "country": "Myanmar",
      "code": "MM",
      "currency": "mmk",
      "calling_codes": "+95",
      "flag": "https://flagcdn.com/mm.svg"
    },
    {
      "country": "Namibia",
      "code": "NA",
      "currency": "nad",
      "calling_codes": "+264",
      "flag": "https://flagcdn.com/na.svg"
    },
    {
      "country": "Nauru",
      "code": "NR",
      "currency": "aud",
      "calling_codes": "+674",
      "flag": "https://flagcdn.com/nr.svg"
    },
    {
      "country": "Nepal",
      "code": "NP",
      "currency": "npr",
      "calling_codes": "+977",
      "flag": "https://flagcdn.com/np.svg"
    },
    {
      "country": "Netherlands",
      "code": "NL",
      "currency": "eur",
      "calling_codes": "+31",
      "flag": "https://flagcdn.com/nl.svg"
    },
    {
      "country": "New Caledonia",
      "code": "NC",
      "currency": "xpf",
      "calling_codes": "+687",
      "flag": "https://flagcdn.com/nc.svg"
    },
    {
      "country": "New Zealand",
      "code": "NZ",
      "currency": "nzd",
      "calling_codes": "+64",
      "flag": "https://flagcdn.com/nz.svg"
    },
    {
      "country": "Nicaragua",
      "code": "NI",
      "currency": "nio",
      "calling_codes": "+505",
      "flag": "https://flagcdn.com/ni.svg"
    },
    {
      "country": "Niger",
      "code": "NE",
      "currency": "xof",
      "calling_codes": "+227",
      "flag": "https://flagcdn.com/ne.svg"
    },
    {
      "country": "Nigeria",
      "code": "NG",
      "currency": "ngn",
      "calling_codes": "+234",
      "flag": "https://flagcdn.com/ng.svg"
    },
    {
      "country": "Niue",
      "code": "NU",
      "currency": "nzd",
      "calling_codes": "+683",
      "flag": "https://flagcdn.com/nu.svg"
    },
    {
      "country": "Norfolk Island",
      "code": "NF",
      "currency": "aud",
      "calling_codes": "+672",
      "flag": "https://flagcdn.com/nf.svg"
    },
    {
      "country": "Korea (Democratic People's Republic of)",
      "code": "KP",
      "currency": "kpw",
      "calling_codes": "+850",
      "flag": "https://flagcdn.com/kp.svg"
    },
    {
      "country": "Northern Mariana Islands",
      "code": "MP",
      "currency": "usd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/mp.svg"
    },
    {
      "country": "Norway",
      "code": "NO",
      "currency": "nok",
      "calling_codes": "+47",
      "flag": "https://flagcdn.com/no.svg"
    },
    {
      "country": "Oman",
      "code": "OM",
      "currency": "omr",
      "calling_codes": "+968",
      "flag": "https://flagcdn.com/om.svg"
    },
    {
      "country": "Pakistan",
      "code": "PK",
      "currency": "pkr",
      "calling_codes": "+92",
      "flag": "https://flagcdn.com/pk.svg"
    },
    {
      "country": "Palau",
      "code": "PW",
      "currency": "usd",
      "calling_codes": "+680",
      "flag": "https://flagcdn.com/pw.svg"
    },
    {
      "country": "Palestine, State of",
      "code": "PS",
      "currency": "egp",
      "calling_codes": "+970",
      "flag": "https://flagcdn.com/ps.svg"
    },
    {
      "country": "Panama",
      "code": "PA",
      "currency": "pab",
      "calling_codes": "+507",
      "flag": "https://flagcdn.com/pa.svg"
    },
    {
      "country": "Papua New Guinea",
      "code": "PG",
      "currency": "pgk",
      "calling_codes": "+675",
      "flag": "https://flagcdn.com/pg.svg"
    },
    {
      "country": "Paraguay",
      "code": "PY",
      "currency": "pyg",
      "calling_codes": "+595",
      "flag": "https://flagcdn.com/py.svg"
    },
    {
      "country": "Peru",
      "code": "PE",
      "currency": "pen",
      "calling_codes": "+51",
      "flag": "https://flagcdn.com/pe.svg"
    },
    {
      "country": "Philippines",
      "code": "PH",
      "currency": "php",
      "calling_codes": "+63",
      "flag": "https://flagcdn.com/ph.svg"
    },
    {
      "country": "Pitcairn",
      "code": "PN",
      "currency": "nzd",
      "calling_codes": "+64",
      "flag": "https://flagcdn.com/pn.svg"
    },
    {
      "country": "Poland",
      "code": "PL",
      "currency": "pln",
      "calling_codes": "+48",
      "flag": "https://flagcdn.com/pl.svg"
    },
    {
      "country": "Portugal",
      "code": "PT",
      "currency": "eur",
      "calling_codes": "+351",
      "flag": "https://flagcdn.com/pt.svg"
    },
    {
      "country": "Puerto Rico",
      "code": "PR",
      "currency": "usd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/pr.svg"
    },
    {
      "country": "Qatar",
      "code": "QA",
      "currency": "qar",
      "calling_codes": "+974",
      "flag": "https://flagcdn.com/qa.svg"
    },
    {
      "country": "Republic of Kosovo",
      "code": "XK",
      "currency": "eur",
      "calling_codes": "+383",
      "flag": "https://flagcdn.com/xk.svg"
    },
    {
      "country": "Réunion",
      "code": "RE",
      "currency": "eur",
      "calling_codes": "+262",
      "flag": "https://flagcdn.com/re.svg"
    },
    {
      "country": "Romania",
      "code": "RO",
      "currency": "ron",
      "calling_codes": "+40",
      "flag": "https://flagcdn.com/ro.svg"
    },
    {
      "country": "Russian Federation",
      "code": "RU",
      "currency": "rub",
      "calling_codes": "+7",
      "flag": "https://flagcdn.com/ru.svg"
    },
    {
      "country": "Rwanda",
      "code": "RW",
      "currency": "rwf",
      "calling_codes": "+250",
      "flag": "https://flagcdn.com/rw.svg"
    },
    {
      "country": "Saint Barthélemy",
      "code": "BL",
      "currency": "eur",
      "calling_codes": "+590",
      "flag": "https://flagcdn.com/bl.svg"
    },
    {
      "country": "Saint Helena, Ascension and Tristan da Cunha",
      "code": "SH",
      "currency": "shp",
      "calling_codes": "+290",
      "flag": "https://flagcdn.com/sh.svg"
    },
    {
      "country": "Saint Kitts and Nevis",
      "code": "KN",
      "currency": "xcd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/kn.svg"
    },
    {
      "country": "Saint Lucia",
      "code": "LC",
      "currency": "xcd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/lc.svg"
    },
    {
      "country": "Saint Martin (French part)",
      "code": "MF",
      "currency": "eur",
      "calling_codes": "+590",
      "flag": "https://flagcdn.com/mf.svg"
    },
    {
      "country": "Saint Pierre and Miquelon",
      "code": "PM",
      "currency": "eur",
      "calling_codes": "+508",
      "flag": "https://flagcdn.com/pm.svg"
    },
    {
      "country": "Saint Vincent and the Grenadines",
      "code": "VC",
      "currency": "xcd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/vc.svg"
    },
    {
      "country": "Samoa",
      "code": "WS",
      "currency": "wst",
      "calling_codes": "+685",
      "flag": "https://flagcdn.com/ws.svg"
    },
    {
      "country": "San Marino",
      "code": "SM",
      "currency": "eur",
      "calling_codes": "+378",
      "flag": "https://flagcdn.com/sm.svg"
    },
    {
      "country": "Sao Tome and Principe",
      "code": "ST",
      "currency": "std",
      "calling_codes": "+239",
      "flag": "https://flagcdn.com/st.svg"
    },
    {
      "country": "Saudi Arabia",
      "code": "SA",
      "currency": "sar",
      "calling_codes": "+966",
      "flag": "https://flagcdn.com/sa.svg"
    },
    {
      "country": "Senegal",
      "code": "SN",
      "currency": "xof",
      "calling_codes": "+221",
      "flag": "https://flagcdn.com/sn.svg"
    },
    {
      "country": "Serbia",
      "code": "RS",
      "currency": "rsd",
      "calling_codes": "+381",
      "flag": "https://flagcdn.com/rs.svg"
    },
    {
      "country": "Seychelles",
      "code": "SC",
      "currency": "scr",
      "calling_codes": "+248",
      "flag": "https://flagcdn.com/sc.svg"
    },
    {
      "country": "Sierra Leone",
      "code": "SL",
      "currency": "sll",
      "calling_codes": "+232",
      "flag": "https://flagcdn.com/sl.svg"
    },
    {
      "country": "Singapore",
      "code": "SG",
      "currency": "sgd",
      "calling_codes": "+65",
      "flag": "https://flagcdn.com/sg.svg"
    },
    {
      "country": "Sint Maarten (Dutch part)",
      "code": "SX",
      "currency": "ang",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/sx.svg"
    },
    {
      "country": "Slovakia",
      "code": "SK",
      "currency": "eur",
      "calling_codes": "+421",
      "flag": "https://flagcdn.com/sk.svg"
    },
    {
      "country": "Slovenia",
      "code": "SI",
      "currency": "eur",
      "calling_codes": "+386",
      "flag": "https://flagcdn.com/si.svg"
    },
    {
      "country": "Solomon Islands",
      "code": "SB",
      "currency": "sbd",
      "calling_codes": "+677",
      "flag": "https://flagcdn.com/sb.svg"
    },
    {
      "country": "Somalia",
      "code": "SO",
      "currency": "sos",
      "calling_codes": "+252",
      "flag": "https://flagcdn.com/so.svg"
    },
    {
      "country": "South Africa",
      "code": "ZA",
      "currency": "zar",
      "calling_codes": "+27",
      "flag": "https://flagcdn.com/za.svg"
    },
    {
      "country": "South Georgia and the South Sandwich Islands",
      "code": "GS",
      "currency": "fkp",
      "calling_codes": "+500",
      "flag": "https://flagcdn.com/gs.svg"
    },
    {
      "country": "Korea (Republic of)",
      "code": "KR",
      "currency": "krw",
      "calling_codes": "+82",
      "flag": "https://flagcdn.com/kr.svg"
    },
    {
      "country": "Spain",
      "code": "ES",
      "currency": "eur",
      "calling_codes": "+34",
      "flag": "https://flagcdn.com/es.svg"
    },
    {
      "country": "Sri Lanka",
      "code": "LK",
      "currency": "lkr",
      "calling_codes": "+94",
      "flag": "https://flagcdn.com/lk.svg"
    },
    {
      "country": "Sudan",
      "code": "SD",
      "currency": "sdg",
      "calling_codes": "+249",
      "flag": "https://flagcdn.com/sd.svg"
    },
    {
      "country": "South Sudan",
      "code": "SS",
      "currency": "ssp",
      "calling_codes": "+211",
      "flag": "https://flagcdn.com/ss.svg"
    },
    {
      "country": "Suriname",
      "code": "SR",
      "currency": "srd",
      "calling_codes": "+597",
      "flag": "https://flagcdn.com/sr.svg"
    },
    {
      "country": "Svalbard and Jan Mayen",
      "code": "SJ",
      "currency": "nok",
      "calling_codes": "+47",
      "flag": "https://flagcdn.com/sj.svg"
    },
    {
      "country": "Swaziland",
      "code": "SZ",
      "currency": "szl",
      "calling_codes": "+268",
      "flag": "https://flagcdn.com/sz.svg"
    },
    {
      "country": "Sweden",
      "code": "SE",
      "currency": "sek",
      "calling_codes": "+46",
      "flag": "https://flagcdn.com/se.svg"
    },
    {
      "country": "Switzerland",
      "code": "CH",
      "currency": "chf",
      "calling_codes": "+41",
      "flag": "https://flagcdn.com/ch.svg"
    },
    {
      "country": "Syrian Arab Republic",
      "code": "SY",
      "currency": "syp",
      "calling_codes": "+963",
      "flag": "https://flagcdn.com/sy.svg"
    },
    {
      "country": "Taiwan",
      "code": "TW",
      "currency": "twd",
      "calling_codes": "+886",
      "flag": "https://flagcdn.com/tw.svg"
    },
    {
      "country": "Tajikistan",
      "code": "TJ",
      "currency": "tjs",
      "calling_codes": "+992",
      "flag": "https://flagcdn.com/tj.svg"
    },
    {
      "country": "Tanzania, United Republic of",
      "code": "TZ",
      "currency": "tzs",
      "calling_codes": "+255",
      "flag": "https://flagcdn.com/tz.svg"
    },
    {
      "country": "Thailand",
      "code": "TH",
      "currency": "thb",
      "calling_codes": "+66",
      "flag": "https://flagcdn.com/th.svg"
    },
    {
      "country": "Timor-Leste",
      "code": "TL",
      "currency": "usd",
      "calling_codes": "+670",
      "flag": "https://flagcdn.com/tl.svg"
    },
    {
      "country": "Togo",
      "code": "TG",
      "currency": "xof",
      "calling_codes": "+228",
      "flag": "https://flagcdn.com/tg.svg"
    },
    {
      "country": "Tokelau",
      "code": "TK",
      "currency": "nzd",
      "calling_codes": "+690",
      "flag": "https://flagcdn.com/tk.svg"
    },
    {
      "country": "Tonga",
      "code": "TO",
      "currency": "top",
      "calling_codes": "+676",
      "flag": "https://flagcdn.com/to.svg"
    },
    {
      "country": "Trinidad and Tobago",
      "code": "TT",
      "currency": "ttd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/tt.svg"
    },
    {
      "country": "Tunisia",
      "code": "TN",
      "currency": "tnd",
      "calling_codes": "+216",
      "flag": "https://flagcdn.com/tn.svg"
    },
    {
      "country": "Turkey",
      "code": "TR",
      "currency": "try",
      "calling_codes": "+90",
      "flag": "https://flagcdn.com/tr.svg"
    },
    {
      "country": "Turkmenistan",
      "code": "TM",
      "currency": "tmt",
      "calling_codes": "+993",
      "flag": "https://flagcdn.com/tm.svg"
    },
    {
      "country": "Turks and Caicos Islands",
      "code": "TC",
      "currency": "usd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/tc.svg"
    },
    {
      "country": "Tuvalu",
      "code": "TV",
      "currency": "aud",
      "calling_codes": "+688",
      "flag": "https://flagcdn.com/tv.svg"
    },
    {
      "country": "Uganda",
      "code": "UG",
      "currency": "ugx",
      "calling_codes": "+256",
      "flag": "https://flagcdn.com/ug.svg"
    },
    {
      "country": "Ukraine",
      "code": "UA",
      "currency": "uah",
      "calling_codes": "+380",
      "flag": "https://flagcdn.com/ua.svg"
    },
    {
      "country": "United Arab Emirates",
      "code": "AE",
      "currency": "aed",
      "calling_codes": "+971",
      "flag": "https://flagcdn.com/ae.svg"
    },
    {
      "country": "United Kingdom of Great Britain and Northern Ireland",
      "code": "GB",
      "currency": "gbp",
      "calling_codes": "+44",
      "flag": "https://flagcdn.com/gb.svg"
    },
    {
      "country": "United States of America",
      "code": "US",
      "currency": "usd",
      "calling_codes": "+1",
      "flag": "https://flagcdn.com/us.svg"
    },
    {
      "country": "Uruguay",
      "code": "UY",
      "currency": "uyu",
      "calling_codes": "+598",
      "flag": "https://flagcdn.com/uy.svg"
    },
    {
      "country": "Uzbekistan",
      "code": "UZ",
      "currency": "uzs",
      "calling_codes": "+998",
      "flag": "https://flagcdn.com/uz.svg"
    },
    {
      "country": "Vanuatu",
      "code": "VU",
      "currency": "vuv",
      "calling_codes": "+678",
      "flag": "https://flagcdn.com/vu.svg"
    },
    {
      "country": "Venezuela (Bolivarian Republic of)",
      "code": "VE",
      "currency": "vef",
      "calling_codes": "+58",
      "flag": "https://flagcdn.com/ve.svg"
    },
    {
      "country": "Vietnam",
      "code": "VN",
      "currency": "vnd",
      "calling_codes": "+84",
      "flag": "https://flagcdn.com/vn.svg"
    },
    {
      "country": "Wallis and Futuna",
      "code": "WF",
      "currency": "xpf",
      "calling_codes": "+681",
      "flag": "https://flagcdn.com/wf.svg"
    },
    {
      "country": "Western Sahara",
      "code": "EH",
      "currency": "mad",
      "calling_codes": "+212",
      "flag": "https://flagcdn.com/eh.svg"
    },
    {
      "country": "Yemen",
      "code": "YE",
      "currency": "yer",
      "calling_codes": "+967",
      "flag": "https://flagcdn.com/ye.svg"
    },
    {
      "country": "Zambia",
      "code": "ZM",
      "currency": "zmw",
      "calling_codes": "+260",
      "flag": "https://flagcdn.com/zm.svg"
    },
    {
      "country": "Zimbabwe",
      "code": "ZW",
      "currency": "zmw",
      "calling_codes": "+263",
      "flag": "https://flagcdn.com/zw.svg"
    }
  ]
}