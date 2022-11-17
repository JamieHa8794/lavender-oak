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
            img: 'https://www.ikea.com/images/some-clothes-hang-from-two-landkrabba-racks-with-5-hooks-in--65b2873b134d12fd7859b30252c1a9d3.jpg?f=sg',
            title: 'Hallway',
        },
       
        {
            img: 'https://www.ikea.com/ext/ingkadam/m/30571fa5621ca6e9/original/PH169350-crop001.jpg?f=xl',
            title: 'Blue Curtains',
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
            img: 'https://www.ikea.com/ext/ingkadam/m/4dc545fc826f36dd/original/PH181179-crop001.jpg?f=xl',
            title: 'Red Couch',
        },
        {
            img: 'https://www.ikea.com/ext/ingkadam/m/315454bb252665c0/original/PH183955-crop001.jpg?f=xl',
            title: 'Bright Single Seater',
        },
        {
            img: 'https://www.ikea.com/images/flisat-series-500819ea86f14b6ba283ca058b9a61f2.jpg?f=l',
            title: 'Childrens Room',
        },

        {
            img: 'https://www.ikea.com/ext/ingkadam/m/6b93a92915b8438d/original/PH188023.jpg?f=xl',
            title: 'Vase of Flowers',
        },
        {
            img: 'https://www.ikea.com/ext/ingkadam/m/1216e28c8d27f812/original/PH175972-crop001.jpg?f=xl',
            title: 'Outdoor Patio',
        },
        

        {
            img: 'https://www.ikea.com/ext/ingkadam/m/36115184ce5dcbf0/original/PH157837-crop001.jpg?f=xl',
            title: 'Green Couch',
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
            img: 'https://www.ikea.com/images/sektion-kitchen-2f66a330517c163aefc87b5885e1e50d.jpg?f=xxxl',
            title: 'Kitchen',
        },
        {
            img: 'https://www.ikea.com/images/a-bedroom-with-a-malm-bed-frame-and-bedroom-storage-the-door-781db0a0af23f43f5ddd96630b34575b.jpg?f=s',
            title: 'Restroom',
        },        

      ];


    return(
        <div className='home-container'>
            <Box sx={{ width: 750, }}>
                <ImageList variant="masonry" cols={3} gap={8} >
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
    )
}




const mapStateToProps = (state) =>{
    return state;
}

// const mapDispatchToProps = () =>{
    
// }

export default connect(mapStateToProps)(Home)