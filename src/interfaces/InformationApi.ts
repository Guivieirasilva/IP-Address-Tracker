export interface TypeInformation {
  as: { asn: number; domain: string; name: string; route: string; type: string }
  ip: string
  isp: string
  location: { country: string; region: string; timezone: string }
}
