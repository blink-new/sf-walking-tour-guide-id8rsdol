import { Tour } from '../App'

export const tours: Tour[] = [
  {
    id: '1',
    title: 'Mission Murals & Authentic Tacos',
    neighborhood: 'Mission District',
    duration: '3.5 hours',
    distance: '2.8 miles',
    difficulty: 'Easy',
    rating: 4.9,
    reviewCount: 127,
    description: 'Explore the vibrant street art scene and discover where locals actually eat. No tourist traps - just authentic Mission culture.',
    highlights: ['Balmy Alley murals', 'Women\'s Building', 'Local coffee roasters', 'Vintage shops'],
    foodStops: [
      {
        name: 'La Taqueria',
        description: 'The holy grail of SF burritos! This cash-only spot has been slinging perfect carnitas since 1973. Locals line up daily for a reason.',
        menuHighlights: ['Carnitas burrito (no rice!)', 'Carne asada tacos', 'Fresh guacamole', 'Horchata']
      },
      {
        name: 'Tartine Bakery',
        description: 'Where the sourdough revolution began. This tiny bakery changed how America thinks about bread. Expect a line, but it\'s worth every minute.',
        menuHighlights: ['Country bread', 'Morning buns', 'Seasonal fruit galettes', 'Bone marrow sandwich']
      },
      {
        name: 'Four Barrel Coffee',
        description: 'Third-wave coffee pioneers roasting beans in a converted garage. The baristas here take their craft seriously, and it shows in every cup.',
        menuHighlights: ['Single-origin pour-overs', 'Espresso Romano', 'Cold brew on tap', 'House-made pastries']
      },
      {
        name: 'Bi-Rite Creamery',
        description: 'Artisanal ice cream made with local ingredients. Their flavors change seasonally, but the quality never wavers. Perfect Mission finale!',
        menuHighlights: ['Salted caramel', 'Honey lavender', 'Balsamic strawberry', 'Sam\'s sundae']
      }
    ],
    pointsOfInterest: [
      {
        name: 'Balmy Alley',
        description: 'A hidden outdoor gallery where murals tell stories of Latin American culture and social justice. Each wall is a masterpiece with deep meaning.'
      },
      {
        name: 'Women\'s Building',
        description: 'Covered in the largest mural in SF, this community center has been empowering women since 1971. The artwork celebrates female strength across cultures.'
      },
      {
        name: 'Clarion Alley',
        description: 'The grittier, more political cousin to Balmy Alley. Street artists use this space to make bold statements about gentrification and social issues.'
      },
      {
        name: 'Mission Dolores Park',
        description: 'Where locals come to see and be seen. On sunny days, it\'s like an outdoor festival with food trucks, musicians, and the best city views.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    price: 0
  },
  {
    id: '2',
    title: 'Castro History & Hidden Gems',
    neighborhood: 'Castro',
    duration: '3 hours',
    distance: '2.2 miles',
    difficulty: 'Easy',
    rating: 4.8,
    reviewCount: 89,
    description: 'Walk through LGBTQ+ history and discover neighborhood spots that locals cherish. Stories you won\'t find in guidebooks.',
    highlights: ['Harvey Milk\'s camera shop', 'Pink Triangle Park', 'Local bookstores', 'Historic theaters'],
    foodStops: [
      {
        name: 'Hot Cookie',
        description: 'A Castro institution serving warm cookies until 3am! This tiny shop has been feeding late-night revelers and early risers since 1983.',
        menuHighlights: ['Chocolate chip (still warm)', 'Snickerdoodles', 'Double chocolate', 'Milk & cookie combos']
      },
      {
        name: 'Cafe Flore',
        description: 'The unofficial town square of the Castro. This sidewalk cafe has been a community gathering spot for decades. Perfect for people-watching!',
        menuHighlights: ['Breakfast burritos', 'Avocado toast', 'Mimosas', 'Local coffee blends']
      },
      {
        name: 'Anchor Oyster Bar',
        description: 'A tiny seafood gem hidden in plain sight. This family-run spot serves the freshest oysters and cioppino in the city. Cash only!',
        menuHighlights: ['Fresh oysters', 'Dungeness crab cioppino', 'Clam chowder', 'Fish & chips']
      },
      {
        name: 'Rossi\'s Deli',
        description: 'Old-school Italian deli that\'s been feeding the neighborhood since 1946. The sandwiches are massive and the stories are even better.',
        menuHighlights: ['Italian combo sandwich', 'Mortadella & provolone', 'Homemade pasta salad', 'Italian sodas']
      }
    ],
    pointsOfInterest: [
      {
        name: 'Harvey Milk\'s Camera Shop',
        description: 'The former site of Harvey Milk\'s camera shop and campaign headquarters. A plaque marks where the first openly gay elected official in California made history.'
      },
      {
        name: 'Pink Triangle Park',
        description: 'A small but powerful memorial to LGBTQ+ victims of the Holocaust. The pink granite triangles create a moving tribute in the heart of the Castro.'
      },
      {
        name: 'Castro Theatre',
        description: 'A 1922 movie palace with a mighty Wurlitzer organ. This landmark hosts film festivals and sing-alongs that bring the community together.'
      },
      {
        name: 'Twin Peaks Tavern',
        description: 'The first gay bar in America with floor-to-ceiling windows. A bold statement in 1972 that helped define the Castro\'s openness and pride.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    price: 0
  },
  {
    id: '3',
    title: 'Richmond\'s Real Dim Sum Trail',
    neighborhood: 'Richmond',
    duration: '4 hours',
    distance: '3.5 miles',
    difficulty: 'Moderate',
    rating: 4.7,
    reviewCount: 156,
    description: 'Experience authentic Asian culture in the Richmond. Visit family-run restaurants and markets where locals shop daily.',
    highlights: ['Clement Street markets', 'Temple visits', 'Ocean Beach locals\' spots', 'Vintage shops'],
    foodStops: [
      {
        name: 'Hong Kong Lounge',
        description: 'Dim sum like grandma makes it! This no-frills spot serves traditional Cantonese dishes to three generations of families. Come hungry!',
        menuHighlights: ['Har gow (shrimp dumplings)', 'Siu mai', 'BBQ pork buns', 'Egg tarts']
      },
      {
        name: 'Good Luck Dim Sum',
        description: 'A tiny takeout window serving some of the best and cheapest dim sum in the city. The line of locals tells you everything you need to know.',
        menuHighlights: ['Pork & chive dumplings', 'Sticky rice in lotus leaf', 'Turnip cake', 'Sesame balls']
      },
      {
        name: 'New May Wah Market',
        description: 'Step into this bustling market and you\'re transported to Hong Kong. Fresh produce, exotic ingredients, and the best selection of Asian snacks.',
        menuHighlights: ['Fresh lychee', 'Durian (if you dare)', 'Asian pears', 'Bubble tea supplies']
      },
      {
        name: 'Java Beach Cafe',
        description: 'A surfer-friendly cafe steps from Ocean Beach. Locals fuel up here before hitting the waves or warming up after a beach walk.',
        menuHighlights: ['Breakfast burritos', 'Acai bowls', 'Local coffee', 'Avocado toast']
      }
    ],
    pointsOfInterest: [
      {
        name: 'Clement Street',
        description: 'The "other Chinatown" where locals actually shop. This bustling street is lined with authentic restaurants, markets, and herb shops.'
      },
      {
        name: 'Richmond Temple',
        description: 'A peaceful Buddhist temple where the community gathers for ceremonies and meditation. The architecture and gardens offer a serene escape.'
      },
      {
        name: 'Green Apple Books',
        description: 'A legendary independent bookstore with three floors of new and used books. Locals spend hours browsing the eclectic collection.'
      },
      {
        name: 'Ocean Beach',
        description: 'Where San Francisco meets the Pacific. This wild, windswept beach is where locals come to surf, walk dogs, and watch epic sunsets.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1496412705862-e0fed369c8e0?w=800&h=600&fit=crop',
    price: 0
  },
  {
    id: '4',
    title: 'North Beach Italian Heritage',
    neighborhood: 'North Beach',
    duration: '3.5 hours',
    distance: '2.5 miles',
    difficulty: 'Easy',
    rating: 4.6,
    reviewCount: 203,
    description: 'Discover authentic Italian-American culture beyond the tourist spots. Family recipes and stories passed down for generations.',
    highlights: ['Saints Peter & Paul Church', 'Beat Generation sites', 'Family-owned delis', 'Washington Square locals'],
    foodStops: [
      {
        name: 'Molinari Delicatessen',
        description: 'A 1896 institution where four generations have been slicing salami and sharing stories. The smell of aged cheese and cured meats is intoxicating.',
        menuHighlights: ['Italian combo sandwich', 'Fresh mozzarella', 'Prosciutto di Parma', 'Homemade ravioli']
      },
      {
        name: 'Cafe Trieste',
        description: 'Where the Beat poets gathered and espresso culture began in America. The Giotta family still runs this 1956 landmark with passion.',
        menuHighlights: ['Cappuccino (the original)', 'Italian sodas', 'Cannoli', 'Opera performances (Saturdays)']
      },
      {
        name: 'Tony\'s Little Star Pizza',
        description: 'Chicago-style deep dish in the heart of Little Italy. This family spot proves that great pizza comes in many forms, not just thin crust.',
        menuHighlights: ['Deep dish pepperoni', 'Italian sausage pizza', 'Caesar salad', 'Tiramisu']
      },
      {
        name: 'Liguria Bakery',
        description: 'A 1911 bakery that makes only focaccia - and they\'ve perfected it! Come early because when they sell out, they close for the day.',
        menuHighlights: ['Plain focaccia', 'Tomato & onion', 'Rosemary & olive', 'Raisin (weekends only)']
      }
    ],
    pointsOfInterest: [
      {
        name: 'Saints Peter & Paul Church',
        description: 'The spiritual heart of North Beach\'s Italian community. Marilyn Monroe and Joe DiMaggio took wedding photos here in 1954.'
      },
      {
        name: 'City Lights Bookstore',
        description: 'The birthplace of the Beat Generation and still a beacon for free speech. Lawrence Ferlinghetti\'s legacy lives on in every corner.'
      },
      {
        name: 'Washington Square Park',
        description: 'Where Italian grandmothers practice Tai Chi at dawn and families gather for weekend picnics. The true heart of the neighborhood.'
      },
      {
        name: 'Coit Tower',
        description: 'Built to honor firefighters, this Art Deco tower offers stunning views and houses Depression-era murals depicting California life.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
    price: 0
  },
  {
    id: '5',
    title: 'Haight Street Real Stories',
    neighborhood: 'Haight-Ashbury',
    duration: '3 hours',
    distance: '2.1 miles',
    difficulty: 'Easy',
    rating: 4.5,
    reviewCount: 178,
    description: 'Beyond the hippie stereotypes - discover the real Haight where locals live, work, and create today.',
    highlights: ['Local record stores', 'Community gardens', 'Victorian architecture', 'Artist studios'],
    foodStops: [
      {
        name: 'Cha Cha Cha',
        description: 'Tropical vibes and killer sangria in a colorful setting. This Caribbean-inspired spot has been a Haight favorite since the \'80s.',
        menuHighlights: ['Fried plantains', 'Jerk chicken', 'Sangria pitchers', 'Cajun shrimp']
      },
      {
        name: 'Pork Store Cafe',
        description: 'The ultimate hangover cure! This diner serves massive portions of comfort food to night owls and early birds alike.',
        menuHighlights: ['Huevos rancheros', 'Chicken fried steak', 'Biscuits & gravy', 'Fresh squeezed OJ']
      },
      {
        name: 'Magnolia Brewing',
        description: 'Craft beer pioneers in a neighborhood that appreciates good vibes. The pub grub pairs perfectly with their house-brewed ales.',
        menuHighlights: ['Fish & chips', 'Burger & fries', 'IPA flight', 'Pretzels & beer cheese']
      },
      {
        name: 'Ice Cream Bar',
        description: 'A 1930s soda fountain serving artisanal ice cream and classic sundaes. The vintage atmosphere makes every visit feel special.',
        menuHighlights: ['Hot fudge sundae', 'Root beer float', 'Banana split', 'Malted milkshakes']
      }
    ],
    pointsOfInterest: [
      {
        name: 'Amoeba Music',
        description: 'A vinyl paradise where music lovers dig through crates for hours. This independent record store is a cultural institution.'
      },
      {
        name: 'Painted Ladies',
        description: 'The famous Victorian houses that survived the 1906 earthquake. These colorful "postcard row" homes define San Francisco architecture.'
      },
      {
        name: 'Buena Vista Park',
        description: 'The city\'s oldest park offers hiking trails and panoramic views. Locals come here to escape the urban hustle and find peace.'
      },
      {
        name: 'Red Victorian',
        description: 'A peace center and bed & breakfast that embodies the Haight\'s spirit of love and community. The murals tell stories of the Summer of Love.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    price: 0
  },
  {
    id: '6',
    title: 'Sunset District Hidden Gems',
    neighborhood: 'Sunset',
    duration: '4 hours',
    distance: '3.2 miles',
    difficulty: 'Moderate',
    rating: 4.8,
    reviewCount: 92,
    description: 'Explore SF\'s largest neighborhood where families live and locals gather. Authentic multicultural experiences.',
    highlights: ['Golden Gate Park locals\' spots', 'Neighborhood libraries', 'Community centers', 'Ocean views'],
    foodStops: [
      {
        name: 'Outerlands',
        description: 'Farm-to-table dining in a cozy cabin-like setting. This neighborhood gem sources ingredients locally and changes the menu seasonally.',
        menuHighlights: ['Dutch baby pancake', 'Roasted bone marrow', 'Seasonal vegetables', 'Local wine selection']
      },
      {
        name: 'Trouble Coffee',
        description: 'Quirky coffee shop with a cult following. The cinnamon toast is legendary, and the coffee is strong enough to wake the dead.',
        menuHighlights: ['Cinnamon toast', 'Strong coffee', 'Coconut strips', 'No-nonsense service']
      },
      {
        name: 'San Tung',
        description: 'Hole-in-the-wall Chinese restaurant famous for addictive fried chicken wings. Locals brave long waits for these crispy treasures.',
        menuHighlights: ['Dry-fried chicken wings', 'Wontons in spicy sauce', 'Beef noodle soup', 'Fried rice']
      },
      {
        name: 'Arizmendi Bakery',
        description: 'Worker-owned cooperative serving fresh bread and pastries. This community-focused bakery embodies the Sunset\'s collaborative spirit.',
        menuHighlights: ['Sourdough bread', 'Scones', 'Pizza slices', 'Seasonal fruit tarts']
      }
    ],
    pointsOfInterest: [
      {
        name: 'Golden Gate Park',
        description: 'The locals\' backyard - 1,000+ acres of gardens, museums, and hidden trails. Families spend entire weekends exploring its many treasures.'
      },
      {
        name: 'Ocean Beach',
        description: 'A wild, windswept coastline where locals surf, build bonfires, and watch spectacular sunsets. The fog adds drama to every visit.'
      },
      {
        name: 'Sunset Library',
        description: 'A beautiful Carnegie library that serves as the neighborhood\'s community center. Locals gather here for events, classes, and quiet study.'
      },
      {
        name: 'Noriega Street',
        description: 'The multicultural main street where Asian markets, Mexican taquerias, and Irish pubs coexist in perfect Sunset harmony.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    price: 0
  }
]