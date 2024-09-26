// [JS][6kyu] Salesman's Travel
// salesman-s-travel
// https://www.codewars.com/kata/56af1a20509ce5b9b000001e/train/javascript

const travel = (r, zipcode) => {
  const codeMap = new Map()
  r.split(',').map((item) => {
    const code = item.substring(item.length - 8)
    const beforeCode = item.substring(0, item.length - 8).trim()
    const street = beforeCode.split(' ')[0]
    const address = beforeCode.split(' ').slice(1).join(' ')
    if (codeMap.has(code)) {
      codeMap.get(code).push({ street, address })
    } else {
      codeMap.set(code, [{ street, address }])
    }
  })
  const data = codeMap.get(zipcode)

  if (!data) {
    return `${zipcode}:/`
  }

  return `${zipcode}:${data.map((item) => item.address).join(',')}/${data.map((item) => item.street).join(',')}`
}

const ad =
  '123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,' +
  '54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,' +
  '10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,' +
  '22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,' +
  '45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,' +
  '100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,' +
  '2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,' +
  '45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,' +
  '100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,' +
  '2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,' +
  '2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,' +
  '2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000'

const code =
  'OH 43071,NY 56432,ZP 32908,AE 56210,RE 13000,EX 34342,SW 43098,AA 45521,GG 30654,ZP 32908,AE 56215,RE 13200,EX 34345,' +
  'RE 13222,RE 13001,SW 43198,AA 45522,GG 30655,XX 32321,YY 45098'

function testing(actual, expected) {
  assert.strictEqual(actual, expected)
}

travel(ad, 'OH 43071')
travel(ad, 'AA 45522')
travel(ad, 'AA 45522') === 'AA 45522:Paris St. Abbeville,Paris St. Abbeville/67,670'
travel(ad, 'EX 34342') === 'EX 34342:Pussy Cat Rd. Chicago,Pussy Cat Rd. Chicago/10,100'
travel(ad, 'EX 34345') === 'EX 34345:Pussy Cat Rd. Chicago/100'
travel(ad, 'AA 45521') === 'AA 45521:Paris bd. Abbeville,Paris St. Abbeville/674,67'
travel(ad, 'AE 56215') === 'AE 56215:Main Al. Bern/320'
travel(ad, '') === ':/'
travel(ad, 'YY 45098') === 'YY 45098:/'
