// ===== DATA STORE =====
const CREDENTIALS = { username: 'admin', password: 'admin123' };

const DEPARTMENTS = [
  { id: 'ECE', name: 'Electronics & Communication', icon: '📡', color: 'var(--gradient-primary)' },
  { id: 'CSE', name: 'Computer Science & Engineering', icon: '💻', color: 'var(--gradient-accent)' },
  { id: 'EEE', name: 'Electrical & Electronics', icon: '⚡', color: 'var(--gradient-warm)' },
  { id: 'MECH', name: 'Mechanical Engineering', icon: '⚙️', color: 'var(--gradient-green)' },
  { id: 'CIVIL', name: 'Civil Engineering', icon: '🏗️', color: 'linear-gradient(135deg, #ec4899, #8b5cf6)' },
];

const SUBJECTS = {
  ECE: {
    '1-1': [
      { code: 'MA101', name: 'Mathematics - I' },
      { code: 'PH102', name: 'Applied Physics' },
      { code: 'EE103', name: 'Basic Electrical Engineering' },
      { code: 'CS104', name: 'Programming in C' },
      { code: 'EN105', name: 'English Communication' },
      { code: 'ME106', name: 'Engineering Drawing' },
    ],
    '1-2': [
      { code: 'MA201', name: 'Mathematics - II' },
      { code: 'CH202', name: 'Applied Chemistry' },
      { code: 'EC203', name: 'Electronic Devices & Circuits' },
      { code: 'CS204', name: 'Data Structures' },
      { code: 'EN205', name: 'Environmental Science' },
      { code: 'ME206', name: 'Engineering Workshop' },
    ],
    '2-1': [
      { code: 'MA301', name: 'Mathematics - III' },
      { code: 'EC302', name: 'Signals & Systems' },
      { code: 'EC303', name: 'Analog Communications' },
      { code: 'EC304', name: 'Network Analysis' },
      { code: 'EC305', name: 'Digital Electronics' },
      { code: 'EC306', name: 'Electromagnetic Theory' },
    ],
    '2-2': [
      { code: 'EC208', name: 'Probability Theory and Stochastic Process', alias: 'PTSP' },
      { code: 'EC209', name: 'Electronic Circuit Analysis', alias: 'ECA' },
      { code: 'EC211', name: 'Linear and Digital IC Applications', alias: 'LDIC' },
      { code: 'EC213', name: 'Analog and Digital Communications', alias: 'ADC' },
      { code: 'EC215', name: 'Electromagnetic Fields and Transmission Lines', alias: 'EFTL' },
    ],
    '3-1': [
      { code: 'EC501', name: 'Microprocessors & Microcontrollers' },
      { code: 'EC502', name: 'Antennas & Wave Propagation' },
      { code: 'EC503', name: 'Digital Signal Processing' },
      { code: 'EC504', name: 'VLSI Design' },
      { code: 'EC505', name: 'Computer Organization' },
    ],
    '3-2': [
      { code: 'EC601', name: 'Embedded Systems' },
      { code: 'EC602', name: 'Wireless Communications' },
      { code: 'EC603', name: 'Optical Communications' },
      { code: 'EC604', name: 'Radar Systems' },
      { code: 'EC605', name: 'Digital Image Processing' },
    ],
    '4-1': [
      { code: 'EC701', name: 'Satellite Communications' },
      { code: 'EC702', name: 'Cellular & Mobile Communications' },
      { code: 'EC703', name: 'Elective - I' },
      { code: 'EC704', name: 'Elective - II' },
      { code: 'EC705', name: 'Project Work - I' },
    ],
    '4-2': [
      { code: 'EC801', name: 'Elective - III' },
      { code: 'EC802', name: 'Elective - IV' },
      { code: 'EC803', name: 'Project Work - II' },
      { code: 'EC804', name: 'Seminar' },
    ],
  },
  CSE: {
    '1-1': [
      { code: 'MA101', name: 'Mathematics - I' },
      { code: 'PH102', name: 'Applied Physics' },
      { code: 'CS103', name: 'Programming in C' },
      { code: 'EE104', name: 'Basic Electrical Engineering' },
      { code: 'EN105', name: 'English Communication' },
      { code: 'ME106', name: 'Engineering Drawing' },
    ],
    '1-2': [
      { code: 'MA201', name: 'Mathematics - II' },
      { code: 'CH202', name: 'Applied Chemistry' },
      { code: 'CS203', name: 'Data Structures' },
      { code: 'CS204', name: 'Digital Logic Design' },
      { code: 'EN205', name: 'Environmental Science' },
      { code: 'CS206', name: 'OOP with Java' },
    ],
    '2-1': [
      { code: 'MA301', name: 'Mathematics - III' },
      { code: 'CS302', name: 'Database Management Systems' },
      { code: 'CS303', name: 'Computer Organization' },
      { code: 'CS304', name: 'Operating Systems' },
      { code: 'CS305', name: 'Software Engineering' },
      { code: 'CS306', name: 'Discrete Mathematics' },
    ],
    '2-2': [
      { code: 'CS401', name: 'Computer Networks' },
      { code: 'CS402', name: 'Design & Analysis of Algorithms' },
      { code: 'CS403', name: 'Theory of Computation' },
      { code: 'CS404', name: 'Web Technologies' },
      { code: 'CS405', name: 'Compiler Design' },
      { code: 'CS406', name: 'Probability & Statistics' },
    ],
    '3-1': [
      { code: 'CS501', name: 'Machine Learning' },
      { code: 'CS502', name: 'Cryptography & Network Security' },
      { code: 'CS503', name: 'Artificial Intelligence' },
      { code: 'CS504', name: 'Cloud Computing' },
      { code: 'CS505', name: 'Data Mining' },
    ],
    '3-2': [
      { code: 'CS601', name: 'Deep Learning' },
      { code: 'CS602', name: 'Big Data Analytics' },
      { code: 'CS603', name: 'Internet of Things' },
      { code: 'CS604', name: 'Blockchain Technology' },
      { code: 'CS605', name: 'DevOps' },
    ],
    '4-1': [
      { code: 'CS701', name: 'Elective - I' },
      { code: 'CS702', name: 'Elective - II' },
      { code: 'CS703', name: 'Project Work - I' },
      { code: 'CS704', name: 'Internship' },
    ],
    '4-2': [
      { code: 'CS801', name: 'Elective - III' },
      { code: 'CS802', name: 'Project Work - II' },
      { code: 'CS803', name: 'Seminar' },
    ],
  },
  EEE: {
    '1-1': [
      { code: 'MA101', name: 'Mathematics - I' },
      { code: 'PH102', name: 'Applied Physics' },
      { code: 'EE103', name: 'Circuit Theory' },
      { code: 'CS104', name: 'Programming in C' },
      { code: 'EN105', name: 'English Communication' },
      { code: 'ME106', name: 'Engineering Drawing' },
    ],
    '1-2': [
      { code: 'MA201', name: 'Mathematics - II' },
      { code: 'CH202', name: 'Applied Chemistry' },
      { code: 'EE203', name: 'Electrical Machines - I' },
      { code: 'EE204', name: 'Electronic Devices & Circuits' },
      { code: 'EN205', name: 'Environmental Science' },
      { code: 'EE206', name: 'Network Analysis' },
    ],
    '2-1': [
      { code: 'MA301', name: 'Mathematics - III' },
      { code: 'EE302', name: 'Electrical Machines - II' },
      { code: 'EE303', name: 'Power Systems - I' },
      { code: 'EE304', name: 'Control Systems' },
      { code: 'EE305', name: 'Signals & Systems' },
      { code: 'EE306', name: 'Electromagnetic Theory' },
    ],
    '2-2': [
      { code: 'EE401', name: 'Power Systems - II' },
      { code: 'EE402', name: 'Power Electronics' },
      { code: 'EE403', name: 'Microprocessors' },
      { code: 'EE404', name: 'Digital Electronics' },
      { code: 'EE405', name: 'Electrical Measurements' },
    ],
    '3-1': [
      { code: 'EE501', name: 'Power System Protection' },
      { code: 'EE502', name: 'Electric Drives' },
      { code: 'EE503', name: 'Renewable Energy Sources' },
      { code: 'EE504', name: 'High Voltage Engineering' },
      { code: 'EE505', name: 'Utilization of Electrical Energy' },
    ],
    '3-2': [
      { code: 'EE601', name: 'Smart Grid Technology' },
      { code: 'EE602', name: 'FACTS Controllers' },
      { code: 'EE603', name: 'Elective - I' },
      { code: 'EE604', name: 'Elective - II' },
      { code: 'EE605', name: 'Mini Project' },
    ],
    '4-1': [
      { code: 'EE701', name: 'Elective - III' },
      { code: 'EE702', name: 'Elective - IV' },
      { code: 'EE703', name: 'Project Work - I' },
    ],
    '4-2': [
      { code: 'EE801', name: 'Project Work - II' },
      { code: 'EE802', name: 'Seminar' },
    ],
  },
  MECH: {
    '1-1': [
      { code: 'MA101', name: 'Mathematics - I' },
      { code: 'PH102', name: 'Applied Physics' },
      { code: 'ME103', name: 'Engineering Mechanics' },
      { code: 'CS104', name: 'Programming in C' },
      { code: 'EN105', name: 'English Communication' },
      { code: 'ME106', name: 'Engineering Drawing' },
    ],
    '1-2': [
      { code: 'MA201', name: 'Mathematics - II' },
      { code: 'CH202', name: 'Applied Chemistry' },
      { code: 'ME203', name: 'Thermodynamics' },
      { code: 'ME204', name: 'Strength of Materials' },
      { code: 'EN205', name: 'Environmental Science' },
      { code: 'ME206', name: 'Manufacturing Processes' },
    ],
    '2-1': [
      { code: 'MA301', name: 'Mathematics - III' },
      { code: 'ME302', name: 'Fluid Mechanics' },
      { code: 'ME303', name: 'Kinematics of Machinery' },
      { code: 'ME304', name: 'Material Science' },
      { code: 'ME305', name: 'Machine Drawing' },
      { code: 'ME306', name: 'Metrology & Measurements' },
    ],
    '2-2': [
      { code: 'ME401', name: 'Dynamics of Machinery' },
      { code: 'ME402', name: 'Heat Transfer' },
      { code: 'ME403', name: 'Design of Machine Elements' },
      { code: 'ME404', name: 'IC Engines' },
      { code: 'ME405', name: 'Industrial Engineering' },
    ],
    '3-1': [
      { code: 'ME501', name: 'CAD/CAM' },
      { code: 'ME502', name: 'Refrigeration & Air Conditioning' },
      { code: 'ME503', name: 'Finite Element Analysis' },
      { code: 'ME504', name: 'Automobile Engineering' },
      { code: 'ME505', name: 'Operations Research' },
    ],
    '3-2': [
      { code: 'ME601', name: 'Robotics' },
      { code: 'ME602', name: 'Power Plant Engineering' },
      { code: 'ME603', name: 'Elective - I' },
      { code: 'ME604', name: 'Elective - II' },
      { code: 'ME605', name: 'Mini Project' },
    ],
    '4-1': [
      { code: 'ME701', name: 'Elective - III' },
      { code: 'ME702', name: 'Elective - IV' },
      { code: 'ME703', name: 'Project Work - I' },
    ],
    '4-2': [
      { code: 'ME801', name: 'Project Work - II' },
      { code: 'ME802', name: 'Seminar' },
    ],
  },
  CIVIL: {
    '1-1': [
      { code: 'MA101', name: 'Mathematics - I' },
      { code: 'PH102', name: 'Applied Physics' },
      { code: 'CE103', name: 'Engineering Mechanics' },
      { code: 'CS104', name: 'Programming in C' },
      { code: 'EN105', name: 'English Communication' },
      { code: 'ME106', name: 'Engineering Drawing' },
    ],
    '1-2': [
      { code: 'MA201', name: 'Mathematics - II' },
      { code: 'CH202', name: 'Applied Chemistry' },
      { code: 'CE203', name: 'Strength of Materials' },
      { code: 'CE204', name: 'Surveying - I' },
      { code: 'EN205', name: 'Environmental Science' },
      { code: 'CE206', name: 'Building Materials & Construction' },
    ],
    '2-1': [
      { code: 'MA301', name: 'Mathematics - III' },
      { code: 'CE302', name: 'Fluid Mechanics' },
      { code: 'CE303', name: 'Structural Analysis - I' },
      { code: 'CE304', name: 'Surveying - II' },
      { code: 'CE305', name: 'Concrete Technology' },
      { code: 'CE306', name: 'Geology' },
    ],
    '2-2': [
      { code: 'CE401', name: 'Structural Analysis - II' },
      { code: 'CE402', name: 'Geotechnical Engineering' },
      { code: 'CE403', name: 'Hydraulics Engineering' },
      { code: 'CE404', name: 'Environmental Engineering' },
      { code: 'CE405', name: 'Transportation Engineering' },
    ],
    '3-1': [
      { code: 'CE501', name: 'Design of RC Structures' },
      { code: 'CE502', name: 'Foundation Engineering' },
      { code: 'CE503', name: 'Estimation & Costing' },
      { code: 'CE504', name: 'Irrigation Engineering' },
      { code: 'CE505', name: 'Elective - I' },
    ],
    '3-2': [
      { code: 'CE601', name: 'Design of Steel Structures' },
      { code: 'CE602', name: 'Construction Management' },
      { code: 'CE603', name: 'Elective - II' },
      { code: 'CE604', name: 'Elective - III' },
      { code: 'CE605', name: 'Mini Project' },
    ],
    '4-1': [
      { code: 'CE701', name: 'Elective - IV' },
      { code: 'CE702', name: 'Elective - V' },
      { code: 'CE703', name: 'Project Work - I' },
    ],
    '4-2': [
      { code: 'CE801', name: 'Project Work - II' },
      { code: 'CE802', name: 'Seminar' },
    ],
  },
};

/* ===== SECTION A STUDENTS (ECE) ===== */
const ECE_SECTION_A = [
  {roll:"245U1A0401",name:"ACHANA SANDEEP"},
  {roll:"245U1A0402",name:"AILI SANGEETHA"},
  {roll:"245U1A0403",name:"AJMEERA VARUN SANDESH"},
  {roll:"245U1A0404",name:"ANKOOR SURESH REDDY"},
  {roll:"245U1A0405",name:"APPALA RAKESH"},
  {roll:"245U1A0406",name:"BADAKA NANDU"},
  {roll:"245U1A0407",name:"BALAGONI VAISHNAVI"},
  {roll:"245U1A0408",name:"BALLIPU SATHVIKA"},
  {roll:"245U1A0409",name:"BANDAKADI HARISH KUMAR"},
  {roll:"245U1A0410",name:"BANOTH ANUSHA"},
  {roll:"245U1A0411",name:"BANOTH SANTOSH"},
  {roll:"245U1A0412",name:"BATTU HARISH YADAV"},
  {roll:"245U1A0413",name:"BHUKYA RAMCHARAN"},
  {roll:"245U1A0415",name:"BHUPALLY ABHILASH"},
  {roll:"245U1A0416",name:"BHURIGUPALLY SUJANA"},
  {roll:"245U1A0417",name:"BITLA SAI KIRAN REDDY"},
  {roll:"245U1A0418",name:"BODDU SHYAM PRASAD"},
  {roll:"245U1A0419",name:"BODDUPALLY MEGHANA"},
  {roll:"245U1A0420",name:"BODDUPALLY VENU"},
  {roll:"245U1A0421",name:"BOINAPALLI UDAY KIRAN"},
  {roll:"245U1A0422",name:"BOMMAGANI MAHESH"},
  {roll:"245U1A0423",name:"BURROJU PAVANI"},
  {roll:"245U1A0424",name:"BURUGU SWATHI"},
  {roll:"245U1A0425",name:"CHALLA SHANKAR"},
  {roll:"245U1A0426",name:"CHEGUNTA SUSHMA"},
  {roll:"245U1A0427",name:"CHENCHU ANJALI"},
  {roll:"245U1A0429",name:"CHINTHAKUNTA SRIRAM"},
  {roll:"245U1A0430",name:"CHUDA SUBBI CHARAN"},
  {roll:"245U1A0431",name:"D PUJITHA REDDY"},
  {roll:"245U1A0432",name:"DARSHAN BHURE"},
  {roll:"245U1A0433",name:"DENKALA VAMSHI"},
  {roll:"245U1A0434",name:"DERANGULA GOPI CHAND"},
  {roll:"245U1A0435",name:"DESIDI SHIVANI"},
  {roll:"245U1A0436",name:"DEVI RAKSHITHA"},
  {roll:"245U1A0437",name:"GADDAMPALLI TEJAVARDHAN"},
  {roll:"245U1A0438",name:"GAJJUBANDA HEMANTH"},
  {roll:"245U1A0439",name:"GARIMELLA UTTHAM"},
  {roll:"245U1A0440",name:"GODAVARTHI DEEKSITHA"},
  {roll:"245U1A0441",name:"GOLLA GEETHANJALI"},
  {roll:"245U1A0444",name:"GONELA VISHNU PRASAD"},
  {roll:"245U1A0445",name:"GUJJA PRANEETH"},
  {roll:"245U1A0446",name:"GUNIGANTI SANTHOSH"},
  {roll:"245U1A0447",name:"GUVVALA VISHAL"},
  {roll:"245U1A0448",name:"HANUMANTHU SRINADH"},
  {roll:"245U1A0449",name:"HARISH KANKALA"},
  {roll:"245U1A0450",name:"JAJULA RIKSHITHA"},
  {roll:"245U1A0451",name:"JANGAMGARI BALAJI"},
  {roll:"245U1A0452",name:"JANGANI CHANDRIKA"},
  {roll:"245U1A0453",name:"JANGIDI GRISHMA REDDY"},
  {roll:"245U1A0454",name:"K RADHIKA"},
  {roll:"245U1A0455",name:"KADTHALA CHANDANA"},
  {roll:"245U1A0457",name:"KATAKAM SRINIDHI"},
  {roll:"245U1A0458",name:"KATAM VAISHNAVI"},
  {roll:"245U1A0459",name:"KATHI SUJITH"},
  {roll:"245U1A0460",name:"KODEBOYINA HARSHA VARDHAN"},
  {roll:"245U1A0461",name:"KONDETI BRAHMAM"},
  {roll:"245U1A0462",name:"KOYYADA SIRI CHANDANA"},
  {roll:"245U1A0463",name:"KUNDARAPU FANITH REDDY"},
  {roll:"245U1A0464",name:"KURAPATI VINAY"},
  {roll:"245U1A0465",name:"KURELLA PRIYANKA"},
  {roll:"235U1A0434",name:"GUNDETI RAHUL"},
  {roll:"255U5A0401",name:"BONGU RAMESH"},
  {roll:"255U5A0402",name:"DORNALA RASAGNA"},
  {roll:"255U5A0403",name:"GOLLA MEGHANA"},
  {roll:"255U5A0404",name:"GUMMULA SREEJA"},
  {roll:"255U5A0405",name:"GURRAM SAMATHA"},
  {roll:"255U5A0406",name:"GURRAM VIGNESH CHANDRA"},
  {roll:"255U5A0407",name:"INDRAVATHI JAYENDER"},
];

/* ===== SECTION B STUDENTS (ECE) ===== */
const ECE_SECTION_B = [
  {roll:"245U1A0466",name:"MADGULA YASHWANTH REDDY"},
  {roll:"245U1A0467",name:"MAHAVIR PRIYADARSHINI"},
  {roll:"245U1A0468",name:"MALDODDI ARUN KUMAR"},
  {roll:"245U1A0469",name:"MALLIKANTI SATHVIKA"},
  {roll:"245U1A0470",name:"MANDA MANOJ KUMAR"},
  {roll:"245U1A0471",name:"MANDALI VAMSHI"},
  {roll:"245U1A0472",name:"MANDARI NITHIN"},
  {roll:"245U1A0474",name:"MEREDDY VAISHALI REDDY"},
  {roll:"245U1A0475",name:"MITTAPALLY SANKEERTHANA"},
  {roll:"245U1A0476",name:"MOHAMMED FEROZUDDIN"},
  {roll:"245U1A0478",name:"MUDUGULA VAMSHI KUMAR"},
  {roll:"245U1A0479",name:"MUKKERA PRIYA"},
  {roll:"245U1A0480",name:"NELAMARRI SANDEEP"},
  {roll:"245U1A0481",name:"P SREENU"},
  {roll:"245U1A0482",name:"PANDULA SAI"},
  {roll:"245U1A0483",name:"PANGA DEEKSHTHA"},
  {roll:"245U1A0485",name:"PASUPULATI TEJU DEEPU"},
  {roll:"245U1A0486",name:"PEESARI PURUSHOTHAM REDDY"},
  {roll:"245U1A0487",name:"PESIKAM JASWANTH VARMA"},
  {roll:"245U1A0488",name:"PISATI YUGENDAR REDDY"},
  {roll:"245U1A0491",name:"PRANAV RAVIKANTH GANGAPURE"},
  {roll:"245U1A0492",name:"PULIJALA SRIJA"},
  {roll:"245U1A0493",name:"PULKARAM MANOJ KUMAR"},
  {roll:"245U1A0494",name:"PURAM SRIJA"},
  {roll:"245U1A0495",name:"R NITISH KUMAR"},
  {roll:"245U1A0496",name:"RAGAM MANOJ YADAV"},
  {roll:"245U1A0497",name:"RAM AKSHAYA"},
  {roll:"245U1A0498",name:"RAMAVATH MADHU"},
  {roll:"245U1A0499",name:"RAMAVATH PANDU"},
  {roll:"245U1A04A0",name:"RAMAVATH VIKRAM"},
  {roll:"245U1A04A1",name:"RAVU MOUNIKA"},
  {roll:"245U1A04A2",name:"S SHIVA SAI KUMAR"},
  {roll:"245U1A04A3",name:"SAMALA MAHENDRA"},
  {roll:"245U1A04A4",name:"SAMBARI SUJANA"},
  {roll:"245U1A04A5",name:"SAMEENA KOUSAR"},
  {roll:"245U1A04A6",name:"SANDHA YASHWITHA"},
  {roll:"245U1A04A7",name:"SAROJ ANKITHA YADAV"},
  {roll:"245U1A04A8",name:"SASALA JAGADISH"},
  {roll:"245U1A04A9",name:"SILVERU AKSHITHA"},
  {roll:"245U1A04B0",name:"SRIPATHI AKSHITHA"},
  {roll:"245U1A04B1",name:"SUGUNAVATH VARUN TEJ NAIK"},
  {roll:"245U1A04B2",name:"T MADHU"},
  {roll:"245U1A04B3",name:"TEJAVATH AKHIL"},
  {roll:"245U1A04B4",name:"TEJAVATH SHARATH TEJA"},
  {roll:"245U1A04B5",name:"THATI DEVI SRI TRISHA"},
  {roll:"245U1A04B6",name:"THOTA HARIKRISHNA YADAV"},
  {roll:"245U1A04B7",name:"TOTLA RANGANATH"},
  {roll:"245U1A04B8",name:"TULAYELA AMOGE"},
  {roll:"245U1A04B9",name:"V VIJAYALAXMI"},
  {roll:"245U1A04C0",name:"V SRI RAM"},
  {roll:"245U1A04C1",name:"VALISHETTI SRIJA"},
  {roll:"245U1A04C2",name:"VALLEPU SHIVAJI"},
  {roll:"245U1A04C3",name:"VANAPALLI SAI SRI CHANDANA"},
  {roll:"245U1A04C4",name:"VARKALA MADHUKAR REDDY"},
  {roll:"245U1A04C5",name:"VENKATAPURAM KOTESH"},
  {roll:"245U1A04C6",name:"WANNEKAR VANSH KUMAR"},
  {roll:"245U1A04C7",name:"YELAGANDULA VISHWATEJ"},
  {roll:"235U1A0466",name:"MEDAMONI SHIVA"},
  {roll:"235U1A0413",name:"BATHARAJU SREENADH"},
  {roll:"235U1A0419",name:"VENOSH KUMAR"},
  {roll:"235U1A0472",name:"NAKKA BANNI"},
  {roll:"235U1A0494",name:"P RAHUL"},
  {roll:"255U5A0408",name:"KODIGANTI LALU KUMAR"},
  {roll:"255U5A0409",name:"MIRYALA SAI KIRAN"},
  {roll:"255U5A0410",name:"MUSKE MYTHRI"},
  {roll:"255U5A0411",name:"PATHIPAKA RAJARAMANA"},
  {roll:"255U5A0412",name:"REGOTI SUMANTH CHANDRA"},
  {roll:"255U5A0413",name:"SHAIK ADWAIY"},
  {roll:"255U5A0414",name:"VANGALA BHOOMIKA"},
  {roll:"255U5A0415",name:"VORUGANTI CHARAN TEJA"},
];

// Generic name arrays for non-ECE departments
const FIRST_NAMES = [
  'Aarav', 'Aditi', 'Aditya', 'Akash', 'Ananya', 'Arjun', 'Bhavya', 'Chaitanya', 'Deepak', 'Divya',
  'Ganesh', 'Harsha', 'Ishaan', 'Jaya', 'Karthik', 'Kavya', 'Lakshmi', 'Manoj', 'Naveen', 'Nikhil',
  'Pooja', 'Priya', 'Rahul', 'Rajesh', 'Ravi', 'Sahithi', 'Sanjay', 'Shruti', 'Suresh', 'Tanvi',
  'Uma', 'Varun', 'Vijay', 'Yamini', 'Yashwanth', 'Abhinav', 'Bharati', 'Chandra', 'Durga', 'Esha',
  'Gopal', 'Hemanth', 'Janaki', 'Keerthi', 'Lokesh', 'Meghana', 'Nandini', 'Omkar', 'Pallavi', 'Radhika',
  'Sai', 'Tarun', 'Uday', 'Venkat', 'Wajeed', 'Yuvaraj', 'Zara', 'Amit', 'Bindu', 'Charan',
];

const LAST_NAMES = [
  'Reddy', 'Kumar', 'Sharma', 'Patel', 'Rao', 'Singh', 'Gupta', 'Devi', 'Naidu', 'Verma',
  'Chowdary', 'Prasad', 'Nair', 'Iyer', 'Pillai', 'Das', 'Mishra', 'Joshi', 'Desai', 'Kulkarni',
];

function generateStudents(dept, year, sem, section) {
  // Use real student data for ECE 2-2 only
  if (dept === 'ECE' && year === 2 && sem === 2) {
    const realData = section === 'A' ? ECE_SECTION_A : ECE_SECTION_B;
    return realData.map(s => ({
      rollNo: s.roll,
      name: s.name,
      mid1: {},
      mid2: {},
      quiz: {},
      PPT: '',
      assignment: '',
      endExam: '',
      courseSurvey: '',
      absent: false,
    }));
  }

  // Fallback: generate dummy students for other departments
  const students = [];
  const count = 30;
  const sectionOffset = section === 'A' ? 0 : 30;
  const yearStr = year.toString().padStart(1, '0');

  for (let i = 1; i <= count; i++) {
    const rollNum = i + sectionOffset;
    const rollNo = `${dept.substring(0, 2)}${yearStr}${sem}${section}${rollNum.toString().padStart(3, '0')}`;
    const firstName = FIRST_NAMES[(rollNum + sectionOffset * 2 + year * 3 + sem * 7) % FIRST_NAMES.length];
    const lastName = LAST_NAMES[(rollNum + sectionOffset + year * 5 + sem * 11) % LAST_NAMES.length];
    students.push({
      rollNo,
      name: `${firstName} ${lastName}`,
      mid1: {},
      mid2: {},
      quiz: {},
      PPT: '',
      assignment: '',
      endExam: '',
      courseSurvey: '',
      absent: false,
    });
  }
  return students;
}

// ===== APP STATE =====
let state = {
  loggedIn: false,
  currentDept: null,
  currentYear: null,
  currentSem: null,
  currentSubject: null,
  currentSection: null,
  currentAssessTab: 'mid1',
  currentConfigTab: 'mid1'
};

// ===== DOM REFERENCES =====
const shell = document.getElementById('app-shell');
const viewContainer = document.getElementById('view-container');
const viewsSource = document.getElementById('views-source');

const views = {
  login: document.getElementById('login-view'),
  dashboard: document.getElementById('dashboard-view'),
  yearSem: document.getElementById('yearsem-view'),
  subjects: document.getElementById('subjects-view'),
  marks: document.getElementById('marks-view'),
};

// Initialization: Move views to shell
document.addEventListener('DOMContentLoaded', () => {
    // Move views from source to container
    ['dashboard-view', 'yearsem-view', 'subjects-view', 'marks-view'].forEach(id => {
        const v = document.getElementById(id);
        if (v) viewContainer.appendChild(v);
    });
});

// ===== NAVIGATION =====
function showView(viewName) {
  Object.values(views).forEach(v => v.classList.remove('active'));
  views[viewName].classList.add('active');
}

function navigateTo(viewName) {
  if (viewName === 'login') {
    shell.style.display = 'none';
    views.login.style.display = 'flex';
    views.login.classList.add('active');
  } else {
    views.login.style.display = 'none';
    shell.style.display = 'flex';
    showView(viewName);
    updateSidebarNav(viewName);
  }
}

function updateSidebarNav(viewName) {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    if (viewName === 'dashboard') document.getElementById('nav-dashboard').classList.add('active');
}

// ===== LOGIN =====
// Load credentials from storage if available
const storedCreds = localStorage.getItem('avniet_admin_credentials');
if (storedCreds) {
  const parsed = JSON.parse(storedCreds);
  CREDENTIALS.username = parsed.username;
  CREDENTIALS.password = parsed.password;
}

function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorEl = document.getElementById('login-error');

  if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
    state.loggedIn = true;
    errorEl.textContent = '';
    renderDashboard();
    navigateTo('dashboard');
  } else {
    errorEl.textContent = '⚠️ Invalid username or password.';
    document.getElementById('password').value = '';
  }
}

// ===== FORGOT PASSWORD =====
function openForgotPasswordModal() {
  document.getElementById('new-username').value = '';
  document.getElementById('new-password').value = '';
  document.getElementById('forgot-password-modal').classList.add('active');
}

function closeForgotPasswordModal() {
  document.getElementById('forgot-password-modal').classList.remove('active');
}

function handleResetPassword(e) {
  e.preventDefault();
  const newUsername = document.getElementById('new-username').value.trim();
  const newPassword = document.getElementById('new-password').value.trim();
  
  if (newUsername && newPassword) {
    CREDENTIALS.username = newUsername;
    CREDENTIALS.password = newPassword;
    localStorage.setItem('avniet_admin_credentials', JSON.stringify({ username: newUsername, password: newPassword }));
    closeForgotPasswordModal();
    showToast('✅ Credentials updated successfully! Please login.', 'success');
  }
}

function handleLogout() {
  state = {
    loggedIn: false,
    currentDept: null,
    currentYear: null,
    currentSem: null,
    currentSubject: null,
    currentSection: null,
  };
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  navigateTo('login');
}

// ===== DASHBOARD =====
function renderDashboard() {
  const grid = document.getElementById('dept-grid');
  grid.innerHTML = DEPARTMENTS.map(dept => `
    <div class="dept-card" style="--card-accent: ${dept.color}" onclick="selectDepartment('${dept.id}')">
      <div class="dept-icon" style="background: ${dept.color}">${dept.icon}</div>
      <h3>${dept.id}</h3>
      <p>${dept.name}</p>
    </div>
  `).join('');
  updateBreadcrumb(['Dashboard']);
}

// ===== YEAR/SEM SELECTION =====
function selectDepartment(deptId) {
  state.currentDept = deptId;
  renderYearSem();
  navigateTo('yearSem');
}

function renderYearSem() {
  const grid = document.getElementById('yearsem-grid');
  const icons = ['📘', '📗', '📙', '📕'];
  const semIcons = ['1️⃣', '2️⃣'];
  let html = '';

  for (let year = 1; year <= 4; year++) {
    for (let sem = 1; sem <= 2; sem++) {
      const key = `${year}-${sem}`;
      const subjs = SUBJECTS[state.currentDept]?.[key];
      if (!subjs) continue;
      html += `
        <div class="year-sem-card" onclick="selectYearSem(${year}, ${sem})">
          <div class="ys-icon">${icons[year - 1]}</div>
          <h3>${year}${getOrdinal(year)} Year - Sem ${sem}</h3>
          <p>${subjs.length} Subjects</p>
        </div>
      `;
    }
  }

  grid.innerHTML = html;
  document.getElementById('yearsem-dept-name').textContent = `${state.currentDept} Department`;
  updateBreadcrumb(['Dashboard', state.currentDept]);
}

function getOrdinal(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

// ===== SUBJECTS =====
function selectYearSem(year, sem) {
  state.currentYear = year;
  state.currentSem = sem;
  renderSubjects();
  navigateTo('subjects');
}

function renderSubjects() {
  const key = `${state.currentYear}-${state.currentSem}`;
  const subjects = SUBJECTS[state.currentDept]?.[key] || [];
  const list = document.getElementById('subjects-list');

  document.getElementById('subjects-title').textContent =
    `${state.currentDept} - ${state.currentYear}${getOrdinal(state.currentYear)} Year, Semester ${state.currentSem}`;

  list.innerHTML = subjects.map(sub => {
    const savedA = getStorageKey(sub.code, 'A');
    const savedB = getStorageKey(sub.code, 'B');
    const hasDataA = localStorage.getItem(savedA);
    const hasDataB = localStorage.getItem(savedB);
    let statusHtml = '';
    if (hasDataA || hasDataB) {
      const parts = [];
      if (hasDataA) parts.push('Sec A ✓');
      if (hasDataB) parts.push('Sec B ✓');
      statusHtml = `<span class="subject-status saved">${parts.join(' | ')}</span>`;
    } else {
      statusHtml = `<span class="subject-status pending">Pending</span>`;
    }
    return `
      <div class="subject-card">
        <div class="subject-info">
          <span class="sub-code">${sub.code}</span>
          <span class="sub-name">${sub.name}</span>
        </div>
        <div class="subject-actions">
          ${statusHtml}
          <div class="action-buttons">
            <button class="btn-icon" onclick="openConfigModal('${sub.code}', '${sub.name}')" title="Configure CO-PO Mapping">
              ⚙️
            </button>
            <button class="btn-enter-marks" onclick="openSectionModal('${sub.code}', '${sub.name}')">
              📝 Enter Marks
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  updateBreadcrumb(['Dashboard', state.currentDept, `${state.currentYear}-${state.currentSem}`]);
}

// ===== CONFIGURATION MODAL =====
function openConfigModal(subCode, subName) {
  state.currentSubject = { code: subCode, name: subName };
  document.getElementById('config-subject-name').textContent = `${subCode} - ${subName}`;
  
  // Initialize config if not exists
  const configKey = `config_${state.currentDept}_${state.currentYear}_${state.currentSem}_${subCode}`;
  let config = localStorage.getItem(configKey);
  
  if (!config) {
    // Default config structure
    config = {
      mid1: { 
        q1: { maxMarks: 5, mappedCO: 'CO1' },
        q2: { maxMarks: 5, mappedCO: 'CO2' },
        q3: { maxMarks: 5, mappedCO: 'CO3' },
        q4: { maxMarks: 5, mappedCO: 'CO4' },
        q5: { maxMarks: 5, mappedCO: 'CO5' },
        q6: { maxMarks: 5, mappedCO: 'CO1' },
      },
      mid2: { 
        q1: { maxMarks: 5, mappedCO: 'CO1' },
        q2: { maxMarks: 5, mappedCO: 'CO2' },
        q3: { maxMarks: 5, mappedCO: 'CO3' },
        q4: { maxMarks: 5, mappedCO: 'CO4' },
        q5: { maxMarks: 5, mappedCO: 'CO5' },
        q6: { maxMarks: 6, mappedCO: 'CO1' },
      },
      quiz: {
        totalMaxMarks: 10,
        questions: {
          q1: { maxMarks: 5, mappedCO: 'CO1' },
          q2: { maxMarks: 5, mappedCO: 'CO2' }
        }
      },
      assignment: { maxMarks: 5, mappedCO: 'CO3' },
      ppt: { maxMarks: 5, mappedCO: 'CO4' },
      copo: {
        CO1: { PO1: 3, PO2: 3, PO3: 2, PO4: 0, PO5: 0, PO6: 0, PO7: 0, PO8: 0, PO9: 0, PO10: 0, PO11: 0, PO12: 0, PSO1: 0, PSO2: 0 },
        CO2: { PO1: 3, PO2: 3, PO3: 2, PO4: 0, PO5: 0, PO6: 0, PO7: 0, PO8: 0, PO9: 0, PO10: 0, PO11: 0, PO12: 0, PSO1: 0, PSO2: 0 },
        CO3: { PO1: 3, PO2: 3, PO3: 2, PO4: 0, PO5: 0, PO6: 0, PO7: 0, PO8: 0, PO9: 0, PO10: 0, PO11: 0, PO12: 0, PSO1: 0, PSO2: 0 },
        CO4: { PO1: 3, PO2: 3, PO3: 2, PO4: 0, PO5: 0, PO6: 0, PO7: 0, PO8: 0, PO9: 0, PO10: 0, PO11: 0, PO12: 0, PSO1: 0, PSO2: 0 },
        CO5: { PO1: 3, PO2: 3, PO3: 2, PO4: 0, PO5: 0, PO6: 0, PO7: 0, PO8: 0, PO9: 0, PO10: 0, PO11: 0, PO12: 0, PSO1: 0, PSO2: 0 }
      }
    };
    localStorage.setItem(configKey, JSON.stringify(config));
  } else {
    config = JSON.parse(config);
  }
  
  state.currentConfig = config;
  switchConfigTab('mid');
  document.getElementById('config-modal').classList.add('active');
}

function closeConfigModal() {
  document.getElementById('config-modal').classList.remove('active');
  state.currentConfig = null;
}

function switchConfigTab(tab) {
  // Update active button
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  const container = document.getElementById('config-content');
  const config = state.currentConfig;
  
  if (tab === 'mid1' || tab === 'mid2') {
    const midName = tab === 'mid1' ? 'MID-I' : 'MID-II';
    container.innerHTML = `
      <h4>${midName} Configuration</h4>
      <p class="page-subtitle" style="margin-bottom: 15px;">Define mappings for ${midName} questions.</p>
      <div class="config-grid">
        <div class="config-row config-row-header">
          <div>Question</div>
          <div>Max Marks</div>
          <div>Mapped CO</div>
        </div>
        ${Object.keys(config[tab]).map(q => `
          <div class="config-row">
            <div style="font-weight:500;">${q.toUpperCase()}</div>
            <input type="number" min="1" max="100" class="form-control" value="${config[tab][q].maxMarks}" onchange="updateConfig('${tab}', '${q}', 'maxMarks', this.value)">
            <select class="form-control" onchange="updateConfig('${tab}', '${q}', 'mappedCO', this.value)">
              ${[1,2,3,4,5].map(i => `<option value="CO${i}" ${config[tab][q].mappedCO === `CO${i}` ? 'selected' : ''}>CO${i}</option>`).join('')}
            </select>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tab === 'quiz') {
    container.innerHTML = `
      <h4>Quiz Configuration</h4>
      <div class="config-grid">
        <div class="config-row config-row-header">
          <div>Part</div>
          <div>Max Marks</div>
          <div>Mapped CO</div>
        </div>
        ${Object.keys(config.quiz.questions).map(q => `
          <div class="config-row">
            <div style="font-weight:500;">${q.toUpperCase()}</div>
            <input type="number" min="1" max="20" class="form-control" value="${config.quiz.questions[q].maxMarks}" onchange="updateConfig('quiz.questions', '${q}', 'maxMarks', this.value)">
            <select class="form-control" onchange="updateConfig('quiz.questions', '${q}', 'mappedCO', this.value)">
              ${[1,2,3,4,5].map(i => `<option value="CO${i}" ${config.quiz.questions[q].mappedCO === `CO${i}` ? 'selected' : ''}>CO${i}</option>`).join('')}
            </select>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tab === 'assignment') {
    container.innerHTML = `
      <h4>Assignment Configuration</h4>
      <div class="config-grid">
        <div class="config-row">
          <div style="font-weight:500;">Total Marks</div>
          <input type="number" min="1" max="20" class="form-control" value="${config.assignment.maxMarks}" onchange="updateConfig('assignment', null, 'maxMarks', this.value)">
        </div>
        <div class="config-row">
          <div style="font-weight:500;">Default Mapped CO</div>
           <select class="form-control" onchange="updateConfig('assignment', null, 'mappedCO', this.value)">
              ${[1,2,3,4,5].map(i => `<option value="CO${i}" ${config.assignment.mappedCO === `CO${i}` ? 'selected' : ''}>CO${i}</option>`).join('')}
            </select>
        </div>
      </div>
    `;
  } else if (tab === 'copo') {
    const POs = ['PO1','PO2','PO3','PO4','PO5','PO6','PO7','PO8','PO9','PO10','PO11','PO12','PSO1','PSO2'];
    const COs = ['CO1','CO2','CO3','CO4','CO5'];
    
    container.innerHTML = `
      <h4>CO-PO Mapping Matrix</h4>
      <p class="page-subtitle" style="margin-bottom: 15px;">Enter values (0-3) for relationships.</p>
      <div style="overflow-x: auto;">
        <table class="copo-table">
          <thead>
            <tr>
              <th>CO \\ PO</th>
              ${POs.map(po => `<th>${po}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${COs.map(co => `
              <tr>
                <td style="font-weight:600; background:var(--bg);">${co}</td>
                ${POs.map(po => `
                  <td>
                    <input type="number" min="0" max="3" value="${config.copo[co][po] || 0}" onchange="updateCOPO('${co}', '${po}', this.value)">
                  </td>
                `).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
}

function updateConfig(section, subSection, field, value) {
  if (section === 'mid1' || section === 'mid2') {
    state.currentConfig[section][subSection][field] = isNaN(value) ? value : Number(value);
  } else if (section === 'quiz.questions') {
    state.currentConfig.quiz.questions[subSection][field] = isNaN(value) ? value : Number(value);
  } else if (section === 'assignment' || section === 'ppt') {
    state.currentConfig[section][field] = isNaN(value) ? value : Number(value);
  }
}

function updateCOPO(co, po, value) {
  state.currentConfig.copo[co][po] = Number(value);
}

function saveSubjectConfig() {
  const configKey = `config_${state.currentDept}_${state.currentYear}_${state.currentSem}_${state.currentSubject.code}`;
  localStorage.setItem(configKey, JSON.stringify(state.currentConfig));
  closeConfigModal();
  showToast('✅ Configuration saved successfully.', 'success');
}

// ===== MARKS LOGIN MODAL =====
function openSectionModal(subCode, subName) {
  state.currentSubject = { code: subCode, name: subName };
  document.getElementById('marks-login-subject-name').textContent = `${subCode} - ${subName}`;
  document.getElementById('marks-username').value = '';
  document.getElementById('marks-password').value = '';
  document.getElementById('marks-login-error').textContent = '';
  document.getElementById('marks-login-modal').classList.add('active');
}

function closeMarksLoginModal() {
  document.getElementById('marks-login-modal').classList.remove('active');
}

function handleMarksLogin(e) {
  e.preventDefault();
  const username = document.getElementById('marks-username').value.trim();
  const password = document.getElementById('marks-password').value.trim().toUpperCase();
  const errorEl = document.getElementById('marks-login-error');
  
  const subCode = state.currentSubject.code.toUpperCase();
  const subAlias = (state.currentSubject.alias || '').toUpperCase();

  if (username === 'admin' && (password === subCode || (subAlias && password === subAlias))) {
    closeMarksLoginModal();
    // Open actual section modal
    document.getElementById('modal-subject-name').textContent = `${state.currentSubject.code} - ${state.currentSubject.name}`;
    document.getElementById('section-modal').classList.add('active');
  } else {
    errorEl.textContent = `⚠️ Invalid credentials. Use admin / ${state.currentSubject.code}`;
  }
}

// ===== SECTION MODAL =====
function closeSectionModal() {
  document.getElementById('section-modal').classList.remove('active');
}

function selectSection(section) {
  state.currentSection = section;
  closeSectionModal();
  renderMarksSheet();
  navigateTo('marks');
}

// ===== MARKS SHEET =====
function getStorageKey(subCode, section) {
  return `marks_${state.currentDept}_${state.currentYear}_${state.currentSem}_${subCode}_${section}`;
}

function renderMarksSheet() {
  const sub = state.currentSubject;
  const section = state.currentSection;

  document.getElementById('marks-subject-title').textContent = `${sub.code} - ${sub.name}`;
  document.getElementById('marks-dept-badge').textContent = state.currentDept;
  document.getElementById('marks-year-badge').textContent =
    `${state.currentYear}${getOrdinal(state.currentYear)} Year, Sem ${state.currentSem}`;
  document.getElementById('marks-section-badge').textContent = `Section ${section}`;

  // Load or generate student data
  const storageKey = getStorageKey(sub.code, section);
  let students;
  const saved = localStorage.getItem(storageKey);

  if (saved) {
    students = JSON.parse(saved);
  } else {
    students = generateStudents(state.currentDept, state.currentYear, state.currentSem, section);
  }

  renderMarksTable(students);
  updateStats(students);
  updateBreadcrumb([
    'Dashboard',
    state.currentDept,
    `${state.currentYear}-${state.currentSem}`,
    `${sub.code} (Sec ${section})`
  ]);
}

function renderMarksTable(students) {
  const tbody = document.getElementById('marks-tbody');
  const thead = document.getElementById('marks-thead');
  
  // Ensure config exists
  const subCode = state.currentSubject.code;
  const configKey = `config_${state.currentDept}_${state.currentYear}_${state.currentSem}_${subCode}`;
  let config = localStorage.getItem(configKey);
  if (!config) {
     // fallback dummy config if not opened config yet
     config = {
        mid1: { q1: {maxMarks:5}, q2:{maxMarks:5}, q3:{maxMarks:5}, q4:{maxMarks:5} },
        mid2: { q1: {maxMarks:5}, q2:{maxMarks:5}, q3:{maxMarks:5}, q4:{maxMarks:5} },
        quiz: { questions: { q1:{maxMarks:5}, q2:{maxMarks:5} } },
        assignment: { maxMarks: 5 }, ppt: { maxMarks: 5 }
     };
  } else {
     config = JSON.parse(config);
  }

  // Generate Headers based on active tab
  let headerHtml = `<tr>
    <th>S.No</th>
    <th class="sticky-col first">Roll No</th>
    <th class="sticky-col second">Student Name</th>`;
  
  const currentTab = state.currentAssessTab;
  
  if (currentTab === 'mid1' || currentTab === 'mid2') {
    const qs = Object.keys(config[currentTab]);
    qs.forEach(q => { headerHtml += `<th>Q-${q.toUpperCase()} (${config[currentTab][q].maxMarks})</th>`; });
  } else if (currentTab === 'quiz') {
    const qs = Object.keys(config.quiz.questions);
    qs.forEach(q => { headerHtml += `<th>Q-${q.toUpperCase()} (${config.quiz.questions[q].maxMarks})</th>`; });
  } else if (currentTab === 'assign') {
    headerHtml += `<th>Assignment (${config.assignment.maxMarks})</th><th>PPT (${config.ppt.maxMarks})</th>`;
  } else if (currentTab === 'end') {
    headerHtml += `<th>End Exam (60)</th><th>Survey (3)</th>`;
  }
  
  headerHtml += `
    <th class="total-col">Total</th>
    <th>Absent</th>
  </tr>`;
  
  thead.innerHTML = headerHtml;

  tbody.innerHTML = students.map((s, i) => {
    // Migration for student marks
    if (s.mid && !s.mid1) {
      s.mid1 = JSON.parse(JSON.stringify(s.mid));
      s.mid2 = {};
      delete s.mid;
    }

    const totalInternal = calculateTotal(s);
    const rowClass = s.absent ? 'absent-row' : (totalInternal === 0 && !s.absent && hasMarksEntered(s) ? 'zero-row' : '');
    const totalClass = totalInternal < 14 ? 'total-marks low' : 'total-marks';

    let rowHtml = `
      <tr class="${rowClass}" id="row-${i}">
        <td class="sno">${i + 1}</td>
        <td class="roll-no sticky-col first">${s.rollNo}</td>
        <td class="student-name sticky-col second">${s.name}</td>`;
        
    if (currentTab === 'mid1' || currentTab === 'mid2') {
      Object.keys(config[currentTab]).forEach(q => {
        rowHtml += `<td><input type="number" step="0.5" id="${currentTab}-${q}-${i}" min="0" max="${config[currentTab][q].maxMarks}" value="${s[currentTab] ? s[currentTab][q] || '' : ''}" ${s.absent ? 'disabled' : ''} onchange="updateDetailedMark(${i}, '${currentTab}', '${q}', this.value)" placeholder="0"></td>`;
      });
    } else if (currentTab === 'quiz') {
      Object.keys(config.quiz.questions).forEach(q => {
        rowHtml += `<td><input type="number" step="0.5" id="quiz-${q}-${i}" min="0" max="${config.quiz.questions[q].maxMarks}" value="${s.quiz ? s.quiz[q] || '' : ''}" ${s.absent ? 'disabled' : ''} onchange="updateDetailedMark(${i}, 'quiz', '${q}', this.value)" placeholder="0"></td>`;
      });
    } else if (currentTab === 'assign') {
      rowHtml += `
        <td><input type="number" step="0.5" id="assign-${i}" min="0" max="${config.assignment.maxMarks}" value="${s.assignment}" ${s.absent ? 'disabled' : ''} onchange="updateMark(${i}, 'assignment', this.value)" placeholder="0"></td>
        <td><input type="number" step="0.5" id="ppt-${i}" min="0" max="${config.ppt.maxMarks}" value="${s.PPT}" ${s.absent ? 'disabled' : ''} onchange="updateMark(${i}, 'PPT', this.value)" placeholder="0"></td>`;
    } else if (currentTab === 'end') {
      rowHtml += `
        <td><input type="number" step="0.5" id="end-${i}" min="0" max="60" value="${s.endExam || ''}" ${s.absent ? 'disabled' : ''} onchange="updateMark(${i}, 'endExam', this.value)" placeholder="0"></td>
        <td><input type="number" step="0.5" id="survey-${i}" min="0" max="3" value="${s.courseSurvey || ''}" ${s.absent ? 'disabled' : ''} onchange="updateMark(${i}, 'courseSurvey', this.value)" placeholder="0"></td>`;
    }
    
    rowHtml += `
        <td class="total-col ${totalClass}" id="total-${i}">${totalInternal}</td>
        <td>
          <input type="checkbox" id="absent-${i}" ${s.absent ? 'checked' : ''}
            onchange="toggleAbsent(${i}, this.checked)">
        </td>
      </tr>
    `;
    return rowHtml;
  }).join('');

  // Store reference for manipulation
  window._currentStudents = students;
}

function calculateTotal(student) {
  if (student.absent) return 0;
  
  let mid1Sum = 0;
  let mid2Sum = 0;
  let quizSum = 0;
  
  if (student.mid1) { Object.values(student.mid1).forEach(v => mid1Sum += (Number(v) || 0)); }
  if (student.mid2) { Object.values(student.mid2).forEach(v => mid2Sum += (Number(v) || 0)); }
  if (student.quiz) { Object.values(student.quiz).forEach(v => quizSum += (Number(v) || 0)); }

  // Average Mid: (Mid1 + Mid2) / 2
  let avgMid = 0;
  if (mid1Sum > 0 && mid2Sum > 0) avgMid = (mid1Sum + mid2Sum) / 2;
  else if (mid1Sum > 0) avgMid = mid1Sum;
  else if (mid2Sum > 0) avgMid = mid2Sum;

  let total = avgMid + quizSum + (Number(student.assignment) || 0) + (Number(student.PPT) || 0);
  return total;
}

function hasMarksEntered(student) {
  let hasMid1 = student.mid1 && Object.values(student.mid1).some(v => v !== '');
  let hasMid2 = student.mid2 && Object.values(student.mid2).some(v => v !== '');
  let hasQuiz = student.quiz && Object.values(student.quiz).some(v => v !== '');
  return hasMid1 || hasMid2 || hasQuiz || student.PPT !== '' || student.assignment !== '' || student.endExam !== '';
}

function switchAssessTab(tab) {
  state.currentAssessTab = tab;
  document.querySelectorAll('.assess-tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  renderMarksTable(window._currentStudents);
}

function updateDetailedMark(index, type, qKey, value) {
  const students = window._currentStudents;
  const numVal = parseInt(value);
  
  // retrieve config for validation
  const subCode = state.currentSubject.code;
  const configKey = `config_${state.currentDept}_${state.currentYear}_${state.currentSem}_${subCode}`;
  let config = JSON.parse(localStorage.getItem(configKey));
  
  if (!config) return;
  
  let max = 0;
  if(type === 'mid') max = config.mid[qKey].maxMarks;
  if(type === 'quiz') max = config.quiz.questions[qKey].maxMarks;

  if (numVal > max) {
    showToast(`Marks cannot exceed ${max}`, 'error');
    document.getElementById(`${type}-${qKey}-${index}`).value = students[index][type][qKey] || '';
    return;
  }
  
  if (isNaN(numVal) || value === '') {
      delete students[index][type][qKey];
  } else {
      students[index][type][qKey] = numVal;
  }
  
  updateRowStyling(index);
}

function updateMark(index, field, value) {
  const students = window._currentStudents;
  const numVal = parseInt(value);
  
  const subCode = state.currentSubject.code;
  const configKey = `config_${state.currentDept}_${state.currentYear}_${state.currentSem}_${subCode}`;
  let config = JSON.parse(localStorage.getItem(configKey));

  // Validate ranges
  if (field === 'assignment') {
    let max = config ? config.assignment.maxMarks : 5;
    if (numVal > max) {
      showToast(`Assignment marks cannot exceed ${max}`, 'error');
      document.getElementById(`assign-${index}`).value = students[index][field];
      return;
    }
  } else if (field === 'PPT') {
    let max = config ? config.ppt.maxMarks : 5;
    if (numVal > max) {
      showToast(`PPT marks cannot exceed ${max}`, 'error');
      document.getElementById(`ppt-${index}`).value = students[index][field];
      return;
    }
  } else if (field === 'endExam') {
    if (numVal > 60) {
      showToast('End Exam marks cannot exceed 60', 'error');
      document.getElementById(`end-${index}`).value = students[index][field] || '';
      return;
    }
  } else if (field === 'courseSurvey') {
     if (numVal > 3) {
      showToast('Survey max is 3', 'error');
      document.getElementById(`survey-${index}`).value = students[index][field] || '';
      return;
    }
  }

  students[index][field] = value === '' ? '' : Math.max(0, numVal);
  updateRowStyling(index);
}

function updateRowStyling(index) {
  const students = window._currentStudents;
  const total = calculateTotal(students[index]);
  const row = document.getElementById(`row-${index}`);
  
  // Total cell is the second to last cell (before checkbox)
  const cells = row.querySelectorAll('td');
  const totalCell = cells[cells.length - 2];
  
  totalCell.textContent = total;
  totalCell.className = total < 14 ? 'total-marks low' : 'total-marks';

  if (total === 0 && !students[index].absent && hasMarksEntered(students[index])) {
    row.classList.add('zero-row');
  } else {
    row.classList.remove('zero-row');
  }

  updateStats(students);
}

function toggleAbsent(index, checked) {
  const students = window._currentStudents;
  students[index].absent = checked;

  if (checked) {
    students[index].mid = {};
    students[index].quiz = {};
    students[index].PPT = '';
    students[index].assignment = '';
    students[index].endExam = '';
    students[index].courseSurvey = '';
  }

  // Re-render just that row and update stats
  renderMarksTable(students);
  updateStats(students);
}

// ===== SAVE =====
function saveMarks() {
  const students = window._currentStudents;
  const sub = state.currentSubject;
  const storageKey = getStorageKey(sub.code, state.currentSection);

  localStorage.setItem(storageKey, JSON.stringify(students));
  showToast('✅ Marks saved successfully!', 'success');
}

// ===== STATISTICS =====
function updateStats(students) {
  const studentsWithMarks = students.filter(s => !s.absent && hasMarksEntered(s));
  
  const range26to30 = studentsWithMarks.filter(s => { const t = calculateTotal(s); return t >= 26 && t <= 30; });
  const range19to25 = studentsWithMarks.filter(s => { const t = calculateTotal(s); return t >= 19 && t <= 25; });
  const range14to19 = studentsWithMarks.filter(s => { const t = calculateTotal(s); return t >= 14 && t < 19; });
  const below14 = studentsWithMarks.filter(s => { const t = calculateTotal(s); return t < 14; });
  
  const absentees = students.filter(s => s.absent);
  const zeroMarks = studentsWithMarks.filter(s => calculateTotal(s) === 0);
  const totalStudents = students.length;

  // Update stat values
  document.getElementById('stat-total').textContent = totalStudents;
  document.getElementById('stat-26to30').textContent = range26to30.length;
  document.getElementById('stat-19to25').textContent = range19to25.length;
  document.getElementById('stat-14to19').textContent = range14to19.length;
  document.getElementById('stat-below14').textContent = below14.length;
  document.getElementById('stat-absent').textContent = absentees.length;
  document.getElementById('stat-zero').textContent = zeroMarks.length;

  // Update student lists
  const formatList = (list) => list.length > 0 
    ? list.map(s => `<div class="student-item">${s.rollNo} - ${s.name} (${calculateTotal(s)})</div>`).join('')
    : '<div class="student-item">None</div>';

  document.getElementById('list-26to30').innerHTML = formatList(range26to30);
  document.getElementById('list-19to25').innerHTML = formatList(range19to25);
  document.getElementById('list-14to19').innerHTML = formatList(range14to19);
  document.getElementById('list-below14').innerHTML = formatList(below14);
  document.getElementById('list-absent').innerHTML = formatList(absentees);
  document.getElementById('list-zero').innerHTML = formatList(zeroMarks);
}

// ===== DOWNLOAD EXCEL =====
function downloadExcel() {
  const students = window._currentStudents;
  const sub = state.currentSubject;
  
  const subCode = state.currentSubject.code;
  const configKey = `config_${state.currentDept}_${state.currentYear}_${state.currentSem}_${subCode}`;
  let config = JSON.parse(localStorage.getItem(configKey));
  
  const mid1Qs = Object.keys(config.mid1);
  const mid2Qs = Object.keys(config.mid2);
  const quizQs = Object.keys(config.quiz.questions);

  let html = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <style>
        table { border-collapse: collapse; font-family: Arial, sans-serif; }
        th, td { border: 1px solid #dddddd; padding: 8px; text-align: center; }
        th { background-color: #f2f2f2; font-weight: bold; }
        .red-text { color: red; font-weight: bold; }
        .header-title { font-size: 18px; font-weight: bold; text-align: center; background-color: #f7fafc; border: 1px solid #e2e8f0; }
        .attain-header { background-color: #ebf8ff; font-weight: bold; }
        .total-row { background-color: #edf2f7; font-weight: bold; }
      </style>
    </head>
    <body>
      <table>
        <tr><td colspan="${5 + mid1Qs.length + mid2Qs.length + quizQs.length}" class="header-title">AVNIET Marks Management System</td></tr>
        <tr><td colspan="${5 + mid1Qs.length + mid2Qs.length + quizQs.length}" class="header-title">${state.currentDept} - ${state.currentYear} Year, Sem ${state.currentSem} - Section ${state.currentSection}</td></tr>
        <tr><td colspan="${5 + mid1Qs.length + mid2Qs.length + quizQs.length}" class="header-title">Subject: ${sub.code} - ${sub.name}</td></tr>
        <tr><td colspan="${5 + mid1Qs.length + mid2Qs.length + quizQs.length}" style="border: none; height: 10px;"></td></tr>
        <tr>
          <th>S.No</th>
          <th>Roll No</th>
          <th>Student Name</th>
  `;
  
  mid1Qs.forEach(q => { html += `<th>MID1 ${q.toUpperCase()}</th>`; });
  mid2Qs.forEach(q => { html += `<th>MID2 ${q.toUpperCase()}</th>`; });
  quizQs.forEach(q => { html += `<th>Quiz ${q.toUpperCase()}</th>`; });
  
  html += `
          <th>Assgn</th>
          <th>PPT</th>
          <th>End Exam</th>
          <th>Survey</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
  `;

  students.forEach((s, i) => {
    const totalInternal = calculateTotal(s);
    let status = '';
    let cellClass = '';
    
    if (s.absent) {
      status = 'ABSENT';
    } else if (totalInternal === 0 && hasMarksEntered(s)) {
      status = 'ZERO';
    } else if (totalInternal >= 26) {
      status = 'EXCELLENT (26-30)';
    } else if (totalInternal >= 19) {
      status = 'GOOD (19-25)';
    } else if (totalInternal >= 14) {
      status = 'AVERAGE (14-19)';
    } else {
      status = 'FAIL';
      cellClass = 'class="red-text"';
    }

    html += `
        <tr>
          <td>${i + 1}</td>
          <td ${cellClass}>${s.rollNo}</td>
          <td style="text-align: left;" ${cellClass}>${s.name}</td>`;
          
    mid1Qs.forEach(q => {
        html += `<td>${s.absent ? 'AB' : (s.mid1 && s.mid1[q] !== undefined ? s.mid1[q] : '-')}</td>`;
    });
    mid2Qs.forEach(q => {
        html += `<td>${s.absent ? 'AB' : (s.mid2 && s.mid2[q] !== undefined ? s.mid2[q] : '-')}</td>`;
    });
    quizQs.forEach(q => {
        html += `<td>${s.absent ? 'AB' : (s.quiz && s.quiz[q] !== undefined ? s.quiz[q] : '-')}</td>`;
    });
          
    html += `
          <td>${s.absent ? 'AB' : (s.assignment || 0)}</td>
          <td>${s.absent ? 'AB' : (s.PPT || 0)}</td>
          <td>${s.absent ? 'AB' : (s.endExam || '-')}</td>
          <td>${s.absent ? 'AB' : (s.courseSurvey || '-')}</td>
          <td>${totalInternal}</td>
          <td ${cellClass}>${status}</td>
        </tr>`;
  });

  // Summary
  const nonAbsent = students.filter(s => !s.absent && hasMarksEntered(s));
  const range26to30 = nonAbsent.filter(s => { const t = calculateTotal(s); return t >= 26 && t <= 30; }).length;
  const range19to25 = nonAbsent.filter(s => { const t = calculateTotal(s); return t >= 19 && t <= 25; }).length;
  const range14to19 = nonAbsent.filter(s => { const t = calculateTotal(s); return t >= 14 && t < 19; }).length;
  const below14 = nonAbsent.filter(s => { const t = calculateTotal(s); return t < 14; }).length;
  const absentees = students.filter(s => s.absent).length;
  const zeroMarks = nonAbsent.filter(s => calculateTotal(s) === 0).length;

  html += `
        <tr><td colspan="15" style="border: none;">&nbsp;</td></tr>
        <tr><td colspan="4" class="header-title">Summary Statistics</td><td colspan="11" style="border: none;"></td></tr>
        <tr><td colspan="3">Total Students</td><td style="text-align: left;">${students.length}</td><td colspan="11" style="border: none;"></td></tr>
        <tr><td colspan="3">Absentees</td><td style="text-align: left;">${absentees}</td><td colspan="11" style="border: none;"></td></tr>
        <tr><td colspan="3">Zero Marks</td><td style="text-align: left;">${zeroMarks}</td><td colspan="11" style="border: none;"></td></tr>
        <tr><td colspan="3">EXCELLENT (26-30)</td><td style="text-align: left;">${range26to30}</td><td colspan="11" style="border: none;"></td></tr>
        <tr><td colspan="3">GOOD (19-25)</td><td style="text-align: left;">${range19to25}</td><td colspan="11" style="border: none;"></td></tr>
        <tr><td colspan="3">AVERAGE (14-19)</td><td style="text-align: left;">${range14to19}</td><td colspan="11" style="border: none;"></td></tr>
        <tr><td colspan="3">FAIL (Below 14)</td><td style="text-align: left;" class="red-text">${below14}</td><td colspan="11" style="border: none;"></td></tr>
  `;

  // --- ATTAINMENT CALCULATION FOR EXPORT ---
  const studentsWithMarks = students.filter(s => !s.absent && hasMarksEntered(s));
  if (config && studentsWithMarks.length > 0) {
      const componentMaxPerCO = {
        mid1: { CO1:0, CO2:0, CO3:0, CO4:0, CO5:0 },
        mid2: { CO1:0, CO2:0, CO3:0, CO4:0, CO5:0 },
        quiz: { CO1:0, CO2:0, CO3:0, CO4:0, CO5:0 },
        assignment: { CO1:0, CO2:0, CO3:0, CO4:0, CO5:0 },
        ppt: { CO1:0, CO2:0, CO3:0, CO4:0, CO5:0 }
      };
      Object.keys(config.mid1).forEach(q => { componentMaxPerCO.mid1[config.mid1[q].mappedCO] += config.mid1[q].maxMarks; });
      Object.keys(config.mid2).forEach(q => { componentMaxPerCO.mid2[config.mid2[q].mappedCO] += config.mid2[q].maxMarks; });
      Object.keys(config.quiz.questions).forEach(q => { componentMaxPerCO.quiz[config.quiz.questions[q].mappedCO] += config.quiz.questions[q].maxMarks; });
      componentMaxPerCO.assignment[config.assignment.mappedCO] += config.assignment.maxMarks;
      componentMaxPerCO.ppt[config.ppt.mappedCO] += config.ppt.maxMarks;
      
      let endSum = 0; let endCount = 0;
      let surveySum = 0; let surveyCount = 0;
      let attainData = {
         CO1: { mid1S: 0, mid2S: 0, quizS: 0, assignS: 0, pptS: 0 },
         CO2: { mid1S: 0, mid2S: 0, quizS: 0, assignS: 0, pptS: 0 },
         CO3: { mid1S: 0, mid2S: 0, quizS: 0, assignS: 0, pptS: 0 },
         CO4: { mid1S: 0, mid2S: 0, quizS: 0, assignS: 0, pptS: 0 },
         CO5: { mid1S: 0, mid2S: 0, quizS: 0, assignS: 0, pptS: 0 }
      };

      studentsWithMarks.forEach(s => {
          if (s.endExam !== '') { endSum += Number(s.endExam); endCount++; }
          if (s.courseSurvey !== '') { surveySum += Number(s.courseSurvey); surveyCount++; }
          
          ["CO1","CO2","CO3","CO4","CO5"].forEach(co => {
              Object.keys(config.mid1).forEach(q => { if(config.mid1[q].mappedCO === co && s.mid1 && s.mid1[q] !== undefined) attainData[co].mid1S += s.mid1[q]; });
              Object.keys(config.mid2).forEach(q => { if(config.mid2[q].mappedCO === co && s.mid2 && s.mid2[q] !== undefined) attainData[co].mid2S += s.mid2[q]; });
              Object.keys(config.quiz.questions).forEach(q => { if(config.quiz.questions[q].mappedCO === co && s.quiz && s.quiz[q] !== undefined) attainData[co].quizS += s.quiz[q]; });
              if (config.assignment.mappedCO === co && s.assignment !== '') attainData[co].assignS += Number(s.assignment);
              if (config.ppt.mappedCO === co && s.PPT !== '') attainData[co].pptS += Number(s.PPT);
          });
      });
      
      const getScale = (percentage) => {
          if (percentage >= 0.6) return 3;
          if (percentage >= 0.5) return 2;
          if (percentage >= 0.4) return 1;
          return 0;
      }
      const endAttain = getScale((endCount > 0 ? (endSum / endCount) : 0) / 60);
      const surveyAvg = surveyCount > 0 ? (surveySum / surveyCount) : 0;
      
      html += `
        <tr><td colspan="15" style="border: none;">&nbsp;</td></tr>
        <tr><td colspan="6" class="header-title">CO Attainment Results</td><td colspan="9" style="border: none;"></td></tr>
        <tr><th>CO</th><th>Internal</th><th>End Exam</th><th>Direct</th><th>Indirect</th><th>Final</th><td colspan="9" style="border: none;"></td></tr>
      `;

      ["CO1","CO2","CO3","CO4","CO5"].forEach(co => {
          let n = studentsWithMarks.length;
          if (n > 0) {
              let sMid1 = componentMaxPerCO.mid1[co] > 0 ? getScale((attainData[co].mid1S / n) / componentMaxPerCO.mid1[co]) : null;
              let sMid2 = componentMaxPerCO.mid2[co] > 0 ? getScale((attainData[co].mid2S / n) / componentMaxPerCO.mid2[co]) : null;
              let sQuiz = componentMaxPerCO.quiz[co] > 0 ? getScale((attainData[co].quizS / n) / componentMaxPerCO.quiz[co]) : null;
              let sAssign = componentMaxPerCO.assignment[co] > 0 ? getScale((attainData[co].assignS / n) / componentMaxPerCO.assignment[co]) : null;
              let sPPT = componentMaxPerCO.ppt[co] > 0 ? getScale((attainData[co].pptS / n) / componentMaxPerCO.ppt[co]) : null;

              let internalExamAttain = 0;
              let midAttain = 0;
              if (sMid1 !== null && sMid2 !== null) midAttain = (sMid1 + sMid2) / 2;
              else if (sMid1 !== null) midAttain = sMid1;
              else if (sMid2 !== null) midAttain = sMid2;

              if (midAttain !== null && sQuiz !== null) internalExamAttain = (midAttain + sQuiz) / 2;
              else if (midAttain !== null) internalExamAttain = midAttain;
              else if (sQuiz !== null) internalExamAttain = sQuiz;

              let iA = (0.75 * internalExamAttain) + (0.125 * (sAssign || 0)) + (0.125 * (sPPT || 0));
              let directAttain = (0.6 * endAttain) + (0.4 * iA);
              let finalAttain = (0.7 * directAttain) + (0.3 * surveyAvg);
              
              attainData[co].finalAttain = finalAttain;

              html += `<tr><td>${co}</td><td>${iA.toFixed(2)}</td><td>${endAttain.toFixed(2)}</td><td>${directAttain.toFixed(2)}</td><td>${surveyAvg.toFixed(2)}</td><td style="background-color:#d9ead3; font-weight:bold;">${finalAttain.toFixed(2)}</td><td colspan="9" style="border: none;"></td></tr>`;
          }
      });
      
      // PO Attainment
      html += `
        <tr><td colspan="15" style="border: none;">&nbsp;</td></tr>
        <tr><td colspan="15" class="header-title">PO Attainment Results</td></tr>
        <tr><th>PO / PSO</th><th>Attainment Level</th><td colspan="13" style="border: none;"></td></tr>
      `;
      
      const POs = ['PO1','PO2','PO3','PO4','PO5','PO6','PO7','PO8','PO9','PO10','PO11','PO12','PSO1','PSO2'];
      POs.forEach(po => {
            let sum = 0; let count = 0;
            ["CO1","CO2","CO3","CO4","CO5"].forEach(co => {
                if (config.copo && config.copo[co]) {
                   let mapVal = config.copo[co][po];
                   if (mapVal > 0 && attainData[co].finalAttain !== undefined) {
                      sum += (attainData[co].finalAttain * mapVal) / 3;
                      count++;
                   }
                }
            });
            let poAttain = count > 0 ? (sum / count) : 0;
             html += `<tr><td style="font-weight:bold;">${po}</td><td>${poAttain.toFixed(2)}</td><td colspan="13" style="border: none;"></td></tr>`;
        });
  }

  html += `
      </table>
    </body>
    </html>
  `;

  const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Detailed_Marks_${state.currentDept}_${state.currentYear}-${state.currentSem}_${sub.name}.xls`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('📥 Excel file downloaded!', 'success');
}

// ===== BREADCRUMB =====
function updateBreadcrumb(items) {
  const bc = document.getElementById('breadcrumb');
  if (!bc) return;

  bc.innerHTML = items.map((item, i) => {
    const isLast = i === items.length - 1;
    let onclick = '';

    if (!isLast) {
      if (i === 0) onclick = `onclick="goToDashboard()"`;
      else if (i === 1) onclick = `onclick="goToDept()"`;
      else if (i === 2) onclick = `onclick="goToSubjects()"`;
    }

    return `
      ${i > 0 ? '<span class="separator">›</span>' : ''}
      <span class="${isLast ? 'active' : ''}" ${onclick}>${item}</span>
    `;
  }).join('');
}

// Navigation helpers
function goToDashboard() {
  renderDashboard();
  navigateTo('dashboard');
}

function goToDept() {
  renderYearSem();
  navigateTo('yearSem');
}

function goToSubjects() {
  renderSubjects();
  navigateTo('subjects');
}

function goBackFromMarks() {
  renderSubjects();
  navigateTo('subjects');
}

// ===== TOAST =====
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast ${type} show`;

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ===== ATTAINMENT LOGIC =====

function closeAttainmentModal() {
  document.getElementById('attainment-modal').classList.remove('active');
}

function calculateAndShowAttainment() {
  const students = window._currentStudents.filter(s => !s.absent && hasMarksEntered(s));
  const subCode = state.currentSubject.code;
  const configKey = `config_${state.currentDept}_${state.currentYear}_${state.currentSem}_${subCode}`;
  let config = JSON.parse(localStorage.getItem(configKey));
  
  if (!config) {
    showToast('Please configure CO-PO mapping first ⚙️', 'error');
    return;
  }
  
  if (students.length === 0) {
    showToast('No student marks entered yet', 'error');
    return;
  }

  // 1. Calculate Component Averages per CO
  const components = ['mid', 'quiz', 'assignment', 'ppt'];
  window._attainmentData = {
     CO1: { mid: {s:0, m:0}, quiz: {s:0, m:0}, assignment: {s:0, m:0}, ppt: {s:0, m:0} },
     CO2: { mid: {s:0, m:0}, quiz: {s:0, m:0}, assignment: {s:0, m:0}, ppt: {s:0, m:0} },
     CO3: { mid: {s:0, m:0}, quiz: {s:0, m:0}, assignment: {s:0, m:0}, ppt: {s:0, m:0} },
     CO4: { mid: {s:0, m:0}, quiz: {s:0, m:0}, assignment: {s:0, m:0}, ppt: {s:0, m:0} },
     CO5: { mid: {s:0, m:0}, quiz: {s:0, m:0}, assignment: {s:0, m:0}, ppt: {s:0, m:0} }
  };
  
  // Track counts to get averages later
  let counts = { CO1: 0, CO2: 0, CO3: 0, CO4: 0, CO5: 0 };
  let endSum = 0; let endCount = 0;
  let surveySum = 0; let surveyCount = 0;

  // Pre-calculate component max marks per CO from config
  const componentMaxPerCO = {
    mid1: { CO1:0, CO2:0, CO3:0, CO4:0, CO5:0 },
    mid2: { CO1:0, CO2:0, CO3:0, CO4:0, CO5:0 },
    quiz: { CO1:0, CO2:0, CO3:0, CO4:0, CO5:0 },
    assignment: { CO1:0, CO2:0, CO3:0, CO4:0, CO5:0 },
    ppt: { CO1:0, CO2:0, CO3:0, CO4:0, CO5:0 }
  };

  Object.keys(config.mid1).forEach(q => { componentMaxPerCO.mid1[config.mid1[q].mappedCO] += config.mid1[q].maxMarks; });
  Object.keys(config.mid2).forEach(q => { componentMaxPerCO.mid2[config.mid2[q].mappedCO] += config.mid2[q].maxMarks; });
  Object.keys(config.quiz.questions).forEach(q => { componentMaxPerCO.quiz[config.quiz.questions[q].mappedCO] += config.quiz.questions[q].maxMarks; });
  componentMaxPerCO.assignment[config.assignment.mappedCO] += config.assignment.maxMarks;
  componentMaxPerCO.ppt[config.ppt.mappedCO] += config.ppt.maxMarks;

  students.forEach(s => {
      // End Exam and Survey
      if (s.endExam !== '') { endSum += Number(s.endExam); endCount++; }
      if (s.courseSurvey !== '') { surveySum += Number(s.courseSurvey); surveyCount++; }
      
      ["CO1","CO2","CO3","CO4","CO5"].forEach(co => {
          let hasData = false;
          // MID1
          Object.keys(config.mid1).forEach(q => {
             if(config.mid1[q].mappedCO === co && s.mid1 && s.mid1[q] !== undefined) {
                 window._attainmentData[co].mid1.s += s.mid1[q];
                 hasData = true;
             }
          });
          // MID2
          Object.keys(config.mid2).forEach(q => {
             if(config.mid2[q].mappedCO === co && s.mid2 && s.mid2[q] !== undefined) {
                 window._attainmentData[co].mid2.s += s.mid2[q];
                 hasData = true;
             }
          });
          // Quiz
          Object.keys(config.quiz.questions).forEach(q => {
             if(config.quiz.questions[q].mappedCO === co && s.quiz && s.quiz[q] !== undefined) {
                 window._attainmentData[co].quiz.s += s.quiz[q];
                 hasData = true;
             }
          });
          // Assignment
          if (config.assignment.mappedCO === co && s.assignment !== '') {
              window._attainmentData[co].assignment.s += Number(s.assignment);
              hasData = true;
          }
          // PPT
          if (config.ppt.mappedCO === co && s.PPT !== '') {
              window._attainmentData[co].ppt.s += Number(s.PPT);
              hasData = true;
          }
          if (hasData) counts[co]++;
      });
  });
  
  const getScale = (percentage) => {
      if (percentage >= 0.6) return 3;
      if (percentage >= 0.5) return 2;
      if (percentage >= 0.4) return 1;
      return 0;
  }
  
  const endAvg = endCount > 0 ? (endSum / endCount) : 0;
  const surveyAvg = surveyCount > 0 ? (surveySum / surveyCount) : 0;
  const endAttain = getScale(endAvg / 60);

  ["CO1","CO2","CO3","CO4","CO5"].forEach(co => {
      let d = window._attainmentData[co];
      let n = counts[co];
      if (n > 0) {
          // Scale for each component
          let sMid1 = componentMaxPerCO.mid1[co] > 0 ? getScale((d.mid1.s / n) / componentMaxPerCO.mid1[co]) : null;
          let sMid2 = componentMaxPerCO.mid2[co] > 0 ? getScale((d.mid2.s / n) / componentMaxPerCO.mid2[co]) : null;
          let sQuiz = componentMaxPerCO.quiz[co] > 0 ? getScale((d.quiz.s / n) / componentMaxPerCO.quiz[co]) : null;
          let sAssign = componentMaxPerCO.assignment[co] > 0 ? getScale((d.assignment.s / n) / componentMaxPerCO.assignment[co]) : null;
          let sPPT = componentMaxPerCO.ppt[co] > 0 ? getScale((d.ppt.s / n) / componentMaxPerCO.ppt[co]) : null;

          // Mid Average
          let midAttain = 0;
          if (sMid1 !== null && sMid2 !== null) midAttain = (sMid1 + sMid2) / 2;
          else if (sMid1 !== null) midAttain = sMid1;
          else if (sMid2 !== null) midAttain = sMid2;

          // Internal Exam = Average of Mid and Quiz
          let internalExamAttain = 0;
          if (midAttain !== 0 && sQuiz !== null) internalExamAttain = (midAttain + sQuiz) / 2;
          else if (midAttain !== 0) internalExamAttain = midAttain;
          else if (sQuiz !== null) internalExamAttain = sQuiz;

          // Internal Attainment = 75% Internal Exam + 12.5% Assignment + 12.5% PPT
          let iA = (0.75 * internalExamAttain) + (0.125 * (sAssign || 0)) + (0.125 * (sPPT || 0));
          
          d.internalAttain = iA;
          d.endAttain = endAttain;
          d.directAttain = (0.6 * d.endAttain) + (0.4 * d.internalAttain);
          d.indirectAttain = surveyAvg;
          d.finalAttain = (0.7 * d.directAttain) + (0.3 * d.indirectAttain);
      } else {
          d.internalAttain = 0; d.endAttain = 0; d.directAttain = 0; d.indirectAttain = 0; d.finalAttain = 0;
      }
  });

  document.getElementById('attainment-subject-name').textContent = `${subCode} - ${state.currentSubject.name}`;
  switchAttainTab('co');
  document.getElementById('attainment-modal').classList.add('active');
}

function switchAttainTab(tab) {
  const modal = document.getElementById('attainment-modal');
  modal.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  const container = document.getElementById('attainment-content');
  const d = window._attainmentData;
  const config = state.currentConfig || JSON.parse(localStorage.getItem(`config_${state.currentDept}_${state.currentYear}_${state.currentSem}_${state.currentSubject.code}`));
  
  if (tab === 'co') {
    container.innerHTML = `
      <table class="copo-table" style="margin-top: 15px;">
        <thead>
          <tr style="background:var(--accent-blue); color:white;">
            <th>COs</th>
            <th>Internal Attainment</th>
            <th>End Exam Attainment</th>
            <th>Direct Attainment (60% End + 40% Int)</th>
            <th>Indirect Attain (Survey)</th>
            <th>FINAL ATTAINMENT (70% D + 30% Ind)</th>
          </tr>
        </thead>
        <tbody>
          ${["CO1","CO2","CO3","CO4","CO5"].map(co => `
            <tr>
              <td style="font-weight:bold;">${co}</td>
              <td>${d[co].internalAttain.toFixed(2)}</td>
              <td>${d[co].endAttain.toFixed(2)}</td>
              <td>${d[co].directAttain.toFixed(2)}</td>
              <td>${d[co].indirectAttain.toFixed(2)}</td>
              <td style="font-weight:bold; background:var(--hover-bg);">${d[co].finalAttain.toFixed(2)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:10px;">
        * Internal calculated based on config mapping. Final = 0.7 * Direct + 0.3 * Indirect.
      </div>
    `;
  } else if (tab === 'po') {
    const POs = ['PO1','PO2','PO3','PO4','PO5','PO6','PO7','PO8','PO9','PO10','PO11','PO12','PSO1','PSO2'];
    const COs = ['CO1','CO2','CO3','CO4','CO5'];
    
    // Calculate PO attainment = Average of (Final CO Attainment * Matrix Value / 3) for all mapped COs
    let poAttain = {};
    POs.forEach(po => {
        let sum = 0; let count = 0;
        COs.forEach(co => {
            let mapVal = config.copo[co][po];
            if (mapVal > 0) {
               sum += (d[co].finalAttain * mapVal) / 3;
               count++;
            }
        });
        poAttain[po] = count > 0 ? (sum / count) : 0;
    });

    container.innerHTML = `
      <p style="margin-top:10px;">PO Attainment based on mapping matrix and final CO attainments.</p>
      <div style="overflow-x: auto;">
        <table class="copo-table" style="margin-top: 15px;">
          <thead>
            <tr style="background:var(--accent-purple); color:white;">
              <th>PO / PSO</th>
              <th>Calculated Attainment Level</th>
            </tr>
          </thead>
          <tbody>
            ${POs.map(po => `
              <tr>
                <td style="font-weight:bold;">${po}</td>
                <td>
                  <div style="display:flex; align-items:center; gap:10px;">
                    <div style="flex:1; background:var(--border); height:8px; border-radius:4px; overflow:hidden;">
                       <div style="width:${(poAttain[po]/3)*100}%; background:var(--accent-purple); height:100%;"></div>
                    </div>
                    <span>${poAttain[po].toFixed(2)} / 3.00</span>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
}

function showPasswordHint(event) {
  event.preventDefault();
  showToast('💡 Password is the Subject Code (e.g., ECA, DSA)', 'info');
}

// ===== STORAGE REPAIR =====
function repairLocalStorage() {
  let repairedCount = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    // Repair CONFIGS
    if (key.startsWith('config_')) {
      try {
        let config = JSON.parse(localStorage.getItem(key));
        if (config && config.mid && !config.mid1) {
          console.log(`Repairing config for key: ${key}`);
          config.mid1 = JSON.parse(JSON.stringify(config.mid));
          config.mid2 = JSON.parse(JSON.stringify(config.mid));
          delete config.mid;
          localStorage.setItem(key, JSON.stringify(config));
          repairedCount++;
        }
      } catch (e) { console.warn(`Could not repair key ${key}`, e); }
    }
    // Repair MARKS
    if (key.startsWith('marks_')) {
      try {
        let students = JSON.parse(localStorage.getItem(key));
        if (Array.isArray(students)) {
           let changed = false;
           students.forEach(s => {
             if (s.mid && !s.mid1) {
               s.mid1 = JSON.parse(JSON.stringify(s.mid));
               s.mid2 = {};
               delete s.mid;
               changed = true;
             }
             if (s.name__1) { delete s.name__1; changed = true; } // Cleanup accidental dupes
           });
           if (changed) {
             console.log(`Repairing marks for key: ${key}`);
             localStorage.setItem(key, JSON.stringify(students));
             repairedCount++;
           }
        }
      } catch (e) { console.warn(`Could not repair key ${key}`, e); }
    }
  }
  if (repairedCount > 0) {
    console.log(`Storage repair complete. ${repairedCount} entries fixed.`);
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  repairLocalStorage(); // Fix old data formats before anything else
  document.getElementById('login-form').addEventListener('submit', handleLogin);
  navigateTo('login');
});
