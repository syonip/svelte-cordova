import { expect } from 'chai';
const ipLogic = require('../services/ip-logic.js')

describe('IP Logic', () => {
  it('should get correct IP 1', () => {
    const networkInterfaces = {
      WiFi:
        [{
          address: 'fe80::1419:81ae:c965:6368',
          netmask: 'ffff:ffff:ffff:ffff::',
          family: 'IPv6',
          internal: false,
          scopeid: 14
        },
        {
          address: '10.0.0.3',
          netmask: '255.255.255.0',
          family: 'IPv4',
          internal: false,
        }],
      'VMware Network Adapter VMnet1':
        [{
          address: 'fe80::9c59:e872:43b5:e4b7',
          netmask: 'ffff:ffff:ffff:ffff::',
          family: 'IPv6',
          internal: false,
          scopeid: 5
        },
        {
          address: '192.168.191.1',
          netmask: '255.255.255.0',
          family: 'IPv4',
          internal: false,
        }],
      'VMware Network Adapter VMnet8':
        [{
          address: 'fe80::6545:6d96:c32a:dda8',
          netmask: 'ffff:ffff:ffff:ffff::',
          family: 'IPv6',
          internal: false,
          scopeid: 10
        },
        {
          address: '192.168.189.1',
          netmask: '255.255.255.0',
          family: 'IPv4',
          internal: false,
        }],
      'Loopback Pseudo-Interface 1':
        [{
          address: '::1',
          netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
          family: 'IPv6',
          internal: true,
          scopeid: 0
        },
        {
          address: '127.0.0.1',
          netmask: '255.0.0.0',
          family: 'IPv4',
          internal: true,
        }]
    }
    const ip = ipLogic.getIP(networkInterfaces);

    expect(ip).to.eql('10.0.0.3');
  });

  it('should get correct IP 2', () => {
    const networkInterfaces = [
      [
        {
          address: '************************',
          netmask: 'ffff:ffff:ffff:ffff::',
          family: 'IPv6',
          mac: '************************',
          internal: false,
          cidr: '************************',
          scopeid: 8
        }
      ],
      [
        {
          address: '************************',
          netmask: 'ffff:ffff:ffff:ffff::',
          family: 'IPv6',
          mac: '************************',
          internal: false,
          cidr: '************************',
          scopeid: 10
        },
        {
          address: '192.168.1.15',
          netmask: '255.255.255.0',
          family: 'IPv4',
          mac: '************************',
          internal: false,
          cidr: '192.168.1.15/24'
        }
      ],
      [
        {
          address: '************************',
          netmask: 'ffff:ffff:ffff:ffff::',
          family: 'IPv6',
          mac: '************************',
          internal: false,
          cidr: '************************',
          scopeid: 12
        }
      ],
      [
        {
          address: '************************',
          netmask: 'ffff:ffff:ffff:ffff::',
          family: 'IPv6',
          mac: '00:00:00:00:00:00',
          internal: false,
          cidr: '************************',
          scopeid: 18
        }
      ]
    ]
    const ip = ipLogic.getIP(networkInterfaces);

    expect(ip).to.eql('192.168.1.15');
  });
});