import { Animal } from "@/types"

export const animals: Animal[] = [
  {
    id: "cats",
    name: "Cats",
    slug: "cats",
    emoji: "🐱",
    scientificName: "Felis catus",
    tagline: "Independent, curious, and endlessly charming companions.",
    description:
      "Cats are one of the most popular pets in the world, known for their grace, independence, and affectionate personalities. Whether a cuddly lap cat or a bold explorer, there is a breed for every lifestyle.",
    history:
      "Cats were first domesticated around 10,000 years ago in the Near East, likely drawn to human settlements by rodents. Ancient Egyptians revered cats and even worshipped the cat goddess Bastet. Over millennia, selective breeding gave rise to the hundreds of distinct breeds we know today, each with unique coats, builds, and temperaments.",
    care: "Cats generally need daily feeding, fresh water, a clean litter box, regular veterinary check-ups, enrichment toys, and plenty of affection. Indoor cats live significantly longer on average.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
    color: "#FF6B6B",
    links: [
      {
        title: "Cornell Feline Health Center",
        url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center",
        description: "World-class feline health research and owner resources from Cornell University.",
      },
      {
        title: "ASPCA — Cat Care",
        url: "https://www.aspca.org/pet-care/cat-care",
        description: "Comprehensive cat care guides covering nutrition, behavior, and health.",
      },
      {
        title: "International Cat Care",
        url: "https://icatcare.org",
        description: "Evidence-based advice on all aspects of cat health and welfare.",
      },
      {
        title: "The Cat Fanciers' Association",
        url: "https://cfa.org",
        description: "Official breed standards, show information, and breed education.",
      },
    ],
    subcategories: [
      {
        id: "persian",
        name: "Persian",
        slug: "persian",
        description:
          "Persians are the quintessential long-haired lap cat — gentle, quiet, and deeply affectionate. Their luxurious coats and sweet flat faces make them one of the most recognizable breeds in the world.",
        history:
          "Persians originated in Persia (modern-day Iran) and were brought to Europe in the 1600s by Italian nobleman Pietro della Valle. They became enormously popular among Victorian-era aristocracy and have been a fixture of cat shows since the very first in London in 1871.",
        temperament: "Calm, gentle, quiet, devoted to their families. Prefers a peaceful home.",
        care: "Daily grooming is essential to prevent matting. Regular eye cleaning is needed due to their flat face structure. They are indoor-only cats.",
        image: "/images/animals/persian.jpg",
        funFact: "Persians rarely meow and tend to communicate through soft chirps and eye contact.",
        links: [
          {
            title: "Persian Breed Profile — CFA",
            url: "https://cfa.org/persian/",
            description: "Official CFA breed profile with standards and history.",
          },
          {
            title: "Persian Cat Care Guide",
            url: "https://icatcare.org/advice/cat-breeds/persian/",
            description: "Comprehensive Persian care advice from International Cat Care.",
          },
        ],
      },
      {
        id: "maine-coon",
        name: "Maine Coon",
        slug: "maine-coon",
        description:
          "Maine Coons are the gentle giants of the cat world — large, tufted, and impossibly fluffy, with a dog-like loyalty and playful energy that lasts well into adulthood.",
        history:
          "Native to the state of Maine, the Maine Coon is one of the oldest natural cat breeds in North America. They likely descended from long-haired cats brought by early sailors. They were popular farm cats before becoming one of the first breeds shown at cat shows in the US in the 1860s.",
        temperament: "Playful, affectionate, sociable with dogs and children. Often called 'dog-like.'",
        care: "Weekly brushing to prevent tangles. They love water and interactive play. Prone to hip dysplasia and HCM — regular cardiac screenings recommended.",
        image: "/images/animals/mainecoon.jpg",
        funFact: "Maine Coons often chirp and trill instead of meowing, especially when excited.",
        links: [
          {
            title: "Maine Coon Breed Profile — CFA",
            url: "https://cfa.org/maine-coon/",
            description: "Official CFA breed history and standards.",
          },
          {
            title: "Maine Coon Health Info",
            url: "https://icatcare.org/advice/cat-breeds/maine-coon/",
            description: "Health considerations and care tips from International Cat Care.",
          },
        ],
      },
      {
        id: "siamese",
        name: "Siamese",
        slug: "siamese",
        description:
          "Siamese cats are vocal, social, and strikingly beautiful with their distinctive color-point coats and piercing blue eyes. They form deep bonds with their humans and demand attention in return.",
        history:
          "One of the oldest and most recognized cat breeds, Siamese cats originated in Thailand (formerly Siam) where they were kept by royalty. They arrived in the West in the late 1800s, with the first documented Siamese appearing at Crystal Palace Cat Show in London in 1871.",
        temperament: "Highly vocal, social, demanding, intelligent. Not ideal for owners who are away often.",
        care: "Very low-maintenance coat. High social and mental stimulation needs — does best with a companion cat. Prone to dental and respiratory issues.",
        image: "/images/animals/siamese.jpg",
        funFact: "A Siamese kitten is born entirely white; the color-point markings develop within the first few weeks of life.",
        links: [
          {
            title: "Siamese Breed Profile — CFA",
            url: "https://cfa.org/siamese/",
            description: "Official CFA breed profile for the Siamese.",
          },
          {
            title: "Siamese Care Guide",
            url: "https://icatcare.org/advice/cat-breeds/siamese/",
            description: "Detailed care and health information from International Cat Care.",
          },
        ],
      },
      {
        id: "british-shorthair",
        name: "British Shorthair",
        slug: "british-shorthair",
        description:
          "British Shorthairs are sturdy, round-faced, and easygoing — the ideal family cat. Their plush, dense coats and calm personalities make them beloved companions around the world.",
        history:
          "Descended from domestic cats brought to Britain by the Romans, British Shorthairs are one of the oldest pedigree cat breeds. They were among the first cats exhibited at the 1871 Crystal Palace Cat Show, though the breed nearly went extinct after World War II and was revived by crossing with Persians.",
        temperament: "Calm, undemanding, affectionate but not clingy. Good with children and other pets.",
        care: "Twice-weekly brushing to manage shedding. Prone to obesity — monitor diet carefully. Generally a very healthy and low-maintenance breed.",
        image: "/images/animals/britishshorthair.jpg",
        funFact: "The British Shorthair is believed to be the inspiration for the Cheshire Cat in Alice in Wonderland.",
        links: [
          {
            title: "British Shorthair Breed Profile — CFA",
            url: "https://cfa.org/british-shorthair/",
            description: "Official CFA breed standards and history.",
          },
          {
            title: "British Shorthair Health Guide",
            url: "https://icatcare.org/advice/cat-breeds/british-shorthair/",
            description: "Health and care advice from International Cat Care.",
          },
        ],
      },
      {
        id: "bengal",
        name: "Bengal",
        slug: "bengal",
        description:
          "Bengals look like miniature leopards and act like it too — athletic, curious, and endlessly energetic. They are one of the most unique and visually stunning domestic breeds.",
        history:
          "Bengals are a relatively modern breed, created in the 1960s and 70s by breeding domestic cats with Asian Leopard Cats. Geneticist Jean Mill developed the Bengal breed to create a wild-looking cat with a gentle domestic temperament. They were officially recognized by TICA in 1983.",
        temperament: "Active, intelligent, playful, mischievous. Needs lots of enrichment and space.",
        care: "High exercise needs — leash walks and puzzle toys are a must. Short coat is easy to maintain. Prone to HCM; regular vet checks recommended.",
        image: "/images/animals/bengal.jpg",
        funFact: "Bengals often love water and will happily splash in their water bowl or join you in the shower.",
        links: [
          {
            title: "Bengal Breed Info — TICA",
            url: "https://tica.org/bengal",
            description: "Official TICA breed standard and information.",
          },
          {
            title: "Bengal Cat Care",
            url: "https://icatcare.org/advice/cat-breeds/bengal/",
            description: "Detailed care guide and health considerations.",
          },
        ],
      },
      {
        id: "ragdoll",
        name: "Ragdoll",
        slug: "ragdoll",
        description:
          "Ragdolls are famously floppy — they go limp in your arms when picked up, earning their name. Large, blue-eyed, and extraordinarily gentle, they are often called puppy cats for their loyalty and easygoing nature.",
        history:
          "Ragdolls are a fairly modern breed, developed in the 1960s in California by breeder Ann Baker. The foundation cat was a white domestic longhair named Josephine, known for her calm temperament. Ragdolls were officially recognized by TICA in 1979.",
        temperament: "Extremely gentle, calm, follows owners room to room, tolerant with children.",
        care: "Semi-long coat needs twice-weekly brushing. Very indoor-suited and should not be left alone for long periods. Prone to HCM and bladder stones.",
        image: "/images/animals/ragdoll.jpg",
        funFact: "Ragdoll kittens are born white; their full color-point markings develop by about two years of age.",
        links: [
          {
            title: "Ragdoll Breed Profile — CFA",
            url: "https://cfa.org/ragdoll/",
            description: "Official CFA profile with breed history and standards.",
          },
          {
            title: "Ragdoll Care Guide",
            url: "https://icatcare.org/advice/cat-breeds/ragdoll/",
            description: "Health and care information from International Cat Care.",
          },
        ],
      },
    ],
  },
  {
    id: "hamsters",
    name: "Hamsters",
    slug: "hamsters",
    emoji: "🐹",
    scientificName: "Cricetinae",
    tagline: "Tiny, curious, and full of personality — perfect pocket pets.",
    description:
      "Hamsters are beloved small pets known for their pouchy cheeks, wheel-running antics, and surprisingly bold personalities. They are naturally solitary animals (most species) that thrive with proper enrichment and a spacious setup.",
    history:
      "Hamsters were first discovered by Western science in 1839 when British zoologist George Robert Waterhouse described a specimen collected in Syria. The Syrian hamster wasn't domesticated until 1930, when zoologist Israel Aharoni captured a mother and her litter in the Syrian desert. Nearly all pet Syrian hamsters today descend from that single wild litter.",
    care: "Hamsters are nocturnal and need large cages (40+ inch floor space recommended), a wheel at least 10–12 inches in diameter, deep bedding for burrowing, and a varied diet of hamster pellets, fresh vegetables, and occasional protein.",
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=800&q=80",
    color: "#FFAB40",
    links: [
      {
        title: "Hamster Society Singapore — Care Guides",
        url: "https://hamster-society.com",
        description: "Detailed hamster care guides covering housing, diet, and enrichment.",
      },
      {
        title: "RSPCA — Hamster Care",
        url: "https://www.rspca.org.uk/adviceandwelfare/pets/rodents/hamsters",
        description: "Welfare-focused care advice from the RSPCA.",
      },
      {
        title: "PetMD — Hamster Health",
        url: "https://www.petmd.com/hamster",
        description: "Veterinarian-reviewed health and care articles for hamsters.",
      },
    ],
    subcategories: [
      {
        id: "syrian",
        name: "Syrian Hamster",
        slug: "syrian",
        description:
          "The Syrian hamster is the largest and most common pet hamster species. Fluffy, friendly when well-socialized, and robustly built, Syrians are wonderful first hamsters — especially for families.",
        history:
          "All domestic Syrian hamsters trace their lineage to a single wild litter captured in Syria in 1930 by zoologist Israel Aharoni. By the 1940s they had arrived in the US, and by the 1970s they were among the most popular small pets in the Western world.",
        temperament: "Solitary (must be housed alone), generally tame when handled regularly, active at dusk and night.",
        care: "Cage minimum: 40×20 inches. Wheel minimum: 10–11 inches. Deep bedding (6+ inches) for burrowing. Provide hides, tunnels, and chews.",
        image: "/images/animals/syrian.jpg",
        funFact: "Syrian hamsters can carry up to half their body weight in food in their cheek pouches.",
        links: [
          {
            title: "Syrian Hamster Care — Hamster Society",
            url: "https://hamster-society.com/syrian-hamster/",
            description: "Comprehensive Syrian hamster housing and care guide.",
          },
          {
            title: "RSPCA Syrian Hamster Info",
            url: "https://www.rspca.org.uk/adviceandwelfare/pets/rodents/hamsters",
            description: "Welfare advice from the RSPCA.",
          },
        ],
      },
      {
        id: "dwarf-campbell",
        name: "Dwarf Campbell Russian",
        slug: "dwarf-campbell",
        description:
          "Dwarf Campbell Russian hamsters are small, fast, and full of energy. They are one of the few hamster species that can sometimes be kept in same-sex pairs if introduced young.",
        history:
          "First described by zoologist W.C. Campbell in 1902 in the Tuva region of Russia. They were domesticated in the 1960s and arrived in the UK as pets in the 1970s. Today they are one of the most common dwarf hamster species kept as pets.",
        temperament: "Can be nippy when stressed, but generally curious and active. May be kept in pairs if bonded early.",
        care: "Cage minimum: 40×20 inches. Wheel minimum: 8 inches. They are social but introductions must be done carefully. Prone to diabetes — avoid sugary foods.",
        image: "/images/animals/cambelldwarf.jpg",
        funFact: "Dwarf Campbells are so fast they can be difficult to photograph — they rarely hold still!",
        links: [
          {
            title: "Campbell's Hamster Care",
            url: "https://hamster-society.com/campbells-hamster/",
            description: "Housing, diet, and social care guide for Dwarf Campbells.",
          },
        ],
      },
      {
        id: "winter-white",
        name: "Winter White Russian",
        slug: "winter-white",
        description:
          "Winter White Russian dwarf hamsters are known for their remarkable ability to change coat color — turning white in winter months. They are slightly calmer than Campbells and very endearing.",
        history:
          "Native to the grasslands of Siberia and Kazakhstan, Winter Whites were first described scientifically in 1773. In the wild, they turn white in winter to camouflage against snow. They became popular pets in Europe starting in the 1980s.",
        temperament: "Slightly calmer than Campbells, curious, social. Can be kept in pairs if bonded early.",
        care: "Very similar care to Campbells. Also prone to diabetes. Seasonal coat changes may occur even in indoor pets under artificial light.",
        image: "/images/animals/whitedwarf.jpg",
        funFact: "Winter Whites can turn almost completely white in winter — a trait triggered by shorter daylight hours.",
        links: [
          {
            title: "Winter White Care Guide",
            url: "https://hamster-society.com/winter-white-hamster/",
            description: "Detailed care guide for Winter White Russian dwarf hamsters.",
          },
        ],
      },
      {
        id: "roborovski",
        name: "Roborovski",
        slug: "roborovski",
        description:
          "Roborovskis are the tiniest and fastest of all pet hamster species — barely the size of a thumb. They are best enjoyed as display pets due to their incredible speed and delicate size.",
        history:
          "Named after Russian explorer Lieutenant Vsevolod Roborovski who first observed them in 1894 in the Gobi Desert. They were kept in European zoos starting in the 1960s and only became widely available as pets in the 1990s.",
        temperament: "Extremely fast and skittish. Not ideal for handling but fascinating to watch. Best kept in groups of same-sex pairs.",
        care: "Smaller wheel is ok (6–8 inches). Despite their size, they still need a large cage for the enrichment. Handle with extreme care — they can easily escape.",
        image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=800&q=80",
        funFact: "Roborovskis can run the equivalent of four marathons every night on their wheel.",
        links: [
          {
            title: "Roborovski Care Guide",
            url: "https://hamster-society.com/roborovski-hamster/",
            description: "Care guide for the world's smallest pet hamster.",
          },
        ],
      },
    ],
  },
  {
    id: "guinea-pigs",
    name: "Guinea Pigs",
    slug: "guinea-pigs",
    emoji: "🐾",
    scientificName: "Cavia porcellus",
    tagline: "Social, vocal, and absolutely full of personality.",
    description:
      "Guinea pigs, or cavies, are social small animals that communicate through a delightful range of sounds — from purring to popcorning. They thrive in pairs and make wonderful, interactive pets for all ages.",
    history:
      "Guinea pigs are native to the Andes Mountains of South America, where they were first domesticated by indigenous peoples around 5000 BCE as a food source. Spanish explorers brought them to Europe in the 16th century, where they quickly became fashionable exotic pets among the upper class. Today they are among the most popular small pets globally.",
    care: "Guinea pigs need large enclosures (minimum 7.5 sq ft for one, 10+ for two), unlimited grass hay (their primary diet), fresh vegetables daily, Vitamin C supplementation, and social companionship — they should never be housed alone.",
    image: "/images/animals/americangp.jpg",
    color: "#4DD9AC",
    links: [
      {
        title: "Guinea Pig Cages — Care Guide",
        url: "https://www.guineapigcages.com",
        description: "Detailed housing information and cage building guides.",
      },
      {
        title: "RSPCA — Guinea Pig Care",
        url: "https://www.rspca.org.uk/adviceandwelfare/pets/rodents/guineapigs",
        description: "Comprehensive welfare and care advice from the RSPCA.",
      },
      {
        title: "Humane Society — Guinea Pig Care",
        url: "https://www.humanesociety.org/resources/guinea-pig-care",
        description: "Care basics, diet, and health advice from the Humane Society.",
      },
      {
        title: "PetMD — Guinea Pig Health",
        url: "https://www.petmd.com/guinea-pig",
        description: "Veterinarian-reviewed health articles for guinea pigs.",
      },
    ],
    subcategories: [
      {
        id: "american",
        name: "American",
        slug: "american",
        description:
          "The American guinea pig is the most common breed — smooth-coated, easy to care for, and wonderfully friendly. They are the ideal starting point for first-time guinea pig owners.",
        history:
          "The American (formerly English) is the oldest recognized breed of guinea pig, developed from the original South American cavies brought to Europe in the 1500s. It has been shown at exhibitions since the early 1900s and remains the most popular breed worldwide.",
        temperament: "Gentle, curious, social, and easy to handle. Great for children and first-time owners.",
        care: "Very low grooming needs — a quick brush once a week is enough. Provide spacious housing, a companion, and plenty of hay.",
        image: "/images/animals/americangp.jpg",
        funFact: "Guinea pigs 'popcorn' — leaping and twisting in the air — when they are extremely happy.",
        links: [
          {
            title: "American Guinea Pig Breed Info",
            url: "https://www.acba.org/breed-standards/",
            description: "American Cavy Breeders Association breed information.",
          },
        ],
      },
      {
        id: "peruvian",
        name: "Peruvian",
        slug: "peruvian",
        description:
          "Peruvians are the showstoppers of the guinea pig world — their silky, floor-length hair grows up to 20 inches and parts down the middle of their back. They are as high-maintenance as they are gorgeous.",
        history:
          "The Peruvian is one of the oldest long-haired guinea pig breeds, developed in South America and brought to France in the 19th century. They were shown at the first recorded guinea pig show in Europe in the 1880s and became popular in the US in the early 1900s.",
        temperament: "Curious and sociable, but high-maintenance due to coat requirements.",
        care: "Daily grooming is essential to prevent matting and tangles. Many owners keep the coat trimmed for practical care. Regular baths may be needed.",
        image: "/images/animals/peruvian.jpg",
        funFact: "A Peruvian's hair never stops growing — without trimming, it can completely cover their face.",
        links: [
          {
            title: "Peruvian Guinea Pig Care",
            url: "https://www.rspca.org.uk/adviceandwelfare/pets/rodents/guineapigs",
            description: "General guinea pig care advice applicable to all breeds.",
          },
        ],
      },
      {
        id: "abyssinian",
        name: "Abyssinian",
        slug: "abyssinian",
        description:
          "Abyssinians are known for their wild, rosette-patterned coat — swirls of hair that radiate out from multiple points across their body. They are lively, bold, and utterly unique in appearance.",
        history:
          "Despite the name, Abyssinian guinea pigs did not originate in Ethiopia — the name was popular in Victorian Britain for exotic-sounding breeds. They are one of the oldest pedigree guinea pig breeds, recognized in the late 1800s. Show standards require a minimum of 8 rosettes placed symmetrically.",
        temperament: "Energetic, mischievous, and confident. More independent than other breeds but very entertaining.",
        care: "The rosette coat doesn't need as much grooming as long-haired breeds but benefits from occasional brushing to prevent debris buildup.",
        image: "/images/animals/abyssinian.jpg",
        funFact: "Show-standard Abyssinians must have at least 8 perfectly placed rosettes to be competitive.",
        links: [
          {
            title: "Abyssinian Breed Info — ACBA",
            url: "https://www.acba.org/breed-standards/",
            description: "American Cavy Breeders Association breed standards.",
          },
        ],
      },
      {
        id: "teddy",
        name: "Teddy",
        slug: "teddy",
        description:
          "Teddy guinea pigs have a uniquely dense, kinked coat that stands up and out from their body — giving them the look and feel of a plush toy. Their coat is soft and doesn't mat like long-haired breeds.",
        history:
          "The Teddy guinea pig was developed in the United States in the 1960s through a natural genetic mutation that affects the hair structure, causing the characteristic upright, dense coat. They were recognized by the American Cavy Breeders Association shortly after.",
        temperament: "Calm, friendly, and easy to handle. One of the most laid-back guinea pig breeds.",
        care: "The dense coat benefits from a stiff brush weekly. Their nasal passages can be prone to dryness — ensure good humidity in their environment.",
        image: "/images/animals/teddy.jpg",
        funFact: "Running your hand the wrong way across a Teddy's coat feels like petting velvet in reverse — surprisingly satisfying.",
        links: [
          {
            title: "Teddy Guinea Pig Info — ACBA",
            url: "https://www.acba.org/breed-standards/",
            description: "ACBA breed standard and show information for the Teddy.",
          },
        ],
      },
    ],
  },
  {
    id: "rabbits",
    name: "Rabbits",
    slug: "rabbits",
    emoji: "🐰",
    scientificName: "Oryctolagus cuniculus",
    tagline: "Gentle, intelligent, and full of surprising personality.",
    description:
      "Rabbits are intelligent, social animals that can be litter-trained, learn their names, and bond deeply with their owners. They are much more complex than most people expect, and reward patient, knowledgeable care with years of affectionate companionship.",
    history:
      "European rabbits (Oryctolagus cuniculus) were first domesticated by French monks around 600 CE, who began keeping wild rabbits in enclosures. Selective breeding for different coat colors and body shapes began in earnest in the 19th century, and today there are over 50 recognized domestic rabbit breeds ranging from the 2-pound Netherland Dwarf to the 20-pound Flemish Giant.",
    care: "Rabbits need large indoor housing (a minimum 4×4 ft pen, ideally larger), unlimited grass hay, fresh leafy greens, limited pellets, regular grooming, and ideally a bonded companion rabbit. They should be spayed/neutered for health and behavioral benefits.",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
    color: "#B39DDB",
    links: [
      {
        title: "House Rabbit Society",
        url: "https://rabbit.org",
        description: "The gold standard of rabbit care information — housing, diet, health, and adoption.",
      },
      {
        title: "RSPCA — Rabbit Care",
        url: "https://www.rspca.org.uk/adviceandwelfare/pets/rabbits",
        description: "Comprehensive welfare and care guidance from the RSPCA.",
      },
      {
        title: "Rabbit.org — Diet Guide",
        url: "https://rabbit.org/suggested-vegetables-and-fruits-for-a-rabbit-diet/",
        description: "What rabbits can and cannot eat — safe vegetables and fruits list.",
      },
      {
        title: "American Rabbit Breeders Association",
        url: "https://arba.net",
        description: "Breed standards, show information, and rabbit resources.",
      },
    ],
    subcategories: [
      {
        id: "holland-lop",
        name: "Holland Lop",
        slug: "holland-lop",
        description:
          "Holland Lops are the most popular rabbit breed in the US — small, compact, and utterly adorable with their floppy ears and round faces. They are social butterflies that love attention.",
        history:
          "The Holland Lop was developed in the Netherlands by breeder Adriann de Cock in the 1950s by crossing French Lops with Netherland Dwarfs. After years of selective breeding to reduce the size, the breed was recognized by the Dutch Rabbit Breeders Association in 1964 and by the ARBA in 1979.",
        temperament: "Playful, affectionate, and social. Can be energetic but also love to cuddle.",
        care: "Their lop ears are prone to ear infections — regular ear checks are essential. Medium-maintenance grooming. Very social — best kept with a bonded companion.",
        image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
        funFact: "Holland Lops are one of the smallest lop-eared rabbit breeds, weighing just 2–4 lbs at adulthood.",
        links: [
          {
            title: "Holland Lop Rabbit Club of America",
            url: "https://www.hlrca.org",
            description: "Breed club with care, show, and health resources.",
          },
          {
            title: "Holland Lop Care — House Rabbit Society",
            url: "https://rabbit.org",
            description: "General care resources applicable to Holland Lops.",
          },
        ],
      },
      {
        id: "mini-rex",
        name: "Mini Rex",
        slug: "mini-rex",
        description:
          "Mini Rex rabbits are known for their extraordinarily plush, velvety coat — the result of a rex mutation that causes the guard hairs to be the same length as the undercoat. Running your hand across a Mini Rex is genuinely unforgettable.",
        history:
          "The Rex mutation was first discovered in a litter of wild rabbits in France in 1919. The full-sized Rex was then used to develop the Mini Rex in the US in the 1980s, with breeder Monna Berryhill producing the first litter in 1984. The ARBA recognized the Mini Rex in 1988.",
        temperament: "Calm, curious, and generally easy-going. Can be a bit territorial in their space.",
        care: "The velvet coat requires minimal grooming. They are medium-sized and adaptable. Regular health checks for sore hocks, as the shorter fur provides less padding.",
        image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
        funFact: "The velvet-like texture of a Rex coat comes from guard hairs being bent instead of straight — a recessive genetic mutation.",
        links: [
          {
            title: "Mini Rex Rabbit Club",
            url: "https://www.minirexclub.com",
            description: "Official breed club for Mini Rex rabbits.",
          },
          {
            title: "Rex Rabbit Care Guide",
            url: "https://rabbit.org",
            description: "Care resources from the House Rabbit Society.",
          },
        ],
      },
      {
        id: "lionhead",
        name: "Lionhead",
        slug: "lionhead",
        description:
          "Lionheads are named for the distinctive wool mane around their head — a genetic mutation that gives them the appearance of a tiny lion. They are small, energetic, and wonderfully quirky.",
        history:
          "Lionheads originated in Belgium in the 1990s as a cross between a Swiss Fox and a Belgian Dwarf. The mane gene — a wool mutation — was discovered to be inheritable, and selective breeding followed. They were imported to the UK in the late 1990s and recognized by the ARBA in 2014.",
        temperament: "Playful, energetic, and inquisitive. Can be slightly more skittish than larger breeds.",
        care: "The mane requires regular detangling, especially behind the ears. Some individuals have a 'double mane' that requires more attention. Provide adequate enrichment.",
        image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
        funFact: "A Lionhead with one copy of the mane gene gets a 'single mane' that may thin with age; two copies produces a full, permanent 'double mane.'",
        links: [
          {
            title: "North American Lionhead Rabbit Club",
            url: "https://www.lionheadrabbit.com",
            description: "Breed club with standards, care info, and breeder listings.",
          },
        ],
      },
      {
        id: "dutch",
        name: "Dutch",
        slug: "dutch",
        description:
          "Dutch rabbits are one of the oldest pedigree rabbit breeds and are instantly recognizable by their distinctive two-tone color pattern — a white blaze and saddle paired with a colored rear. They are dependable, friendly, and great for beginners.",
        history:
          "Despite the name, Dutch rabbits were actually developed in England in the early 1800s from the now-extinct Brabant breed imported from Holland. They were one of the first breeds standardized and shown in England, and were among the first rabbits imported to the US for exhibition.",
        temperament: "Gentle, social, and calm. One of the most consistently easy-going rabbit breeds.",
        care: "Very low-maintenance coat. Moderate size (4–5.5 lbs) makes them easy to handle. Very social — benefits greatly from a bonded rabbit companion.",
        image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
        funFact: "Dutch rabbits come in seven recognized color varieties, but all share the same distinctive white blaze and saddle pattern.",
        links: [
          {
            title: "American Dutch Rabbit Club",
            url: "https://www.adrc.net",
            description: "Official breed club with standards and member resources.",
          },
          {
            title: "Dutch Rabbit Care — House Rabbit Society",
            url: "https://rabbit.org",
            description: "General rabbit care from the House Rabbit Society.",
          },
        ],
      },
    ],
  },
]

export function getAnimal(slug: string): Animal | undefined {
  return animals.find((a) => a.slug === slug)
}

export function getSubcategory(animalSlug: string, subcatSlug: string) {
  const animal = getAnimal(animalSlug)
  return animal?.subcategories?.find((s) => s.slug === subcatSlug)
}
