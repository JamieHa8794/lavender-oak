const { faker } = require('@faker-js/faker')

const arr = new Array(20).fill();


const bedImgs = [
'https://www.ikea.com/us/en/images/products/malm-bed-frame-high-black-brown-luroey__0638608_pe699032_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/malm-bed-frame-high-gray-stained-luroey__0775049_pe756805_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/malm-bed-frame-high-white-luroey__0749130_pe745499_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/malm-bed-frame-high-white-stained-oak-veneer-luroey__0637598_pe698416_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/kleppstad-bed-frame-white-vissle-beige__1035340_pe840527_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/nordli-bed-with-headboard-and-storage-white__0749134_pe745503_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/nordli-bed-with-headboard-and-storage-anthracite__0749133_pe745502_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/slattum-upholstered-bed-frame-knisa-light-gray__0768244_pe754388_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/hemnes-bed-frame-white-stain-luroey__0637516_pe698353_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/hemnes-bed-frame-black-brown-luroey__0637551_pe704560_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/tarva-bed-frame-pine-luroey__0637611_pe698421_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/brimnes-bed-frame-with-storage-black-luroey__1151031_pe884735_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/brimnes-bed-frame-with-storage-gray-luroey__0817188_pe773895_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/brimnes-bed-frame-with-storage-white-luroey__1151024_pe884762_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/idanaes-upholstered-bed-frame-gunnared-dark-gray__0953726_pe802891_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/idanaes-upholstered-bed-frame-gunnared-pale-pink__0953727_pe802887_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/tufjord-upholstered-bed-frame-gunnared-blue__0859775_pe781090_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/tufjord-upholstered-bed-frame-djuparp-dark-green__0859747_pe781084_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/hauga-upholstered-bed-frame-vissle-gray__0789232_pe764315_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/hauga-upholstered-bed-frame-lofallet-beige__0848954_pe781056_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/idanaes-bed-frame-white-luroey__0916067_pe784943_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/idanaes-bed-frame-dark-brown-luroey__0916068_pe784944_s5.jpg?f=xl']

const beds = bedImgs.map(img=>{
  return({
    "img": img,
    "name": faker.lorem.word().toUpperCase(),
    "category": "Bed",
    "room": "Bed Room",
    "color": faker.color.human(),
    "price": Math.ceil((Math.random()*300))+100,
    "sellable_online": Math.round(Math.random()),
    "short_description": faker.lorem.paragraphs(1),
    "designer": faker.name.fullName(),
    "height": Math.ceil(Math.random()),
    "width": Math.ceil(Math.random()),
    "depth": Math.ceil(Math.random()),
  })
})


const sofaImgs = [
  "https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-skiftebo-blue__0690243_pe723167_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-hyllie-dark-gray__0690261_pe723182_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-hyllie-beige__0690253_pe723174_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/friheten-sleeper-sectional-3-seat-w-storage-bomstad-black__0248337_pe386785_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/glostad-loveseat-knisa-dark-gray__0950864_pe800736_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/glostad-loveseat-knisa-medium-blue__0950900_pe800740_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/linanaes-sofa-vissle-dark-gray__1013898_pe829450_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/linanaes-sofa-vissle-beige__1013894_pe829446_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-hillared-anthracite__0479956_pe619108_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-hillared-beige__0479986_pe618880_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-kelinge-gray-turquoise__1055847_pe848125_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/kivik-sofa-with-chaise-tibbleby-beige-gray__1056147_pe848280_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/linanaes-sofa-with-chaise-vissle-dark-gray__1013908_pe829460_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/linanaes-sofa-with-chaise-vissle-beige__1013903_pe829455_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/finnala-sofa-gunnared-beige__0514366_pe639439_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/finnala-sofa-dalstorp-multicolor__0725527_pe734920_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/finnala-sofa-gunnared-medium-gray__0514368_pe639441_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/finnala-sofa-orrsta-black-blue__0514486_pe639504_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/finnala-sofa-tallmyra-beige__0570251_pe666203_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/finnala-sofa-tallmyra-black-gray__0570232_pe666195_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/soederhamn-sofa-section-fridtuna-dark-gray__1057701_pe848915_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/soederhamn-sofa-section-fridtuna-light-beige__1057705_pe848919_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/soederhamn-sofa-section-gransel-natural__1057493_pe848854_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/soederhamn-sofa-section-tonerud-gray__1057813_pe848995_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/soederhamn-sofa-section-viarp-beige-brown__0802813_pe768605_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/paerup-sectional-4-seat-corner-gunnared-beige__0950123_pe800145_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/paerup-sectional-4-seat-corner-gunnared-dark-gray__0950126_pe800148_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/paerup-sectional-4-seat-corner-vissle-dark-green__0950129_pe800151_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/paerup-sectional-4-seat-corner-vissle-gray__0982931_pe815817_s5.jpg?f=xl"
  ]

const sofas = sofaImgs.map(img=>{
  return({
    "img": img,
    "name": faker.lorem.word().toUpperCase(),
    "category": "Sofa",
    "room": "Living Room",
    "color": faker.color.human(),
    "price": Math.ceil((Math.random()*300))+100,
    "sellable_online": Math.round(Math.random()),
    "short_description": faker.lorem.paragraphs(1),
    "designer": faker.name.fullName(),
    "height": Math.ceil(Math.random()),
    "width": Math.ceil(Math.random()),
    "depth": Math.ceil(Math.random()),
  })
})


  const tvStandImgs = [
    "https://www.ikea.com/us/en/images/products/besta-tv-unit-with-doors-white-lappviken-white__0719188_pe731908_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-black-brown-bjoerkoeviken-brown-stained-oak-veneer__0993133_pe820433_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-black-brown-hedeviken-dark-brown-oak-veneer__0993132_pe820437_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/besta-tv-unit-with-doors-black-brown-glassvik-smoked-glass__0719197_pe731922_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/besta-tv-unit-with-doors-black-brown-hanviken-black-brown__0719190_pe731909_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-black-brown-hedeviken-oak-veneer__0993134_pe820431_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/besta-tv-unit-with-doors-black-brown-kallviken-concrete-effect__0719182_pe731915_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/besta-tv-unit-with-doors-black-brown-lappviken-black-brown__0719179_pe731902_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-kallviken-dark-gray__0993149_pe820417_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/besta-tv-unit-white__0376997_pe516837_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/besta-tv-unit-walnut-effect-light-gray__0316229_pe516835_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/besta-tv-unit-black-brown__0316226_pe516834_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/brimnes-tv-unit-black__0704610_pe725291_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/brimnes-tv-unit-white__0601754_pe681623_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/lack-tv-unit-black__0644748_pe702932_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/kallax-shelf-unit-white-stained-oak-effect__0459250_pe606049_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/kallax-shelf-unit-black-brown__0644754_pe702938_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/kallax-shelf-unit-gray-wood-effect__0494558_pe627165_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/kallax-shelf-unit-high-gloss-white__0627096_pe693189_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/kallax-shelf-unit-walnut-effect-light-gray__0541537_pe653644_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/kallax-shelving-unit-with-underframe-white-stained-oak-effect-white__1041447_pe841029_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/kallax-shelving-unit-with-underframe-white-stained-oak-effect-black__1041441_pe841023_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/kallax-shelving-unit-with-underframe-black-brown-white__1041448_pe841024_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/lommarp-tv-unit-dark-blue-green__0739335_pe741696_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/lommarp-tv-unit-light-beige__0739337_pe741697_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/lommarp-tv-unit-black__0964387_pe809023_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/kallax-lack-storage-combination-with-shelf-white-stained-oak-effect__0943523_pe796964_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/kallax-lack-storage-combination-with-shelf-white-stained-oak-effect__0943523_pe796964_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/kallax-lack-storage-combination-with-shelf-black-brown__0943522_pe796963_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/fjaellbo-tv-unit-black__0473390_pe614545_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/hemnes-tv-unit-black-brown__0625361_pe692211_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/hemnes-tv-unit-black-brown-light-brown__0806989_pe770202_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/hemnes-tv-unit-dark-gray-stained__0531274_pe647229_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/hemnes-tv-unit-white-stain__0644455_pe702706_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/hemnes-tv-unit-white-stain-light-brown__0583377_pe671187_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-lappviken-stubbarp-white__0985441_pe816805_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-bergsviken-oesarp-black__0985423_pe816795_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors__0985415_pe816786_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors__0985419_pe816793_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/besta-tv-bench-with-doors-white-hedeviken-stubbarp-oak-veneer__0992041_pe819768_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/brusali-tv-unit-brown__0351584_pe538332_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/brusali-tv-unit-white__0808189_pe770717_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/rannaes-tv-unit-with-doors-black-black-glass__1044087_pe841894_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-white__0917827_pe786009_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/hauga-tv-storage-combination-gray__0917826_pe786008_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/stockholm-tv-unit-walnut-veneer__0644450_pe702701_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/baggebo-tv-unit-white__0981575_pe815405_s5.jpg?f=xl",
    "https://www.ikea.com/us/en/images/products/fjaellbo-tv-storage-combination-black__0625394_pe692240_s5.jpg?f=xl"
    ]
  
  
const tvStands = tvStandImgs.map(img=>{
  return({
    "img": img,
    "name": faker.lorem.word().toUpperCase(),
    "category": "TV Stands",
    "room": "Living Room",
    "color": faker.color.human(),
    "price": Math.ceil((Math.random()*100))+100,
    "sellable_online": Math.round(Math.random()),
    "short_description": faker.lorem.paragraphs(1),
    "designer": faker.name.fullName(),
    "height": Math.ceil(Math.random()),
    "width": Math.ceil(Math.random()),
    "depth": Math.ceil(Math.random()),
  })
})

const diningTableImgs = [
  "https://www.ikea.com/us/en/images/products/lisabo-table-ash-veneer__0737105_pe740883_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lisabo-table-black__0737106_pe740884_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/ingatorp-extendable-table-white__0737089_pe740879_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/ingatorp-extendable-table-gray__0623225_pe691010_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/docksta-table-white-white__0803262_pe768820_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/docksta-table-black-black__1079719_pe857670_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/mariedamm-table-black-marble-effect__0916869_pe785444_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/mariedamm-table-beige-stone-effect-white__1009078_pe827446_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/melltorp-table-white__0737267_pe740965_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/laneberg-extendable-table-white__0722925_pe733775_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/skogsta-dining-table-acacia__0546603_pe656255_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/vedbo-dining-table-black__0766049_pe753697_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/vedbo-dining-table-white__0766051_pe753698_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/tarsele-extendable-table-oak-veneer-black__0916857_pe785431_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/norden-gateleg-table-birch__66396_pe179294_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/norden-gateleg-table-white__0737112_pe740886_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/nordviken-extendable-table-black__0714215_pe729969_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/danderyd-dining-table-oak-veneer-white__0918115_pe786051_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/nackanaes-table-acacia__1106462_pe868734_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/idanaes-drop-leaf-table-dark-brown__1028822_pe835544_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/ikea-ps-2012-drop-leaf-table-bamboo-white__0737119_pe740892_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/ravaror-dining-table-oak-veneer__0835201_pe778340_s5.jpg?f=xl"
  ]

const diningTables = diningTableImgs.map(img=>{
  return({
    "img": img,
    "name": faker.lorem.word().toUpperCase(),
    "category": "Dining Tables",
    "room": "Dining Room",
    "color": faker.color.human(),
    "price": Math.ceil((Math.random()*300))+190,
    "sellable_online": Math.round(Math.random()),
    "short_description": faker.lorem.paragraphs(1),
    "designer": faker.name.fullName(),
    "height": Math.ceil(Math.random()),
    "width": Math.ceil(Math.random()),
    "depth": Math.ceil(Math.random()),
  })
})
  
  
  
  
  
  const data = beds.concat(sofas, tvStands, diningTables)


// const data = arr.map(val=> {
//   return(
//     {
//       "img": bedImgs[Math.ceil(Math.random()*bedImgs.length)-1],
//       "name": faker.lorem.word().toUpperCase(),
//       "category": "Bed",
//       "color": faker.color.human(),
//       "price": Math.ceil((Math.random()*100))+100,
//       "sellable_online": Math.round(Math.random()),
//       "short_description": faker.lorem.paragraphs(1),
//       "designer": faker.name.fullName(),
//       "height": Math.ceil(Math.random()),
//       "width": Math.ceil(Math.random()),
//       "depth": Math.ceil(Math.random()),
//     }
//   )
// })


module.exports = {
    data
}