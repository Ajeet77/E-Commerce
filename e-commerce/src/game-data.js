import {AiTwotoneStar,AiOutlineStar} from 'react-icons/ai';

const game = [
  {
    id: 1,
    image:
      "https://gamerspotstorage01.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/05/14184216/564365.jpg",
    title: "Resident Evil 8: Village",
    description:
      "Experience survival horror like never before in the eighth major installment in the storied Resident Evil franchise.",
    review: [<AiTwotoneStar/>,<AiTwotoneStar/>,<AiTwotoneStar/>,<AiTwotoneStar/>,<AiTwotoneStar/>],
    price: 699,
    qty: 1,
  },
  {
    id: 2,
    image:
      "https://gamerspotstorage01.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/05/14190014/32829.jpg",
    title: "Tomb Raider",
    description:
      "Travel the stunningly beautiful island of Yamatai in this latest reboot of the Tomb Raider series.",
    review: [<AiTwotoneStar/>,<AiTwotoneStar/>,<AiTwotoneStar/>,<AiTwotoneStar/>,<AiOutlineStar/>],
    price: 599,
    qty: 1,
  },
  {
    id: 3,
    image:
      "https://gamerspotstorage01.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/05/21083048/27776.jpg",
    title: "Grand Theft Auto V",
    price: 899,
    qty: 1,
    description:
      "Grand Theft Auto V for PC will take full advantage of the power of PC to deliver across-the-board enhancements.",
    review:
    [<AiTwotoneStar/>,<AiTwotoneStar/>,<AiTwotoneStar/>,<AiTwotoneStar/>,<AiTwotoneStar/>],
  },
  {
    id: 4,
    image:
      "https://gamerspotstorage01.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/05/14205433/34635.jpg",
    title: "Batman: Arkham Knight",
    description:
      "Witness the fourth chapter in the story of Batman’s struggles to bring Gotham to a semblance of order.", 
    review: [<AiTwotoneStar/>,<AiTwotoneStar/>,<AiTwotoneStar/>,<AiOutlineStar/>,<AiOutlineStar/>],
    price: 799,
    qty: 1,
  },
  {
    id: 5,
    image:
      "https://m.media-amazon.com/images/I/51fCmfd8CML._AC_UL320_.jpg",
    title: "Redgear Pro Wireless Gamepad",
    description:
      "Integrated dual intensity motor which allows a realistic gaming experience.", 
    review: [<AiTwotoneStar/>,<AiTwotoneStar/>,<AiTwotoneStar/>,<AiOutlineStar/>,<AiOutlineStar/>],
    price: 789,
    qty: 1,
  },
];

export default game;
