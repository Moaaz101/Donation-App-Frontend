import shirt from '../assets/shirt.png';
import food from '../assets/food.png';
import medical from '../assets/medical.png';
import inhaler from '../assets/Inhaler.png';
import wheelchair from '../assets/wheelchair.png';
import lego from '../assets/lego.png';
import heartMonitor from '../assets/heartmonitor.png';
import masks from '../assets/masks.png';
import hulk from '../assets/hulk.png';
import ironman from '../assets/ironman.png';
import blackpanther from '../assets/blackpanther.png';
import toy from '../assets/toys.png';
import school from '../assets/school.png';
import blood from '../assets/bloodDonation.png';
import paracetamol from '../assets/paracetamol.png';
import ball from '../assets/ball.png';
import outdoor from '../assets/outdoor.png';
import medicalVisit from '../assets/medicalVisit.png';
import teachingClass from '../assets/teachingClass.png';







const allData = [
    {
        id: 1,
        category: 'Clothes',
        image: shirt,
        title: 'Clothes',
        description: 'We are asking for your help to support our lack of clothing supply.',
        attributes: {
          Type: 'Jacket',
          Age: '8-16',
          Gender: 'Male',
          Season : 'Winter',
          Material: 'Wool',
          Count : 5
      },
    },
    {
      id: 2,
      category: 'Food',
      image: food,
      title: 'Food',
      description: 'We are asking for your help to support our lack of Food supply.',
      attributes: {
        Type : 'Baked Goods',
        Name: 'Bread',
        Count: 20
    },
  },
  {
    id: 3,
    category: 'Food',
    image: food,
    title: 'Food',
    description: 'We are asking for your help to support our lack of Food supply.',
    attributes: {
      Type:'Vegetables',
      Name: 'Potato',
      'Amount in KG': 15
  
   },
  },
  {
    id: 4,
    category: 'Clothes',
    image: shirt,
    title: 'Clothes',
    description: 'We are asking for your help to support our lack of clothing supply.',
    attributes: {
      Type: 'Sweatshirt',
      Age: '16-21',
      Gender: 'Male',
      Season : 'Winter',
      Material: 'knit',
      Count : 3
   },
  },
  {
    id: 5,
    category: 'Food',
    image: food,
    title: 'Food',
    description: 'We are asking for your help to support our lack of food supply.',
    attributes: {
      Type : 'Canned Foods',
      Name: 'Beans',
      Count: 20
   },
  },
  {
    id: 6,
    category: 'Medical Supplies',
    image: medical,
    title: 'Medical Supplies',
    description: 'We are asking for your help to support our lack of Medical supply.',
    attributes: {
      Type: 'Medical Equipment',
      Name: 'Inhaler',
      Use: 'to treat asthma and chronic obstructive pulmonary diseas',
      Image: inhaler,
      Count:5
   },
  },
  {
    id: 7,
    category: 'Medical Supplies',
    image: medical,
    title: 'Medical Supplies',
    description: 'We are asking for your help to support our lack of Medical supply.',
    attributes: {
      Type: 'Medical Equipment',
      Name: 'Wheel Chair',
      Use: 'to transport patients and physically hurt people',
      Image: wheelchair,
      Count:6
   },
  },
  {
    id: 8,
    category: 'School Supplies',
    image: school,
    title: 'School Supplies',
    description: 'We are asking for your help to support our lack of School Supplies.',
    attributes: {
      Type: 'Stationary',
      Name: 'Pencils',
      Count: 50
   },
  },
  {
    id: 9,
    category: 'Blood Donations',
    image: blood,
    title: 'Blood Donation',
    description: 'We are asking for your help to support our lack of Blood Supply.',
      attributes: {
      'Patient Name': 'John Doe',
      'Blood Type' : 'O+',
      'Hospital Name' : 'Air Force Specialized Hospital',
      'Address' : 'N Teseen St, Cairo Governorate',
      'Google': ''
   },
  },
  {
    id: 10,
    category: 'Food',
    image: food,
    title: 'Food',
    description: 'We are asking for your help to support our lack of food supply.',
    attributes: {
      Type: 'Fruits',
      Name: 'Apples',
      'Amount in KG': 20
   },
  },
  {
    id: 11,
    category: 'Clothes',
    image: shirt,
    title: 'Clothes',
    description: 'We are asking for your help to support our lack of clothing supply.',
    attributes: {
      Type: 'Pants',
      Age: '25-30',
      Gender: 'Female',
      Season : 'Summer',
      Material: 'Jeans',
      Count : 8
  },
  },
  {
    id: 12,
    category: 'School Supplies',
    image: school,
    title: 'School Supplies',
    description: 'We are asking for your help to support our lack of School Supplies.',
    attributes: {
      Type: 'Stationary',
      Name: 'Rulers',
      Count: 50
   },
  },
  {
    id: 13,
    category: 'Toys',
    image: toy,
    title: 'Toys',
    description: 'We are asking for your help to support our lack of Toys.' ,
    attributes: {
      Category: 'Board Games',
      Type : 'Lego',
      Age : '8-16',
      Gender : 'Both',
      Image : lego,
      Count : 10
   },
  },
  {
    id: 14,
    category: 'Clothes',
    image: shirt,
    title: 'Clothes',
    description: 'We are asking for your help to support our lack of clothing supply.',
    attributes: {
      Type: 'Shorts',
      Age: '30-45',
      Gender: 'Male',
      Season : 'Summer',
      Material: 'Cotton',
      Count : 8
  },
  },
  {
    id: 15,
    category: 'Medical Supplies',
    image: medical,
    title: 'Medical Supplies',
    description: 'We are asking for your help to support our lack of Medical supply.',
    attributes: {
      Type: 'Medical Devices',
      Name: 'Heartrate Monitor',
      Use: 'to allow one to measure/display heart rate in real time or record the heart rate for later study',
      Image: heartMonitor,
      Count:3
   },
  },
  {
    id: 16,
    category: 'School Supplies',
    image: school,
    title: 'School Supplies',
    description: 'We are asking for your help to support our lack of School Supplies.',
    attributes: {
      Type: 'Stationary',
      Name: 'Erasers',
      Count: 50
   },
  },
  {
    id: 17,
    category: 'Medical Supplies',
    image: medical,
    title: 'Medical Supplies',
    description: 'We are asking for your help to support our lack of Medical supply.',
    attributes: {
      Type: 'Medical Equipment',
      Name: 'Masks and Gloves',
      Use: 'to protect the wearer and/or the patient from the spread of micro-organisms that may potentially cause infection or illness during medical procedures and examinations.',
      Image: masks,
      Count:3
   },
  },
  {
    id: 18,
    category: 'School Supplies',
    image: school,
    title: 'School Supplies',
    description: 'We are asking for your help to support our lack of School Supplies.',
    attributes: {
      Type: 'Stationary',
      Name: 'Markers',
      Count: 50
   },
  },
  {
    id: 19,
    category: 'Blood Donations',
    image: blood,
    title: 'Blood Donation',
    description: 'We are asking for your help to support our lack of Blood Supply.',
      attributes: {
      'Patient Name': 'Jhonny Cash',
      'Blood Type' : 'A-',
      'Hospital Name' : 'AL SALAM INTERNATIONAL HOSPITAL',
      'Address' : 'New Cairo 1, Cairo Governorate 4723115',
      'Google': ''
   },
  },
  {
    id: 20,
    category: 'Blood Donations',
    image: blood,
    title: 'Blood Donation',
    description: 'We are asking for your help to support our lack of Blood Supply.',
      attributes: {
      'Patient Name': 'Nicolas Cage',
      'Blood Type' : 'A+',
      'Hospital Name' : 'Cleopatra Hospitals Group',
      'Address' : '39 Cleopatra، Maidan Salahuddin Square, Almazah, Heliopolis',
      'Google': ''
   },
  },
  {
    id: 21,
    category: 'Toys',
    image: toy,
    title: 'Toys',
    description: 'We are asking for your help to support our lack of Toys.' ,
    attributes: {
      Category: 'Dolls',
      Type : 'Action figure',
      Age : '8-16',
      Gender : 'Both',
      Image : hulk,
      Count : 10
   },
  },
  {
    id: 22,
    category: 'Toys',
    image: toy,
    title: 'Toys',
    description: 'We are asking for your help to support our lack of Toys.' ,
    attributes: {
      Category: 'Dolls',
      Type : 'Action figure',
      Age : '8-16',
      Gender : 'Both',
      Image : ironman,
      Count : 10
   },
  },
  {
    id: 23,
    category: 'Toys',
    image: toy,
    title: 'Toys',
    description: 'We are asking for your help to support our lack of Toys.' ,
    attributes: {
      Category: 'Dolls',
      Type : 'Action figure',
      Age : '8-16',
      Gender : 'Both',
      Image : blackpanther,
      Count : 10
   },
  },
  {
    id: 24,
    category: 'Blood Donations',
    image: blood,
    title: 'Blood Donation',
    description: 'We are asking for your help to support our lack of Blood Supply.',
      attributes: {
      'Patient Name': 'Mido',
      'Blood Type' : 'B+',
      'Hospital Name' : 'SHIFA HOSPITAL',
      'Address' : 'N Teseen, New Cairo 1, Cairo Governorate 4730131',
      'Google': ''
   },
  },
  {
    id: 25,
    category: 'Food',
    image: food,
    title: 'Food',
    description: 'We are asking for your help to support our lack of food supply.',
    attributes: {
      Type: 'Fresh Meals',
      Name: 'Chicken',
      Count: 20
   },
  },
  {
    id: 26,
    category: 'Medical Supplies',
    image: medical,
    title: 'Medical Supplies',
    description: 'We are asking for your help to support our lack of Medical supply.',
    attributes: {
      Type: 'Medication',
      Name: 'Paracetamol',
      Use: 'To treat mild to moderate pain and to treat fever (high temperature).',
      Image: paracetamol,
      Count:20
   },
  },
  {
    id: 27,
    category: 'School Supplies',
    image: school,
    title: 'School Supplies',
    description: 'We are asking for your help to support our lack of School Supplies.',
    attributes: {
      Type: 'Books',
      Name: 'Pride and Prejudice',
      Genre: 'Novel/Drama',
      Count: 50
   },
  },
  {
    id: 28,
    category: 'School Supplies',
    image: school,
    title: 'School Supplies',
    description: 'We are asking for your help to support our lack of School Supplies.',
    attributes: {
      Type: 'Books',
      Name: 'Math',
      Genre: 'Textbooks',
      Count: 50
   },
  },
  {
    id: 29,
    category: 'School Supplies',
    image: school,
    title: 'School Supplies',
    description: 'We are asking for your help to support our lack of School Supplies.',
    attributes: {
      Type: 'Books',
      Name: 'Science',
      Genre: 'Textbooks',
      Count: 50
   },
  },
  {
    id: 30,
    category: 'Toys',
    image: toy,
    title: 'Toys',
    description: 'We are asking for your help to support our lack of Toys.' ,
    attributes: {
      Category: 'Sports',
      Type : 'Football',
      Age : '5-45',
      Gender : 'Both',
      Image : ball,
      Count : 100
   },
  },
  {
    id: 31,
    category: 'Toys',
    image: toy,
    title: 'Toys',
    description: 'We are asking for your help to support our lack of Toys.' ,
    attributes: {
      Category: 'Outdoor',
      Type : 'Play House',
      Age : '8-16',
      Gender : 'Both',
      Image : outdoor,
      Count : 10
   },
  },
    
    ];

const docData = [
  {
  id: 32,
  category: 'Medical Visits',
  image: medicalVisit,
  title: 'Medical Visit',
  description: 'The patient has been having some pain and inflation in the left part of his mouth',
  attributes: {
    Name: "Anwar Osama",
    Type: 'Medical Visit',
    Age: 45,
    Gender: "Male",
    Weight: "83 KG",
    Address: "Nasr City,Cairo",
    Specialty: "Dentistry",
    'Organization Name':'Team Health',
    'Google' : ''
 },
},
{
  id: 33,
  category: 'Medical Visits',
  image: medicalVisit,
  title: 'Medical Visit',
  description: 'Eye irritation, Runny nose ,Stuffy nose',
  attributes: {
    Name: "Anwar Osama",
    Type: 'Medical Visit',
    Age: 45,
    Gender: "Male",
    Weight: "83 KG",
    Address: "New Cairo,Cairo",
    Specialty: "Pediatrics",
    'Organization Name':'MEDICFACTOR',
    'Google' : ''
 },
},
{
  id: 34,
  category: 'Medical Visits',
  image: medicalVisit,
  title: 'Medical Visit',
  description: 'Nausea and Vomiting',
  attributes: {
    Name: "Anwar Osama",
    Type: 'Medical Visit',
    Age: 45,
    Gender: "Male",
    Weight: "83 KG",
    Address: "Helioplis, Masr el gedeeda",
    Specialty: "Surgery",
    'Organization Name':'Beta Aid',
    'Google' : ''
 },
},
{
  id: 35,
  category: 'Medical Visits',
  image: medicalVisit,
  title: 'Medical Visit',
  description: 'The patient has been having some pain and inflation in the left part of his mouth',
  attributes: {
    Name: "Anwar Osama",
    Type: 'Medical Visit',
    Age: 45,
    Gender: "Male",
    Weight: "83 KG",
    Address: "Alexanderia Cornich, Alexanderia",
    Specialty: "Neurology",
    'Organization Name':'Associate Helathcare',
    'Google' : ''
 },
},
{
  id: 36,
  category: 'Medical Visits',
  image: medicalVisit,
  title: 'Medical Visit',
  description: 'The patient has been having some pain and inflation in the left part of his mouth',
  attributes: {
    Name: "Anwar Osama",
    Type: 'Medical Visit',
    Age: 45,
    Gender: "Male",
    Weight: "83 KG",
    Address: "Banha",
    Specialty: "Psychiatry",
    'Organization Name':'Medifer',
    'Google' : ''
 },
},
{
  id: 37,
  category: 'Medical Visits',
  image: medicalVisit,
  title: 'Medical Visit',
  description: 'The patient has been having some pain and inflation in the left part of his mouth',
  attributes: {
    Name: "Anwar Osama",
    Type: 'Medical Visit',
    Age: 45,
    Gender: "Male",
    Weight: "83 KG",
    Address: "Port Said",
    Specialty: "Dermatology",
    'Organization Name':'Team Health',
    'Google' : ''
 },
},


]

const teacherData = [
  {
  id: 38,
  category: 'Teaching Posts',
  image: teachingClass,
  title: 'Teaching Posts',
  description: 'We are in need of a teacher to teach orphans at our orphanage',
  attributes: {
    'Number of students': 100,
    Address : '"Nasr City,Cairo"',
    Subjects: 'Math/English',
    'Google' : ''

 },
},
{
  id: 39,
  category: 'Teaching Posts',
  image: teachingClass,
  title: 'Teaching Posts',
  description: 'We are in need of a teacher to teach orphans at our orphanage',
  attributes: {
    'Number of students': 100,
    Address : '"New Cairo,Cairo"',
    Subjects: 'Science/Arabic',
    'Google' : ''

 },
},

{
  id: 40,
  category: 'Teaching Posts',
  image: teachingClass,
  title: 'Teaching Posts',
  description: 'We are in need of a teacher to teach orphans at our orphanage',
  attributes: {
    'Number of students': 100,
    Address : '"Helioplis, Masr el gedeeda"',
    Subjects: 'CS/Physical Excercise',
    'Google' : ''

 },
},

{
  id: 41,
  category: 'Teaching Posts',
  image: teachingClass,
  title: 'Teaching Posts',
  description: 'We are in need of a teacher to teach orphans at our orphanage',
  attributes: {
    'Number of students': 100,
    Address : 'Alexanderia Cornich, Alexanderia',
    Subjects: 'Religon/Quran',
    'Google' : ''

 },
},
{
  id: 42,
  category: 'Teaching Posts',
  image: teachingClass,
  title: 'Teaching Posts',
  description: 'We are in need of a teacher to teach orphans at our orphanage',
  attributes: {
    'Number of students': 100,
    Address : 'Banha',
    Subjects: 'Math/English',
    'Google' : ''

 },
},






]

export { allData, docData, teacherData };
