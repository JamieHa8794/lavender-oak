import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const Home = () =>{

    const itemData = [
        {
          img: 'https://www.ikea.com/ext/ingkadam/m/6b3af000fd8b959a/original/PH185916.jpg?f=xl',
          title: 'Storage',
        },
        {
            img: 'https://www.ikea.com/ext/ingkadam/m/1216e28c8d27f812/original/PH175972-crop001.jpg?f=xl',
            title: 'Outdoor Patio',
        },
        {
            img: 'https://www.ikea.com/ext/ingkadam/m/e64dd0abb0275d4/original/PH184191.jpg?f=xl',
            title: 'Pantry',
        },
        {
            img: 'https://www.ikea.com/images/a-kitchen-with-enhet-oak-effect-fronts-a-vinstgivande-wall-m-817d667999e10d68469c0c0993593d85.jpg?f=sg',
            title: 'Kitchen',
        },
        {
            img: 'https://www.ikea.com/images/a-rustic-dining-space-with-apricot-coloured-walls-an-ingator-c8f22ac4ce1b2708e05c29da5ac4a4d1.jpg?f=s',
            title: 'Rustic and Charming Dining Room',
        },
        {
            img: 'https://www.ikea.com/global/assets/navigation/images/outdoor-tables-700191.jpeg?imwidth=300',
            title: 'Outdoor Table',
        },  
        {
            img: 'https://www.ikea.com/images/flisat-series-500819ea86f14b6ba283ca058b9a61f2.jpg?f=l',
            title: 'Childrens Room',
        },
        {
            img: 'https://www.ikea.com/ext/ingkadam/m/30571fa5621ca6e9/original/PH169350-crop001.jpg?f=xl',
            title: 'Blue Curtains',
        },
        {
            img: 'https://www.ikea.com/ext/ingkadam/m/315454bb252665c0/original/PH183955-crop001.jpg?f=xl',
            title: 'Bright Single Seater',
        },
        {
            img: 'https://www.ikea.com/images/some-clothes-hang-from-two-landkrabba-racks-with-5-hooks-in--65b2873b134d12fd7859b30252c1a9d3.jpg?f=sg',
            title: 'Hallway',
        },
        {
            img: 'https://www.ikea.com/ext/ingkadam/m/6b93a92915b8438d/original/PH188023.jpg?f=xl',
            title: 'Vase of Flowers',
        },

        {
            img: 'https://www.ikea.com/ext/ingkadam/m/12d4625b0044329a/original/PH186974-crop002.jpg?f=xxxl',
            title: 'Green Couch',
        },
        {
            img: 'https://www.ikea.com/us/en/images/products/ingatorp-ingolf-table-and-4-chairs-white-hallarp-beige__1117669_pe872751_s5.jpg?f=m',
            title: 'Dining Room Set',
        },  
        {
            img: 'https://www.ikea.com/ext/ingkadam/m/20035c1b44b9a3cd/original/PH178596.jpg?f=xl',
            title: 'Pink Toilet',
        },
        {
            img: 'https://www.ikea.com/ext/ingkadam/m/701194645a445b8a/original/PH178624-crop001.jpg?f=xl',
            title: 'Hanging Socks',
        },
        {
            img: 'https://www.ikea.com/images/a-dining-area-with-a-black-lisabo-table-and-four-black-lisab-49397719bb3f1c4853034c015cdbdd10.jpg?f=l',
            title: 'Black Dining Set',
        },
        {
            img: 'https://www.ikea.com/images/a-monitor-on-a-monitor-stand-on-a-white-bekant-corner-desk-w-66854103ab4185bcfbde32bc4cdb4700.jpg?f=xl',
            title: 'Home Office',
        },
        {
            img: 'https://www.ikea.com/images/bright-voxtorp-ikea-kitchen-with-highgloss-beige-cabinets-st-745fee3e2fd46450e775fd7ec081c8fa.jpg?f=xxxs',
            title: 'White Cabinets Kitchen',
        },  
        {
            img: 'https://www.ikea.com/ext/ingkadam/m/4dc545fc826f36dd/original/PH181179-crop001.jpg?f=xl',
            title: 'Red Couch',
        },
        {
            img: 'https://www.ikea.com/images/sektion-kitchen-2f66a330517c163aefc87b5885e1e50d.jpg?f=xxxl',
            title: 'Kitchen',
        },
        {
            img: 'https://www.ikea.com/images/a-bedroom-with-a-malm-bed-frame-and-bedroom-storage-the-door-781db0a0af23f43f5ddd96630b34575b.jpg?f=s',
            title: 'Restroom',
        },        
        {
            img: 'https://www.ikea.com/images/a-beige-linanaes-sofa-with-various-cushions-on-a-light-grey--f453c80650f2e5304d8c5ffa8611059f.jpg?f=xl',
            title: 'Beige Sofa',
        },  
        {
            img: 'https://www.ikea.com/us/en/images/products/trolldom-duvet-cover-1-pillowcase-f-crib-forest-animal-pattern-green__1007923_pe826593_s5.jpg?f=m',
            title: 'Green Baby Room',
        },  

        {
            img: 'https://www.ikea.com/images/two-trofast-storage-combinations-with-pine-frames-with-toys--1ac1a6ff75c1c699aa567fda20781ed6.jpg?f=xl',
            title: 'Kids Room',
        },  

      ];


    return(
        <div className='home-container'>
            <div className='home-cards-container'>
                <div className='home-card-box-container'>
                    <div className='home-card-box-text-heading'>
                        Tis' The Season!
                    </div>
                    <div className='home-card-box-text-body'>
                        Grab the perfect decorations today.
                    </div>
                    <div className='home-holiday-box-img-container'>
                        <img className='home-holiday-box-img' src='https://www.ikea.com/us/en/images/products/vinterfint-decoration-set-of-8-winter-village__1155371_ph187707_s5.jpg?f=xl'/>
                        <img className='home-holiday-box-img' src='https://www.ikea.com/us/en/images/products/vinterfint-ornament-floral-pattern-mixed-colors__1155843_ph187761_s5.jpg?f=m'/>
                        <img className='home-holiday-box-img' src='https://www.ikea.com/us/en/images/products/vinterfint-decoration-santa-claus-sitting-red__1153588_ph187680_s5.jpg?f=m'/>
                    </div>
                    <div className='home-card-hr'></div>
                </div>
                <div className='home-card-box-container'>
                    <div className='home-card-box-text-heading'>
                        Different Styles?
                    </div>
                    <div className='home-card-box-text-body'>
                        We can help design a different type of bedroom for all personalities.
                    </div>
                    <div className='home-card-box-img-container'>
                        <img className='home-bedroom-box-img' src='https://www.ikea.com/images/a-slaekt-bed-with-in-blue-bed-linen-in-front-of-a-window-in--6db3656ed8c7f33067bcc1fc541fe753.jpg?f=xl'/>
                        <img className='home-bedroom-box-img' src='https://www.ikea.com/images/a-sunny-neutral-toned-bedroom-with-a-kleppstad-bed-covered-i-90f96ca7b3020af7b8625ab888bbfc86.jpg?f=xl'/>
                        <img className='home-bedroom-box-img' src='https://www.ikea.com/images/a-tuffing-bunk-bed-in-a-childrens-room-with-a-football-and-t-d4fadd3a99c65081e26e5f0a27a6185c.jpg?f=xl'/>
                        <img className='home-bedroom-box-img' src='https://www.ikea.com/images/a-light-beige-sofa-bed-made-as-a-bed-with-gray-bedding-behin-59a3ee9f6cff9a186181923f64fd5b87.jpg?f=xl'/>


                    </div>
                    <div className='home-card-hr'></div>

                </div>
            </div>
            <div>
                <div className='home-card-box-text-heading'>
                    Not sure what you're looking for?
                </div>
                <div className='home-card-box-text-body'>
                    Browse through our lookbook to get ideas on your next home decoration project. 
                </div>
                <Box>
                    <ImageList variant="masonry" cols={4} gap={10} >
                        {itemData.map((item) => (
                            <ImageListItem className='home-imageListItem' key={item.img} 
                            sx={{
                                '& .MuiImageListItem-img': {
                                height: 'fit-content',
                                },
                            }}
                            >
                                <img
                                src={`${item.img}?w=10&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=10&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </div>

        </div>
    )
}




const mapStateToProps = (state) =>{
    return state;
}

// const mapDispatchToProps = () =>{
    
// }

export default connect(mapStateToProps)(Home)