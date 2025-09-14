const users = [
    {
        name: "Aparna Sen",
        bio: "Data Science undergrad | Loves sketching & cinematography",
        pic: "https://i.pinimg.com/1200x/7f/7b/32/7f7b3218ae80430c0f917c7f971b577c.jpg"
    },
    {
        name: "Mouni Sharma",
        bio: "Creative writer | Coffee enthusiast",
        pic: "https://i.pinimg.com/736x/b3/d7/f7/b3d7f718e66eecc96ef203abcf3f11c7.jpg"
    },
    {
        name: "Rohan Sen",
        bio: "Frontend developer | Loves React & Anime",
        pic: "https://i.pinimg.com/736x/8b/ea/a5/8beaa57f27f37ba8675a5719d26c993c.jpg"
    },
    {
        name: "Priya Kapoor",
        bio: "Photographer | Traveler | Nature lover",
        pic: "https://i.pinimg.com/736x/17/41/a5/1741a50f67885cc8d4113ba0cc523c11.jpg"
    },
    {
        name: "Aditya Roy",
        bio: "AI/ML enthusiast | Gamer | Music lover",
        pic: "https://i.pinimg.com/736x/91/fb/62/91fb62f5b35d3dfcfc110b06c2a5605a.jpg"
    },
    {
        name: "Sneha Verma",
        bio: "UX designer | Minimalist lifestyle",
        pic: "https://i.pinimg.com/1200x/93/d7/45/93d745e6771abfa6f37c95d5b95f9fbb.jpg"
    },
    {
        name: "Kabir Khan",
        bio: "Backend developer | Node.js & Express",
        pic: "https://i.pinimg.com/736x/46/fa/cc/46faccb98a3729cdcc298255de147aa7.jpg"
    },
    {
        name: "Ishita Mehra",
        bio: "Content creator | Vlogger | Loves fashion",
        pic: "https://i.pinimg.com/736x/3e/bf/29/3ebf296f2301c437f06938fdf2866787.jpg"
    },
    {
        name: "Rahul Gupta",
        bio: "Python developer | Machine Learning explorer",
        pic: "https://i.pinimg.com/736x/e3/87/f2/e387f2b0124ef2797a7e2379d72d82a8.jpg"
    },
    {
        name: "Ananya Singh",
        bio: "Traveler | Food blogger | Dog lover",
        pic: "https://i.pinimg.com/736x/1e/23/33/1e233331c09a447e7b03c32aeb2fabef.jpg"
    },
    {
        name: "Dev Patel",
        bio: "App developer | Tech geek",
        pic: "https://i.pinimg.com/736x/20/55/51/2055511b1d3d4219cc6a869ecc7da293.jpg"
    },
    {
        name: "Megha Reddy",
        bio: "Classical dancer | Artist | Teacher",
        pic: "https://i.pinimg.com/736x/4c/bf/b7/4cbfb703e9bcf469e344261fdeda64f1.jpg"
    },
    {
        name: "Vikram Joshi",
        bio: "Cybersecurity analyst | Ethical hacker",
        pic: "https://i.pinimg.com/736x/4e/89/ee/4e89ee7025916a00475e5b6c9b125426.jpg"
    },
    {
        name: "Tanya Arora",
        bio: "Graphic designer | Loves colors",
        pic: "https://i.pinimg.com/1200x/f5/28/ad/f528ad8d6987b19d7e05fcf5cf810230.jpg"
    },
    {
        name: "Arjun Mehta",
        bio: "Stock trader | Loves finance & investing",
        pic: "https://i.pinimg.com/736x/8d/e0/08/8de008205c73de000182447f5892415a.jpg"
    },
    {
        name: "Nisha Sharma",
        bio: "Yoga trainer | Wellness advocate",
        pic: "https://i.pinimg.com/736x/bd/65/84/bd658481aaee39652b24305d933e8759.jpg"
    },
    {
        name: "Sahil Kapoor",
        bio: "Game developer | Unity & Unreal lover",
        pic: "https://i.pinimg.com/736x/ba/0e/a7/ba0ea74b07017a2661f8ae2d9e717ac8.jpg"
    },
    {
        name: "Ritu Malhotra",
        bio: "Singer | Music producer",
        pic: "https://i.pinimg.com/1200x/57/1b/03/571b03309a4129acdffdf32fd1e60510.jpg"
    },
    {
        name: "Karan Yadav",
        bio: "Fitness coach | Bodybuilding enthusiast",
        pic: "https://i.pinimg.com/736x/54/ba/9b/54ba9be7870f15265b0cc0a7a1978ebf.jpg"
    },
    {
        name: "Simran Gill",
        bio: "Fashion model | Influencer",
        pic: "https://i.pinimg.com/736x/fc/0b/92/fc0b924aba0a33a21e08aeacadd8b5c1.jpg"
    },
    {
        name: "Manish Tiwari",
        bio: "Mechanical engineer | Automobiles lover",
        pic: "https://i.pinimg.com/736x/24/5b/44/245b44fa1f4d29dcd76434582962ce85.jpg"
    },
    {
        name: "Alisha Roy",
        bio: "Painter | Wall art enthusiast",
        pic: "https://i.pinimg.com/1200x/80/13/57/801357f90a76379a0c9ff086d94c6c78.jpg"
    },
    {
        name: "Farhan Ali",
        bio: "Musician | Guitarist | Performer",
        pic: "https://i.pinimg.com/736x/c1/f3/64/c1f3646bd04979226e04d4ad8519b2a5.jpg"
    },
    {
        name: "Kavya Iyer",
        bio: "Research scholar | Loves books",
        pic: "https://i.pinimg.com/736x/a0/bb/b7/a0bbb734c7811161a9d8eddca1258664.jpg"
    },
    {
        name: "Aman Chopra",
        bio: "Digital marketer | Ads strategist",
        pic: "https://i.pinimg.com/736x/ba/8e/62/ba8e62903b0f9a50b70c966df69fbf3e.jpg"
    },
    {
        name: "Rhea Banerjee",
        bio: "Student | Aspiring journalist",
        pic: "https://i.pinimg.com/736x/94/e2/f9/94e2f95cac2d4a969679a1e7526f8597.jpg"
    },
    {
        name: "Yash Mittal",
        bio: "Biker | Moto vlog enthusiast",
        pic: "https://i.pinimg.com/736x/a8/25/2e/a8252e9d70a3b4bcc0bac8937e6a6c6f.jpg"
    },
    {
        name: "Neha Gupta",
        bio: "Entrepreneur | Startup builder",
        pic: "https://i.pinimg.com/736x/fc/47/5d/fc475dab461045a545869e0eddba5253.jpg"
    },
    {
        name: "Harsh Vardhan",
        bio: "Doctor | Loves research & innovation",
        pic: "https://i.pinimg.com/736x/f6/22/9f/f6229fb611535e9324d1108dbbe9c0ae.jpg"
    },
    {
        name: "Pooja Saini",
        bio: "Architect | Loves modern design",
        pic: "https://i.pinimg.com/736x/d4/04/49/d40449f35928a202ed809edb9873dc6f.jpg"
    },
    {
        name: "Sandeep Rathi",
        bio: "Web developer | Coffee lover",
        pic: "https://i.pinimg.com/736x/11/a7/e9/11a7e9391cd269a959576bb2d391de7f.jpg"
    },
    {
        name: "Komal Thakur",
        bio: "Interior designer | Nature fan",
        pic: "https://i.pinimg.com/736x/e4/39/d6/e439d6ed14be8223f726c075c06c0a96.jpg"
    },
    {
        name: "Arvind Pillai",
        bio: "Cloud engineer | Traveler",
        pic: "https://i.pinimg.com/736x/86/44/76/864476264f495f5fe5ebb0b7369bc3da.jpg"
    },
    {
        name: "Divya Bansal",
        bio: "Fashion blogger | Animal lover",
        pic: "https://i.pinimg.com/736x/79/96/a1/7996a1465bd98f8a0af7046bdaeca0f6.jpg"
    },
    {
        name: "Prakash Shetty",
        bio: "Business analyst | Stock trader",
        pic: "https://i.pinimg.com/736x/5f/af/e1/5fafe1c5f046ffd544cf7e6c3db4bbc8.jpg"
    },

    {
        name: "Meera Saxena",
        bio: "Content writer | Poet",
        pic: "https://i.pinimg.com/736x/20/e6/fe/20e6fe7beb8ccee12230330e061f7dcd.jpg"
    },
    {
        name: "Ajay Kulkarni",
        bio: "Software tester | Trekking fan",
        pic: "https://i.pinimg.com/736x/7b/86/dc/7b86dc282e9f3436de01e85d0905a501.jpg"
    },
    {
        name: "Pallavi Chauhan",
        bio: "Researcher | History buff",
        pic: "https://i.pinimg.com/736x/f1/a9/12/f1a912cedc08a5c6304563172ecb0f66.jpg"
    },
    {
        name: "Sourav Patra",
        bio: "Full-stack developer | Foodie",
        pic: "https://i.pinimg.com/736x/cf/ea/b8/cfeab8ee81e79761ebbf311eac2ebe9d.jpg"
    },
    {
        name: "Nikita Dutta",
        bio: "Healthcare worker | Volunteer",
        pic: "https://i.pinimg.com/736x/85/cc/2b/85cc2b286085ea3ac278c60004088371.jpg"
    },

    {
        name: "Aakash Reddy",
        bio: "AI researcher | Problem solver",
        pic: "https://i.pinimg.com/736x/12/da/5e/12da5ea62ef4cc3c0e7341cea1534e43.jpg"
    },
    {
        name: "Shruti Joshi",
        bio: "Artist | Sketch lover",
        pic: "https://i.pinimg.com/736x/c2/34/24/c23424b3d7e40a3fff6f0f7bcc22e3de.jpg"
    },
    {
        name: "Imran Shaikh",
        bio: "Civil engineer | Cricket fan",
        pic: "https://i.pinimg.com/1200x/14/39/8b/14398b0e3f119bdf91f29bf9d72a746b.jpg"
    },
    {
        name: "Sonali Ghosh",
        bio: "Singer | Food explorer",
        pic: "https://i.pinimg.com/736x/b7/0b/19/b70b191895bba3dec5198ba89a077d4a.jpg"
    },
    {
        name: "Rajat Mishra",
        bio: "Finance student | Gamer",
        pic: "https://i.pinimg.com/736x/03/5c/d2/035cd2be688417e5171dad048353dcda.jpg"
    },

    {
        name: "Anjali Kaul",
        bio: "Social worker | Traveler",
        pic: "https://i.pinimg.com/736x/c9/65/ab/c965ab953c801b126fde309f8bcc5fad.jpg"
    },
    {
        name: "Dev Patel",
        bio: "Entrepreneur | Tech enthusiast",
        pic: "https://i.pinimg.com/736x/c4/23/50/c42350ad83586fa965fe55ec20a8013b.jpg"
    },
    {
        name: "Pooja Bhatt",
        bio: "Teacher | Classical dancer",
        pic: "https://i.pinimg.com/736x/a3/3b/b3/a33bb33329deac87590c46370d6758ee.jpg"
    },
    {
        name: "Naveen Krishnan",
        bio: "Mechanical engineer | Explorer",
        pic: "https://i.pinimg.com/736x/e6/db/dd/e6dbdd85f5125ce1546f9c15d8d11b8b.jpg"
    },
    {
        name: "Rashmi Menon",
        bio: "Chef | Food stylist",
        pic: "https://i.pinimg.com/736x/68/71/a0/6871a04e54e2468a6dc86d221206bfea.jpg"
    },

    {
        name: "Kunal Anand",
        bio: "Digital marketer | Blogger",
        pic: "https://i.pinimg.com/736x/f2/e9/e9/f2e9e96d90d922292f84bd0a59cd2185.jpg"
    },
    {
        name: "Harpreet Kaur",
        bio: "Student | Aspiring lawyer",
        pic: "https://i.pinimg.com/736x/39/dd/c5/39ddc5a5e5e43cd534281af945a89e82.jpg"
    },
    {
        name: "Arif Hussain",
        bio: "Doctor | Health activist",
        pic: "https://i.pinimg.com/736x/b0/d6/15/b0d6152dc1d52892a36b29d02d10f997.jpg"
    },
    {
        name: "Shreya Desai",
        bio: "UI/UX designer | Dog lover",
        pic: "https://i.pinimg.com/736x/cf/68/47/cf6847d9806201f9f2c148004c7ac9db.jpg"
    },
    {
        name: "Vinay Prasad",
        bio: "Backend engineer | Chess player",
        pic: "https://i.pinimg.com/736x/14/46/55/144655af98f503c0d0c4bc2b4e29e9fc.jpg"
    },

    {
        name: "Sanya Kapoor",
        bio: "Psychology student | Blogger",
        pic: "https://i.pinimg.com/736x/5d/61/d6/5d61d6d97163358bb242ad23f547727a.jpg"
    },
    {
        name: "Mohit Jain",
        bio: "Startup founder | Innovator",
        pic: "https://i.pinimg.com/736x/a6/da/87/a6da879e9d12fec1893cbad0cae39998.jpg"
    },
    {
        name: "Ritika Basu",
        bio: "Dance teacher | Painter",
        pic: "https://i.pinimg.com/1200x/12/1b/71/121b713d09ef214e798e564e28519175.jpg"
    },
    {
        name: "Varun Nair",
        bio: "Marketing manager | Traveler",
        pic: "https://i.pinimg.com/736x/e8/cb/3c/e8cb3c42b93f93535a13dedd819a9b64.jpg"
    },
    {
        name: "Ira Malhotra",
        bio: "Photographer | Nature lover",
        pic: "https://i.pinimg.com/736x/87/e2/e2/87e2e2ecbdbd9c49f16581290fef717f.jpg"
    },
    {
        name: "Arjun Sharma",
        bio: "Startup mentor | Loves chess",
        pic: "https://i.pinimg.com/736x/84/7a/2a/847a2abe307cfbcbfec048bb3f73fc67.jpg"
    },
    {
        name: "Kavya Reddy",
        bio: "Food vlogger | Street food hunter",
        pic: "https://i.pinimg.com/736x/70/45/5f/70455f676689155951f8e164f8f48f96.jpg"
    },
    {
        name: "Rohan Kapoor",
        bio: "Cyclist | Adventure junkie",
        pic: "https://i.pinimg.com/736x/ad/15/b3/ad15b32f9616431f2ad9d93fd6e11186.jpg"
    },
    {
        name: "Meera Nair",
        bio: "Poet | Tea over coffee always",
        pic: "https://i.pinimg.com/736x/1b/7b/49/1b7b491db12a42e1fc8fcf2889e76ab9.jpg"
    },
    {
        name: "Siddharth Joshi",
        bio: "Data analyst | Night owl",
        pic: "https://i.pinimg.com/736x/56/90/35/56903555b23ed75bdc881729d3ad0e9a.jpg"
    },

    {
        name: "Alisha Khan",
        bio: "Book reviewer | Minimalist",
        pic: "https://i.pinimg.com/736x/0b/19/8d/0b198d3310e65406951eeacb00cc3746.jpg"
    },
    {
        name: "Vivek Malhotra",
        bio: "AI hobbyist | Problem solver",
        pic: "https://i.pinimg.com/736x/d0/1b/9a/d01b9af20bc983fe919f34ea7a3b4037.jpg"
    },
    {
        name: "Tanvi Deshmukh",
        bio: "Dancer | Travel vlogger",
        pic: "https://i.pinimg.com/736x/76/ea/86/76ea8644f3a9299a45866128f66160a2.jpg"
    },
    {
        name: "Rajat Verma",
        bio: "Coding bootcamp grad | Gamer",
        pic: "https://i.pinimg.com/736x/be/a3/d9/bea3d9cb9f23cc77a3015759ca4902c6.jpg"
    },
    {
        name: "Priyanka Sinha",
        bio: "Doctor | Mental health advocate",
        pic: "https://i.pinimg.com/736x/15/6f/fb/156ffbb319e7a487abc01fc5be17f2b3.jpg"
    },

    {
        name: "Sandeep Iyer",
        bio: "Football fan | Backend dev",
        pic: "https://i.pinimg.com/736x/2a/f4/0b/2af40bc1f3708d6ed6585c14abe80a34.jpg"
    },
    {
        name: "Ananya Roy",
        bio: "NGO volunteer | Animal lover",
        pic: "https://i.pinimg.com/736x/8d/51/16/8d5116e7e8f31b64a9ca530bef7a087e.jpg"
    },
    {
        name: "Mohit Chatterjee",
        bio: "Singer | Indie band member",
        pic: "https://i.pinimg.com/736x/5a/2e/3a/5a2e3ad301002b08ec8df6c1c2d3fea4.jpg"
    },
    {
        name: "Ritu Sharma",
        bio: "Chef | Plant-based recipes lover",
        pic: "https://i.pinimg.com/736x/6a/fc/b6/6afcb6df4fd31c9469563fdec0d69e83.jpg"
    },
    {
        name: "Kabir Jain",
        bio: "Startup founder | Coder",
        pic: "https://i.pinimg.com/736x/e0/48/93/e04893e67885b0497039555c1a4650fd.jpg"
    },

    {
        name: "Nisha Bansal",
        bio: "Designer | Loves pastel colors",
        pic: "https://i.pinimg.com/736x/b2/95/96/b2959644dd21ab1d37952a2996906010.jpg"
    },
    {
        name: "Harsh Mehta",
        bio: "Stock trader | Risk taker",
        pic: "https://i.pinimg.com/736x/ea/d9/5f/ead95fcee0c5c1f3c09ac8d6b63ec18e.jpg"
    },
    {
        name: "Shruti Pillai",
        bio: "Podcaster | Storyteller",
        pic: "https://i.pinimg.com/736x/e7/7c/cf/e77ccfa8085739b0b27f3c100fcaab90.jpg"
    },
    {
        name: "Ajay Patel",
        bio: "Runner | Loves marathons",
        pic: "https://i.pinimg.com/736x/47/e6/64/47e6645b3582b38a7c8091349daa0ee1.jpg"
    },
    {
        name: "Ishita Sengupta",
        bio: "Artist | Loves charcoal sketches",
        pic: "https://i.pinimg.com/736x/e9/17/65/e91765744f63739a929ea1eb40458d51.jpg"
    },

    {
        name: "Dev Malhotra",
        bio: "Fitness coach | Gym freak",
        pic: "https://i.pinimg.com/736x/51/b4/92/51b4929d7ef4c422a17d200fb3b53adf.jpg"
    },
    {
        name: "Rekha Iyer",
        bio: "Classical singer | Carnatic music fan",
        pic: "https://i.pinimg.com/736x/f1/10/f7/f110f78fd18514859fdbe7b3d5ab5eaf.jpg"
    },
    {
        name: "Nitin Rao",
        bio: "Photographer | Street shots",
        pic: "https://i.pinimg.com/736x/f8/c5/1c/f8c51c61c10ed99a57b34e3c118e26bd.jpg"
    },
    {
        name: "Tanya Kapoor",
        bio: "Law student | Moot court champ",
        pic: "https://i.pinimg.com/736x/e5/b5/62/e5b5624421df57a33e3c098d13bad627.jpg"
    },
    {
        name: "Farhan Sheikh",
        bio: "Footballer | Aspiring pro",
        pic: "https://i.pinimg.com/1200x/86/6c/96/866c96027bfda174a2a269990ce626bd.jpg"
    },

    {
        name: "Sonali Kulkarni",
        bio: "Traveler | Backpacker",
        pic: "https://i.pinimg.com/736x/f3/41/2e/f3412e4e0facbaa747bbcf8529b1ea96.jpg"
    },
    {
        name: "Manav Desai",
        bio: "Chess player | Loves strategy games",
        pic: "https://i.pinimg.com/736x/d5/05/cb/d505cbb1fd72b8758cc01e0906419b34.jpg"
    },
    {
        name: "Pooja Saxena",
        bio: "Blogger | Talks about life hacks",
        pic: "https://i.pinimg.com/736x/c5/d2/7e/c5d27e865cceb2a41e7f6eea149e69ee.jpg"
    },
    {
        name: "Aditya Rao",
        bio: "Student | Part-time tutor",
        pic: "https://i.pinimg.com/1200x/b6/d6/3e/b6d63e276ae56c7dfabe73e844bbd0e6.jpg"
    },
    {
        name: "Simran Joshi",
        bio: "Content creator | Loves makeup",
        pic: "https://i.pinimg.com/736x/05/70/18/0570183fe630b62139235b66d4ce1224.jpg"
    }
];


// Select the cards container
let cardsContainer = document.getElementById("cardsContainer");

function showUsers(arr) {

    // Clear old cards before showing new ones
    cardsContainer.innerHTML = "";


    arr.forEach(function (user) {

        // Create the card container
        let card = document.createElement("div");
        card.classList.add("card");
        card.style.backgroundImage = `url(${user.pic})`

        // Create the h1 element
        let heading = document.createElement("h1");
        heading.textContent = user.name;

        // Create the p element
        let para = document.createElement("p");
        para.textContent = user.
            bio;

        // Append h1 and p to card
        card.appendChild(heading);
        card.appendChild(para);

        // Append card to cardsContainer
        cardsContainer.appendChild(card);
    });
};

showUsers(users);

let input = document.querySelector("input");
input.addEventListener("input", function () {
    let newUsersArr = users.filter(function (user) {
        return user.name.toLowerCase().startsWith(input.value.toLowerCase());
    });

    showUsers(newUsersArr);
});