import _ from 'lodash'

export const links = [
  {
    section: 6,
    links: [
      [
        ['Encuesta Anual de Comercio -EAC', 'http://www.dane.gov.co/index.php/estadisticas-por-tema/comercio-interno/encuesta-anual-de-comercio-eac'],
        ['Encuesta Anual Manufacturera -EAM-', 'http://www.dane.gov.co/index.php/estadisticas-por-tema/industria/encuesta-anual-manufacturera-enam'],
        ['Encuesta Anual de Servicios -EAS-', 'http://www.dane.gov.co/index.php/estadisticas-por-tema/servicios/encuesta-anual-de-servicios-eas'],
        ['Encuesta Microestablecimientos', 'http://www.dane.gov.co/index.php/estadisticas-por-tema/industria/microestablecimientos']
      ],
      [
        ['Gran Encuesta TIC', 'https://www.datos.gov.co/Ciencia-Tecnolog-a-e-Innovaci-n/EMPRESAS-ENCUESTA-TIC-2017/vgv5-wvxj']
      ]
    ]
  },
  {
    section: 7,
    links: [
      [
        ['OECD.Measuring the Digital Economy: a new perspective, December 8, 2014', 'OECD Manual Measuring the Digital Economy.pdf'],
        ['BEA – US Department of Commerce.Measuring the Digital Economy, November 18, 2016', 'Measuring the Digital Economy US department of Commerce.pdf'],
        ['OECD Measuring GDP in a Digitalised Economy, November 17, 2016', 'Durand1.pdf'],
        ['Barbet and Coutinet.Measuring the digital economy: state-of-the-art Developments and Future Prospects, Second Quarter, 2001', 'Barbet and Coutinet.pdf'],
        ['Mesenbourg. Measuring the digital economy, March 30, 2001', '']
      ],
      [
        ['Katz, R.El ecosistema y la economía digital en América Latina, CAF, CEPAL, Asiet y Fundación Telefónica. 2015.', 'ecosistema-economia-version-definitiva-impresa-con-anexos-23-07-15.pdf'],
        ['Katz, R.Industrialización inclusive y sostenible en América Latina, CEPAL, 2017.', 'Industrializacion inclusiva entregable final, v. final.pdf'],
        ['CAF. Hacia la transformación digital de América Latina y el Caribe; El Observatorio CAF del Ecosistema Digital, 2017.', 'ajustesObservatorioTIC170717-CAF_10-07_VFINAL_.pdf']
      ]
    ]
  }
]

export const sectionLinks = (sectionId) => {
  let sectionLinks = _.find(links, {'section': sectionId})
  if (sectionLinks) {
    return sectionLinks.links
  } else {
    return []
  }
}

