const { faker } = require('@faker-js/faker')

const arr = new Array(20).fill();


const bedImgs = [
'https://www.ikea.com/us/en/images/products/malm-bed-frame-high-black-brown-luroey__0638608_pe699032_s5.jpg?f=xl',
'https://www.ikea.com/us/en/images/products/malm-bed-frame-high-gray-stained-luroey__0775049_pe756805_s5.jpg?f=xl',
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
    "category": "TV Stand",
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
    "category": "Dining Table",
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



const deskImgs = [
  "https://www.ikea.com/us/en/images/products/micke-desk-white__0736018_pe740345_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/micke-desk-anthracite-red__0921882_pe787985_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white__1022432_pe832720_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-gray-turquoise__1021994_pe832389_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white-black-brown__1022433_pe832721_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white-gray-turquoise__1022434_pe832718_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown-gray-turquoise__1022396_pe832707_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/micke-desk-white__0736020_pe740347_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0736019_pe740346_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white__0977483_pe813612_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-light-green-white__1079054_pe857387_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown-black__0977233_pe813476_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white-black-brown__0977484_pe813613_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/trotten-desk-white__1012718_pe828989_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/trotten-desk-beige-anthracite__1012717_pe828988_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/trotten-desk-white-anthracite__1012719_pe828990_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/trotten-desk-sit-stand-white__1020756_pe831984_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/trotten-desk-sit-stand-beige-anthracite__1020754_pe831982_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white__0976159_pe813052_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown-white__0976184_pe813078_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-black-brown-black__0976183_pe813077_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/micke-desk-white__0736576_pe740630_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/micke-corner-workstation-black-brown__0734327_pe739443_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/hemnes-desk-dark-gray-stained__0526711_pe645112_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/hemnes-desk-black-brown__0736013_pe740340_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lagkapten-mittback-desk-white-birch__0976099_pe813002_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/kullaberg-desk-pine__0968773_pe810549_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/brusali-desk-brown__0735969_pe740303_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/fjaellbo-laptop-table-black__0736007_pe740334_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/vittsjoe-laptop-table-black-brown-glass__0736023_pe740350_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lommarp-desk-light-beige__0770955_pe755649_s5.jpg?f=xl"
  ]


const desks = deskImgs.map(img=>{
  return({
    "img": img,
    "name": faker.lorem.word().toUpperCase(),
    "category": "Desk",
    "room": "Study",
    "color": faker.color.human(),
    "price": Math.ceil((Math.random()*150))+50,
    "sellable_online": Math.round(Math.random()),
    "short_description": faker.lorem.paragraphs(1),
    "designer": faker.name.fullName(),
    "height": Math.ceil(Math.random()),
    "width": Math.ceil(Math.random()),
    "depth": Math.ceil(Math.random()),
  })
})  



const rugImgs = [
  "https://www.ikea.com/us/en/images/products/tiphede-rug-flatwoven-natural-black__0772066_pe755879_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/tiphede-rug-flatwoven-black-natural__0772070_pe755883_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/langsted-rug-low-pile-yellow__0708105_pe726548_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/langsted-rug-low-pile-light-gray__0777951_pe759301_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/langsted-rug-low-pile-light-brown__1080058_pe857845_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/vindum-rug-high-pile-white__0721735_pe733365_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/vindum-rug-high-pile-green__0770693_pe755604_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/vedbaek-rug-low-pile-blue__1084810_pe859887_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/vedbaek-rug-low-pile-yellow-green__1084788_pe859872_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/vedbaek-rug-low-pile-light-gray__1072491_pe855183_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/broenden-rug-low-pile-handmade-beige__0804523_pe769465_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/broenden-rug-low-pile-handmade-multicolor-red__1084642_pe859748_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/vejstrup-rug-low-pile-beige-white__1063263_pe851311_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/stangerum-rug-high-pile-gray__0830985_pe776959_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/vonsbaek-rug-low-pile-dark-blue__1062215_pe850715_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/vonsbaek-rug-low-pile-red__1074978_pe856363_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/bogense-rug-low-pile-beige-white-dotted__1063262_pe851310_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/grundskola-rug-low-pile-multicolor__1121656_pe874313_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/vamdrup-rug-flatwoven-handmade-multicolor__0989495_pe818503_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/ullerslev-sheepskin-off-white__0603037_pe680644_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/cykelvaeg-rug-low-pile-multicolor__1084663_pe859769_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/toemmerby-rug-flatwoven-in-outdoor-dark-green-off-white__0936151_pe793151_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/klockbuske-rug-flatwoven-dark-gray-flower__1030318_pe836207_s5.jpg?f=xl"
  ]

  const rugs = rugImgs.map(img=>{
    return({
      "img": img,
      "name": faker.lorem.word().toUpperCase(),
      "category": "Rug",
      "room": "",
      "color": faker.color.human(),
      "price": Math.ceil((Math.random()*150))+50,
      "sellable_online": Math.round(Math.random()),
      "short_description": faker.lorem.paragraphs(1),
      "designer": faker.name.fullName(),
      "height": Math.ceil(Math.random()),
      "width": Math.ceil(Math.random()),
      "depth": Math.ceil(Math.random()),
    })
  })  




const diningChairImgs = [
  "https://www.ikea.com/us/en/images/products/bergmund-chair-black-gunnared-medium-gray__0859533_pe780957_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/bergmund-chair-black-ljungen-light-green__0859535_pe780959_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/bergmund-chair-black-rommele-dark-blue-white__0926579_pe789362_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/bergmund-chair-black-orrsta-light-gray__0859542_pe780965_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/karlpetter-chair-gunnared-light-green-sefast-white__1106897_pe868859_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/karlpetter-chair-gunnared-medium-gray-sefast-chrome-plated__1106910_pe868873_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lisabo-chair-ash__0786549_pe763015_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lisabo-chair-black__0786548_pe763014_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/nackanaes-chair-acacia__1113739_pe871520_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/tobias-chair-brown-red-chrome-plated__1126419_pe875739_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/tobias-chair-blue-chrome-plated__0727333_pe735605_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/tobias-chair-clear-chrome-plated__0727342_pe735614_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/teodores-chair-white__0727344_pe735616_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/teodores-chair-green__1114283_pe871739_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/teodores-chair-blue__1114279_pe871735_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/bergmund-chair-with-long-cover-black-inseros-white__0859534_pe780958_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/ingolf-chair-brown-black__0728153_pe736122_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/ingolf-chair-gray__0622804_pe690773_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/odger-chair-anthracite__0739669_pe741828_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/odger-chair-blue__0727322_pe735594_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/odger-chair-white-beige__0727334_pe735606_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/roenninge-chair-green__0642105_pe700897_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/roenninge-chair-birch__0642047_pe700849_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/ekedalen-chair-brown-orrsta-light-gray__0728287_pe736164_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/baltsar-swivel-chair-white__1118662_pe873208_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/torvid-chair-white-oak__1000369_pe824245_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/bernhard-chair-chrome-plated-mjuk-golden-brown__0728283_pe736173_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/norraryd-chair-black__0727327_pe735599_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/hansolle-chair-black-brown__0987281_pe817496_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/udmund-chair-brown-viarp-beige-brown__0928426_pe789857_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/ekedalen-chair-white-orrsta-light-gray__0728310_pe736178_s5.jpg?f=xl"
  ]
  
  
const diningChairs = diningChairImgs.map(img=>{
  return({
    "img": img,
    "name": faker.lorem.word().toUpperCase(),
    "category": "Dining Chair",
    "room": "Dining Room",
    "color": faker.color.human(),
    "price": Math.ceil((Math.random()*150))+50,
    "sellable_online": Math.round(Math.random()),
    "short_description": faker.lorem.paragraphs(1),
    "designer": faker.name.fullName(),
    "height": Math.ceil(Math.random()),
    "width": Math.ceil(Math.random()),
    "depth": Math.ceil(Math.random()),
  })
})  



const computerChairImgs = [
  "https://www.ikea.com/us/en/images/products/loberget-malskaer-swivel-chair-white__1078458_pe857202_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/eldberget-malskaer-swivel-chair-beige-white__1077158_pe856906_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/eldberget-malskaer-swivel-chair-green-black__1077165_pe856907_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/eldberget-malskaer-swivel-chair-yellow-white__1077186_pe856910_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/eldberget-malskaer-swivel-chair-red-black__0814565_pe772674_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/millberget-swivel-chair-murum-beige__1020141_pe831795_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/millberget-swivel-chair-murum-black__1020142_pe831799_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/hattefjaell-office-chair-with-armrests-gunnared-beige__1019089_pe831297_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/hattefjaell-office-chair-with-armrests-gunnared-medium-gray__1019093_pe831300_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/hattefjaell-office-chair-with-armrests-gunnared-light-brown-pink__1019092_pe831298_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/oerfjaell-swivel-chair-white-vissle-light-gray__0978008_pe813981_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/oerfjaell-swivel-chair-black-vissle-blue__0977996_pe813975_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/flintan-office-chair-with-armrests-black__1007241_pe825960_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/flintan-office-chair-with-armrests-beige__1007238_pe825958_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/molte-desk-chair-gray__0327355_pe519797_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/markus-office-chair-vissle-dark-gray__0724714_pe734597_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/markus-office-chair-vissle-light-gray__1101440_pe866425_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/gruppspel-gaming-chair-gunnared-beige__1036734_pe838521_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/gruppspel-gaming-chair-gunnared-black-gray__1036735_pe838522_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/kullaberg-swivel-chair-pine-black__0724693_pe734575_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/kullaberg-swivel-chair-black__0724718_pe734601_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/odger-swivel-chair-white-beige__0734069_pe739278_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lidkullen-sit-stand-support-gunnared-dark-gray__0771308_pe755688_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/bleckberget-swivel-chair-idekulla-light-green__1076304_pe856761_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/vimund-childs-desk-chair-light-pink__0726691_pe735388_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/vimund-childs-desk-chair-light-turquoise__0726692_pe735387_s5.jpg?f=xl"
  ]


const computerChairs = computerChairImgs.map(img=>{
  return({
    "img": img,
    "name": faker.lorem.word().toUpperCase(),
    "category": "Computer Chair",
    "room": "Study",
    "color": faker.color.human(),
    "price": Math.ceil((Math.random()*150))+50,
    "sellable_online": Math.round(Math.random()),
    "short_description": faker.lorem.paragraphs(1),
    "designer": faker.name.fullName(),
    "height": Math.ceil(Math.random()),
    "width": Math.ceil(Math.random()),
    "depth": Math.ceil(Math.random()),
  })
})  


const endTableImgs = [
  "https://www.ikea.com/us/en/images/products/knarrevik-nightstand-light-green__1064148_pe851509_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/knarrevik-nightstand-black__0578634_pe669464_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/vikhammer-nightstand-black__0569526_pe665936_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/hemnes-3-drawer-chest-white-stain__1045637_pe842684_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/hemnes-3-drawer-chest-dark-gray-stained__0825810_pe776363_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/hemnes-3-drawer-chest-black-brown__0822470_pe775644_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/malm-2-drawer-chest-white__0626822_pe693007_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/malm-2-drawer-chest-white-stained-oak-veneer__1154592_pe886219_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/hemnes-2-drawer-chest-white-stain__0651108_pe706676_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/hemnes-2-drawer-chest-black-brown__0651104_pe706672_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/bjoerksnaes-nightstand-birch__0598067_pe677433_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/bjoerksnaes-nightstand-black__0598063_pe677437_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/brimnes-nightstand-white__0624423_pe691830_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/brimnes-nightstand-black__0624434_pe691841_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/gladom-tray-table-black__0567223_pe664991_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/gladom-tray-table-white__0470732_pe612912_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/eket-storage-combination-with-legs-white-wood__0915074_pe784547_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/eket-storage-combination-with-legs-white-light-green-wood__1016348_pe830332_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/eket-storage-combination-with-legs-white-pale-pink-wood__1016347_pe830333_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/eket-storage-combination-with-legs-dark-gray-red-brown-wood__1017339_pe830779_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/olderdalen-nightstand-gray-green-pine__1064144_pe851507_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lunnarp-side-table-brown__0593624_pe675316_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/perjohan-stool-with-storage-pine__1018243_pe831131_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/smussla-bedside-table-shelf-unit-white__0931281_pe791191_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/kvistbro-storage-table-white__0477822_pe618485_s5.jpg?f=xl"
  ]

const endTables = endTableImgs.map(img=>{
  return({
    "img": img,
    "name": faker.lorem.word().toUpperCase(),
    "category": "End Table",
    "room": "Living Room",
    "color": faker.color.human(),
    "price": Math.ceil((Math.random()*100))+50,
    "sellable_online": Math.round(Math.random()),
    "short_description": faker.lorem.paragraphs(1),
    "designer": faker.name.fullName(),
    "height": Math.ceil(Math.random()),
    "width": Math.ceil(Math.random()),
    "depth": Math.ceil(Math.random()),
  })
})  


const nightstands = endTables.map(tables =>{
  return({
    "img": tables.img,
    "name": tables.name,
    "category": "Night Stand",
    "room": "Bed Room",
    "price": tables.price,
    "sellable_online": tables.sellable_online,
    "short_description": tables.short_description,
    "designer": tables.designer,
    "height": tables.height,
    "width": tables.width,
    "depth": tables.depth
  })
})




const lampimgs = [
  "https://www.ikea.com/us/en/images/products/tagarp-floor-uplighter-with-light-bulb-black-white__0810840_pe771436_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lauters-floor-lamp-with-led-bulb-ash-white__0663863_pe712536_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lauters-floor-lamp-with-led-bulb-brown-ash-white__0714123_pe729942_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/ypperlig-led-floor-lamp-dark-gray__0509514_pe636064_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/vickleby-floor-lamp-with-led-bulb-white-handmade__0953644_pe802864_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/tagarp-floor-uplt-read-lamp-w-light-bulb-black-white__0965083_pe809330_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lagtryck-floor-lamp-with-led-bulb-white__1023682_pe833216_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/hektar-floor-lamp-with-led-bulb-dark-gray__0149974_pe308131_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/tvaerhand-table-lamp-with-led-bulb-black-bamboo__1013660_pe829291_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lergryn-skaftet-floor-lamp-base-arched-beige-black__1009540_pe827681_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/uppvind-floor-lamp-with-led-bulb-brass-plated-white__0957412_pe804984_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/lersta-floor-reading-lamp-with-led-bulb-aluminum__0249251_pe371527_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/hovnaes-floor-lamp-chrome-plated__0684441_pe721180_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/vingmast-skaftet-floor-lamp-arched-beige-black__1009619_pe827690_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/kinnahult-floor-lamp-with-led-bulb-black-ash-black__0988768_pe818212_s5.jpg?f=xl",
  "https://www.ikea.com/us/en/images/products/skurup-floor-reading-lamp-with-led-bulb-black__0627646_pe693462_s5.jpg?f=xl"
  ]

  const lamps = lampimgs.map(img=>{
    return({
      "img": img,
      "name": faker.lorem.word().toUpperCase(),
      "category": "Lamp",
      "room": "",
      "color": faker.color.human(),
      "price": Math.ceil((Math.random()*200))+50,
      "sellable_online": Math.round(Math.random()),
      "short_description": faker.lorem.paragraphs(1),
      "designer": faker.name.fullName(),
      "height": Math.ceil(Math.random()),
      "width": Math.ceil(Math.random()),
      "depth": Math.ceil(Math.random()),
    })
  })  

  
  const products = beds.concat(sofas, tvStands, diningTables, desks, rugs, diningChairs, computerChairs, endTables, nightstands, lamps)







const users = [
  {
  'userName': 'Chandy',
  'firstName': 'Chandler',
  'middleName': "M.",
  'lastName': "Bing",
  'phoneNumber': '(123) 456-789',
  'streetAddress': '123 Address',
  'city':"New York",
  'zipCode': "10001",
},
{
  'userName': 'MonicaG',
  'firstName': 'Monica',
  'middleName': "",
  'lastName': "Geller",
  'phoneNumber': '(123) 456-789',
  'streetAddress': '123 Address',
  'city':"New York",
  'zipCode': "10001",
},
{
  'userName': 'Joeyy',
  'firstName': 'Joey',
  'middleName': "",
  'lastName': "Tribianni",
  'phoneNumber': '(123) 456-789',
  'streetAddress': '123 Address',
  'city':"New York",
  'zipCode': "10001",
},
{
  'userName': 'Pheebs',
  'firstName': 'Pheobe',
  'middleName': "",
  'lastName': "Buffay",
  'phoneNumber': '(123) 456-789',
  'streetAddress': '123 Address',
  'city':"New York",
  'zipCode': "10001",
},
{
  'userName': 'Rosstepher',
  'firstName': 'Ross',
  'middleName': "",
  'lastName': "Geller",
  'phoneNumber': '(123) 456-789',
  'streetAddress': '123 Address',
  'city':"New York",
  'zipCode': "10001",
},
{
  'userName': 'Rache',
  'firstName': 'Rachel',
  'middleName': "Karen",
  'lastName': "Green",
  'phoneNumber': '(123) 456-789',
  'streetAddress': '123 Address',
  'city':"New York",
  'zipCode': "10001",
},
]


module.exports = {
    products,
    users
}