import React from 'react';

// import WebGrid from '@pagerland/icons/src/line/WebGrid';
// import BedDouble from '@pagerland/icons/src/line/BedDouble';
// import Bath from '@pagerland/icons/src/line/Bath';
// import CarSideview from '@pagerland/icons/src/line/CarSideview';
import Plane from '@pagerland/icons/src/line/Plane';
import TrainTunnel from '@pagerland/icons/src/line/TrainTunnel';
import ShoppingBag from '@pagerland/icons/src/line/ShoppingBag';
import Bus from '@pagerland/icons/src/line/Bus';
import Metro from '@pagerland/icons/src/line/Metro';
import Beach from '@pagerland/icons/src/line/Beach';
import Trees from '@pagerland/icons/src/line/Trees';
import Flag from '@pagerland/icons/src/line/Flag';
import User from '@pagerland/icons/src/line/User';
// import Building from '@pagerland/icons/src/line/Building';
import MapMarker from '@pagerland/icons/src/line/MapMarker';
import Phone from '@pagerland/icons/src/line/Phone';
import Envelope from '@pagerland/icons/src/line/Envelope';
import FacebookF from '@pagerland/icons/src/line/FacebookF';
import Instagram from '@pagerland/icons/src/line/Instagram';
// import Twitter from '@pagerland/icons/src/line/TwitterAlt';
// import Linkedin from '@pagerland/icons/src/line/LinkedinAlt';
import TagAlt from '@pagerland/icons/src/line/TagAlt';
import ThumbsUp from '@pagerland/icons/src/line/ThumbsUp';
import ShieldCheck from '@pagerland/icons/src/line/ShieldCheck';
import Award from '@pagerland/icons/src/line/Award';
// import Youtube from '@pagerland/icons/src/line/Youtube';

import Icon from '@pagerland/common/src/components/Icon';

import textToMultiline from '@pagerland/common/src/utils/textToMultiline';

import * as Yup from 'yup';
import background from './assets/header-photo.jpg';
import background2x from './assets/header-photo@2x.jpg';

// import about1 from './assets/about/about-1.jpg';
// import aboutLarge1 from './assets/about/about-huge-1.jpg';
// import about12x from './assets/about/about-1@2x.jpg';
// import about2 from './assets/about/about-2.jpg';
// import aboutLarge2 from './assets/about/about-huge-2.jpg';
// import about22x from './assets/about/about-2@2x.jpg';
// import about3 from './assets/about/about-3.jpg';
// import aboutLarge3 from './assets/about/about-huge-3.jpg';
// import about32x from './assets/about/about-3@2x.jpg';

// import exterior1 from './assets/exteriors/exterior-1.jpg';
// import exterior12x from './assets/exteriors/exterior-1@2x.jpg';
// import exterior2 from './assets/exteriors/exterior-2.jpg';
// import exterior22x from './assets/exteriors/exterior-2@2x.jpg';

import bocas1     from './assets/bocas_1.jpg';
import bocas1A2x  from './assets/bocas_1@2x.jpg';
import bocas2     from './assets/bocas_2.jpg';
import bocas2A2x  from './assets/bocas_2@2x.jpg';
import bocas3     from './assets/bocas_3.jpg';
import bocas3A2x  from './assets/bocas_3@2x.jpg';
import bocas4     from './assets/bocas_4.jpg';
import bocas4A2x  from './assets/bocas_4@2x.jpg';
import bocas5     from './assets/bocas_5.jpg';
import bocas5A2x  from './assets/bocas_5@2x.jpg';

import casco1     from './assets/casco_1.jpg';
import casco1A2x  from './assets/casco_1@2x.jpg';

import casco2     from './assets/casco_2.jpg';
import casco2A2x  from './assets/casco_2@2x.jpg';

import casco3     from './assets/casco_3.jpg';
import casco3A2x  from './assets/casco_3@2x.jpg';

import gatun1    from './assets/gatun_1.jpg';
import gatun2    from './assets/gatun_2.jpg';
import gatun3    from './assets/gatun_3.jpg';
import gatun4    from './assets/gatun_4.jpg';
import gatun5    from './assets/gatun_5.jpg';

import gatun1A2x from './assets/gatun_1@2x.jpg';
import gatun2A2x from './assets/gatun_2@2x.jpg';
import gatun3A2x from './assets/gatun_3@2x.jpg';
import gatun4A2x from './assets/gatun_4@2x.jpg';
import gatun5A2x from './assets/gatun_5@2x.jpg';

import pty1 from './assets/pty1.jpg';
import pty2 from './assets/pty2.jpg';
import pty1A2x from './assets/pty1@2x.jpg';
import pty2A2x from './assets/pty2@2x.jpg';

import contactImg from './assets/contact.jpg';
import contactImg2x from './assets/contact@2x.jpg';

export default {
  title: 'Real Estate',
  navbar: {
    links: [
      // {
      //   to: '',
      //   'data-to': '',
      //   label: 'Home',
      // },
      // {
      //   to: 'about',
      //   'data-to': 'about',
      //   label: 'About',
      // },
      // {
      //   to: 'exterior',
      //   'data-to': 'exterior',
      //   label: 'Exterior',
      // },
      {
        to: 'location',
        'data-to': 'location',
        label: 'Location',
      },
      {
        to: 'interior',
        'data-to': 'interior',
        label: 'Attractions',
      },
      // {
      //   to: 'surroundings',
      //   'data-to': 'surroundings',
      //   label: 'Surroundings',
      // },
      {
        to: 'gallery',
        'data-to': 'gallery',
        label: 'Gallery',
      },
      {
        to: 'contact',
        'data-to': 'contact',
        label: 'Contact',
      },
    ],
    // actions: [
    //   {
    //     to: 'contact',
    //     'data-to': 'contact',
    //     label: 'Contact Us',
    //   }
    // ],
  },
  welcome: {
    background: {
      src: background,
      srcSet: `${background} 1x, ${background2x} 2x`,
      alt: 'Bocas del Toro',
    },
    title: 'Tour Panama With Us',
    price: 'Discover The Paradise',
    cta: {
      to: 'contact',
      'data-to': 'contact',
      children: 'Contact Us',
    },
  },
  // about: {
  //   title: 'We introduce you a beautiful and bright and sunny house designed by Leonardo Piazzo',
  //   text:
  //     'Integer vulputate turpis nisl, non auctor sapien accumsan semper. Praesent in pulvinar nisl. Nullam turpis sem, commodo vel congue accumsan, finibus ut nulla. Nunc a efficitur massa. Nulla viverra tincidunt felis, vel sodales metus maximus et. Suspendisse potenti. Donec tincidunt leo nisi, vitae rhoncus neque accumsan vitae.',
  //   gallery: [
  //     {
  //       source: aboutLarge1,
  //       ImgProps: {
  //         src: about1,
  //         srcSet: `${about1} 1x, ${about12x} 2x`,
  //       },
  //     },
  //     {
  //       source: aboutLarge2,
  //       ImgProps: {
  //         src: about2,
  //         srcSet: `${about2} 1x, ${about22x} 2x`,
  //       },
  //     },
  //     {
  //       source: aboutLarge3,
  //       ImgProps: {
  //         src: about3,
  //         srcSet: `${about3} 1x, ${about32x} 2x`,
  //       },
  //     },
  //   ],
  // },
  location: {
    title: textToMultiline`Panama: Incredible Location.\nLive The Experience.`,
    text: 'Discover a destiny filled with adventure, beaches, mountains, cool people, and many surprises to delight your senses.',
    text2: 'Join us on the journey of your life',
    counters: [
      {
        IconProps: {
          icon: Plane,
        },
        title: 'Airport',
        counter: {
          value: 67,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: TrainTunnel,
        },
        title: 'Train station',
        counter: {
          value: 2,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: ShoppingBag,
        },
        title: 'Shopping Centre',
        counter: {
          value: 12,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: Bus,
        },
        title: 'Bus Stop',
        counter: {
          value: 2,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: Metro,
        },
        title: 'Subway',
        counter: {
          value: 18,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: Beach,
        },
        title: 'Beach',
        counter: {
          value: 800,
          unit: 'm',
        },
      },
      {
        IconProps: {
          icon: Trees,
        },
        title: 'Park',
        counter: {
          value: 1,
          unit: 'km',
        },
      },
      {
        IconProps: {
          icon: Flag,
        },
        title: 'Golf course',
        counter: {
          value: 3,
          unit: 'km',
        },
      },
    ],
    map: {
      bocas: {
        lat: 9.3921117,
        lng: -82.3148546,
      },
      casco: {
        lat: 8.952315,
        lng: -79.536263,
      },
      canal: {
        lat: 9.1437766,
        lng: -79.868598
      },
      gatun: {
        lat:9.1684009,lng:-80.0571799
      },
      santafe: {
        lat: 8.78417, lng:-81.073575
      }
    },
  },
  // exterior: {
  //   sections: [
  //     {
  //       ImgProps: {
  //         src: exterior1,
  //         srcSet: `${exterior1} 1x, ${exterior12x} 2x`,
  //       },
  //       title: 'Modern an minimalistic exterior design',
  //       text:
  //         'Vestibulum sit amet consequat lacus. Nulla dapibus dignissim massa, quis mattis ante tempor in. Morbi mollis nibh dictum, eleifend tellus quis, lobortis ex. Donec tempor, massa in consequat pellentesque, nunc arcu tempus ex, nec accumsan sem augue eget urna.',
  //     },
  //     {
  //       ImgProps: {
  //         src: exterior2,
  //         srcSet: `${exterior2} 1x, ${exterior22x} 2x`,
  //       },
  //       title: 'Pure harmony between space and function',
  //       text:
  //         'Curabitur porttitor ligula ut aliquam egestas. Fusce orci ipsum, gravida vel dapibus nec, interdum nec dui. Vestibulum sed porttitor est. Nullam sollicitudin, odio vel mattis bibendum, ligula nisl faucibus libero, vitae tempus dui orci in purus. In consectetur velit est.',
  //     },
  //   ],
  // },
  interior: {
    sections: [
      {
        slides: [
          {
            src:       bocas1,
            srcSet: `${bocas1} 1x,
                     ${bocas1A2x} 2x`,
          },
          {
            src:       bocas2,
            srcSet: `${bocas2} 1x,
                     ${bocas2A2x} 2x`,
          },
          {
            src:       bocas3,
            srcSet: `${bocas3} 1x,
                     ${bocas3A2x} 2x`,
          },
          {
            src:       bocas4,
            srcSet: `${bocas4} 1x,
                     ${bocas4A2x} 2x`,
          },
        ],
        title: 'Bocas del Toro',
        text:
          'Tropical Paradise in the middle of the World, spectacular white sand island and crystal clear waters.',
      },
      {
        slides: [
          {
            src:       casco1,
            srcSet: `${casco1} 1x,
                     ${casco1A2x} 2x`,
          },
          {
            src:       casco2,
            srcSet: `${casco2} 1x,
                     ${casco2A2x} 2x`,
          },
          {
            src:       casco3,
            srcSet: `${casco3} 1x,
                     ${casco3A2x} 2x`,
          },
        ],
        title: 'Casco Viejo',
        text:
          'Discover the Old Town, know the history of this second version of Panama City and live the time of your life.'
      },
    ],
  },
  surroundings: {
    sections: [
      {
        ImgProps: {
          src: gatun2,
          srcSet: `${gatun2} 1x, ${gatun2} 2x`,
        },
        title: 'Panama Canal',
        text:
          'Within the heart of Panama, the Canal connects the whole world that unifies and enriches the global market through the veins of the Pacífic and Atlantic Oceans.',
        cta: {
          as: 'a',
          label: 'Learn more',
          href:
            'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        },
      },
      {
        ImgProps: {
          src: gatun5,
          srcSet: `${gatun5} 1x, ${gatun5} 2x`,
        },
        title: 'Gatun Lake',
        text:
          'Before the Canal was even thought about, there was the imponent Gatun Lake with lush nature.',
        cta: {
          as: 'a',
          label: 'Learn more',
          href:
            'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        },
      },
      {
        ImgProps: {
          src: gatun1,
          srcSet: `${gatun1} 1x, ${gatun1} 2x`,
        },
        title: 'Island of the Monkeys',
        text:
          'In the confines of the Panama Canal explore the mysteries the island offers: exquisite flora and fauna.',
        cta: {
          as: 'a',
          label: 'Learn more',
          href:
            'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
        },
      },
    ],
  },
  gallery: {
    photos: [
      {
        source: bocas1A2x,
        ImgProps: {
          src: bocas1,
          srcSet: `${bocas1} 1x, ${bocas1A2x} 2x`,
        },
      },
      {
        source: bocas2A2x,
        ImgProps: {
          src: bocas2,
          srcSet: `${bocas2} 1x, ${bocas2A2x} 2x`,
        },
      },
      {
        source: bocas3A2x,
        ImgProps: {
          src: bocas3,
          srcSet: `${bocas3} 1x, ${bocas3A2x} 2x`,
        },
      },
      {
        source: bocas4A2x,
        ImgProps: {
          src: bocas4,
          srcSet: `${bocas4} 1x, ${bocas4A2x} 2x`,
        },
      },
      {
        source: bocas5A2x,
        ImgProps: {
          src: bocas5,
          srcSet: `${bocas5} 1x, ${bocas5A2x} 2x`,
        },
      },
      {
        source: casco1A2x,
        ImgProps: {
          src: casco1,
          srcSet: `${casco1} 1x, ${casco1A2x} 2x`,
        },
      },
      {
        source: casco2A2x,
        ImgProps: {
          src: casco2,
          srcSet: `${casco2} 1x, ${casco2A2x} 2x`,
        },
      },
      {
        source: casco3A2x,
        ImgProps: {
          src: casco3,
          srcSet: `${casco3} 1x, ${casco3A2x} 2x`,
        },
      },
      {
        source: gatun1A2x,
        ImgProps: {
          src: gatun1,
          srcSet: `${gatun1} 1x, ${gatun1A2x} 2x`,
        },
      },
      {
        source: gatun2A2x,
        ImgProps: {
          src: gatun2,
          srcSet: `${gatun2} 1x, ${gatun2A2x} 2x`,
        },
      },
      {
        source: gatun3A2x,
        ImgProps: {
          src: gatun3,
          srcSet: `${gatun3} 1x, ${gatun3A2x} 2x`,
        },
      },
      {
        source: gatun4A2x,
        ImgProps: {
          src: gatun4,
          srcSet: `${gatun4} 1x, ${gatun4A2x} 2x`,
        },
      },
      {
        source: gatun5A2x,
        ImgProps: {
          src: gatun5,
          srcSet: `${gatun5} 1x, ${gatun5A2x} 2x`,
        },
      },
      {
        source: pty1A2x,
        ImgProps: {
          src: pty1,
          srcSet: `${pty1} 1x, ${pty1A2x} 2x`,
        },
      },
      {
        source: pty2A2x,
        ImgProps: {
          src: pty2,
          srcSet: `${pty2} 1x, ${pty2A2x} 2x`,
        },
      },
    ],
  },
  contact: {
    title: "Let's Do This!",
    thumbnail: {
      src: contactImg,
      srcSet: `${contactImg} 1x, ${contactImg2x} 2x`,
    },
    details: {
      title: '',
      text: '',
      info: [
        // {
        //   icon: User,
        //   text: 'Andrea Colman',
        // },
        // {
        //   icon: Building,
        //   text: 'California Real Estates',
        // },
        {
          icon: MapMarker,
          text: textToMultiline`Panama, Panama City`,
        },
        {
          icon: Phone,
          text: '+507 6975 2528',
        },
        {
          icon: Envelope,
          text: 'info@tourpanamawithus.com',
        },
      ],
      socialLinks: [
        {
          icon: FacebookF,
          href: 'https://www.facebook.com/tourpanamawithus/',
          title: 'Facebook',
        },
        {
          icon: Instagram,
          href: 'https://www.instagram.com/tourpanamawithus/',
          title: 'Instagram',
        },
        // {
        //   icon: Twitter,
        //   href: 'https://mypags.app',
        //   title: 'Twitter',
        // },
        // {
        //   icon: Linkedin,
        //   href: 'https://mypags.app',
        //   title: 'Linkedin',
        // },
      ],
    },
    form: {
      title: 'Send us a message and we will call you back',
      sendButtonText: 'Send',
      validationSchema: Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        email: Yup.string().email('Must be an email').required('Required'),
        message: Yup.string().min(20, 'Must be at least 20 characters').required('Required'),
      }),
      // eslint-disable-next-line no-undef
      // onSubmit: values => window.alert(`Form sent with values ${JSON.stringify(values)}`),
      onSubmit: values => console.log(''),
      fields: [
        {
          name: 'firstName',
          label: 'First name',
          placeholder: 'ie. John Doe',
          initialValue: '',
          prefix: <Icon icon={User} />,
        },
        {
          name: 'phone',
          label: 'Phone',
          placeholder: 'ie. +1 555 678 123',
          initialValue: '',
          prefix: <Icon icon={Phone} />,
        },
        {
          name: 'email',
          label: 'E-mail',
          placeholder: 'ie. john.doe@email.com',
          type: 'email',
          initialValue: '',
          prefix: <Icon icon={Envelope} />,
        },
        {
          name: 'message',
          label: 'Message',
          placeholder: 'Tell us what we can do best for you!',
          multiline: true,
          initialValue: '',
        },
      ],
    },
  },
  // similarProperties: {
  //   title: 'Similar properties',
  //   properties: [
  //     {
  //       ImgProps: {
  //         src: property1,
  //         srcSet: `${property1} 1x, ${property12x} 2x`,
  //       },
  //       LinkProps: {
  //         as: 'a',
  //         href:
  //           'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
  //       },
  //       title: 'Villa with two terraces, swimming pool and beauitiful garden',
  //       price: '$3,450,000',
  //       features: [
  //         {
  //           IconProps: {
  //             icon: WebGrid,
  //           },
  //           title: '3 400 sq. ft.',
  //         },
  //         {
  //           IconProps: {
  //             icon: BedDouble,
  //           },
  //           title: '5 bedrooms',
  //         },
  //         {
  //           IconProps: {
  //             icon: Bath,
  //           },
  //           title: '3 bathrooms',
  //         },
  //         {
  //           IconProps: {
  //             icon: CarSideview,
  //           },
  //           title: '2 cars garage',
  //         },
  //       ],
  //     },
  //     {
  //       ImgProps: {
  //         src: property2,
  //         srcSet: `${property2} 1x, ${property22x} 2x`,
  //       },
  //       LinkProps: {
  //         as: 'a',
  //         href:
  //           'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
  //       },
  //       title: 'Classic spanish style house with amazin mountains view',
  //       price: '$2,780,000',
  //       features: [
  //         {
  //           IconProps: {
  //             icon: WebGrid,
  //           },
  //           title: '4 200 sq. ft.',
  //         },
  //         {
  //           IconProps: {
  //             icon: BedDouble,
  //           },
  //           title: '6 bedrooms',
  //         },
  //         {
  //           IconProps: {
  //             icon: Bath,
  //           },
  //           title: '4 bathrooms',
  //         },
  //         {
  //           IconProps: {
  //             icon: CarSideview,
  //           },
  //           title: '2 cars garage',
  //         },
  //       ],
  //     },
  //     {
  //       ImgProps: {
  //         src: property3,
  //         srcSet: `${property3} 1x, ${property32x} 2x`,
  //       },
  //       LinkProps: {
  //         as: 'a',
  //         href:
  //           'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
  //       },
  //       title: 'Completely renovated ground floor villa with swimming pool',
  //       price: '$1,950,000',
  //       features: [
  //         {
  //           IconProps: {
  //             icon: WebGrid,
  //           },
  //           title: '2 800 sq. ft.',
  //         },
  //         {
  //           IconProps: {
  //             icon: BedDouble,
  //           },
  //           title: '4 bedrooms',
  //         },
  //         {
  //           IconProps: {
  //             icon: Bath,
  //           },
  //           title: '3 bathrooms',
  //         },
  //         {
  //           IconProps: {
  //             icon: CarSideview,
  //           },
  //           title: '2 cars garage',
  //         },
  //       ],
  //     },
  //   ],
  // },
  footer: {
    title: 'About California Real Estates',
    text: textToMultiline`Cras sollicitudin erat sit amet egestas consequat. Quisque in purus sem. Integer condimentum nulla vel velit pretium, eget fringilla enim sodales. Nullam sit amet leo vitae mi laoreet varius eu vel est.\n\nMaecenas non lectus tincidunt, sodales leo pulvinar, condimentum urna. Fusce sed dui nec tortor tincidunt ultricies. Proin at convallis felis, sit amet varius velit.`,
    cta: {
      as: 'a',
      label: 'Learn more',
      href:
        'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',
    },
    features: [
      {
        IconProps: {
          icon: TagAlt,
        },
        title: 'Best price on the market',
        text:
          'Proin at convallis felis, sit amet varius velit. Aenean placerat turpis a libero feugiat, at iaculis elit faucibus.',
      },
      {
        IconProps: {
          icon: ThumbsUp,
        },
        title: 'Satisfaction guarantee',
        text:
          'Proin at convallis felis, sit amet varius velit. Aenean placerat turpis a libero feugiat, at iaculis elit faucibus.',
      },
      {
        IconProps: {
          icon: ShieldCheck,
        },
        title: 'Safety policy',
        text:
          'Proin at convallis felis, sit amet varius velit. Aenean placerat turpis a libero feugiat, at iaculis elit faucibus.',
      },
      {
        IconProps: {
          icon: Award,
        },
        title: 'Award winning company',
        text:
          'Proin at convallis felis, sit amet varius velit. Aenean placerat turpis a libero feugiat, at iaculis elit faucibus.',
      },
    ],
    socialLinks: [
      {
        icon: FacebookF,
        href: 'https://www.facebook.com/tourpanamawithus/',
        title: 'Facebook',
      },
      {
        icon: Instagram,
        href: 'https://www.instagram.com/tourpanamawithus/',
        title: 'Instagram',
      },
      // {
      //   icon: Twitter,
      //   href: 'https://mypags.app',
      //   title: 'Twitter',
      // },
      // {
      //   icon: Youtube,
      //   href: 'https://mypags.app',
      //   title: 'YouTube',
      // },
      // {
      //   icon: Linkedin,
      //   href: 'https://mypags.app',
      //   title: 'Linkedin',
      // },
    ],
  },
  copyright: 'Tour Panama With Us',
};
