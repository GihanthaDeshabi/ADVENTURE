// lib/blogData.ts
export interface BlogPost {
  id: number
  slug: string
  title: string
  category: string
  date: string
  author: string
  authorRole: string
  readTime: string
  excerpt: string
  imageUrl: string
  imageAlt: string
  content: {
    intro: string
    sections: {
      heading: string
      paragraphs: string[]
    }[]
    conclusion: string
  }
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'stretching-power',
    title: "The Power of Stretching: Why You Shouldn't Skip It",
    category: 'FITNESS TIPS',
    date: 'January 18, 2025',
    author: 'Dhammika Jayawardene',
    authorRole: 'Certified Personal Trainer',
    readTime: '5 min read',
    excerpt: 'Prevent injuries and improve performance with proper stretching.',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop',
    imageAlt: 'Barbell and weights at the gym',
    content: {
      intro: "Stretching is often overlooked in fitness routines, yet it's one of the most crucial components of a well-rounded training program. Whether you're a seasoned athlete or just beginning your fitness journey, incorporating proper stretching can dramatically improve your performance and reduce injury risk.",
      sections: [
        {
          heading: 'Why Stretching Matters',
          paragraphs: [
            'Dynamic stretching before workouts prepares your muscles for activity by increasing blood flow and range of motion. This activation helps prevent strains and improves overall performance during your training session.',
            'Static stretching after exercise aids in recovery by reducing muscle tension and promoting flexibility. This is crucial for maintaining long-term mobility and preventing the stiffness that often follows intense workouts.',
          ],
        },
        {
          heading: 'Types of Stretching',
          paragraphs: [
            'Dynamic stretching involves active movements that take joints through their full range of motion. Examples include leg swings, arm circles, and walking lunges. These are perfect for warming up before strength training or cardio sessions.',
            'Static stretching involves holding a position for 15-30 seconds to lengthen muscles. This type is best performed after workouts when muscles are warm, helping to improve overall flexibility and reduce post-workout soreness.',
          ],
        },
        {
          heading: 'Building a Stretching Routine',
          paragraphs: [
            'Start with 5-10 minutes of dynamic stretching before your workout. Focus on the muscle groups you\'ll be using during your session. For leg day, include hip circles, leg swings, and walking lunges.',
            'After your workout, dedicate 10-15 minutes to static stretching. Hold each stretch for at least 20-30 seconds without bouncing. Remember to breathe deeply and never push to the point of pain.',
          ],
        },
      ],
      conclusion: "Making stretching a non-negotiable part of your fitness routine will pay dividends in improved performance, reduced injury risk, and better overall mobility. At Oxygen Gym Matara, our trainers can guide you through proper stretching techniques tailored to your fitness goals. Don't skip the stretch—your body will thank you!",
    },
  },
  {
    id: 2,
    slug: 'workout-nutrition',
    title: 'What to Eat Before and After a Workout',
    category: 'NUTRITION & WELLNESS',
    date: 'January 12, 2025',
    author: 'Dhammika Jayawardene',
    authorRole: 'Sports Nutritionist',
    readTime: '6 min read',
    excerpt: 'Optimize recovery and performance with proper nutrition.',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop',
    imageAlt: 'Healthy meal preparation',
    content: {
      intro: "The food you eat before and after exercise can significantly impact your performance, recovery, and results. Understanding the right nutrition timing and choices can help you maximize your workouts and achieve your fitness goals faster.",
      sections: [
        {
          heading: 'Pre-Workout Nutrition',
          paragraphs: [
            'Eating 2-3 hours before exercise gives your body time to digest and convert food into usable energy. Focus on complex carbohydrates like oatmeal, brown rice, or whole grain bread paired with lean protein. This combination provides sustained energy without causing digestive discomfort.',
            'If you\'re training early or need a quick snack 30-60 minutes before your workout, opt for easily digestible options like a banana with almond butter, Greek yogurt with berries, or a small smoothie. These provide quick energy without weighing you down.',
          ],
        },
        {
          heading: 'Post-Workout Recovery',
          paragraphs: [
            'The 30-60 minute window after exercise is crucial for recovery. Your muscles are primed to absorb nutrients, making this the ideal time to refuel. Aim for a 3:1 ratio of carbohydrates to protein to replenish glycogen stores and support muscle repair.',
            'Excellent post-workout options include grilled chicken with sweet potato, protein smoothies with fruit, or Greek yogurt with granola and berries. Don\'t forget hydration—water is essential for nutrient transport and recovery.',
          ],
        },
        {
          heading: 'Hydration Strategy',
          paragraphs: [
            'Proper hydration starts before you even enter the gym. Drink 16-20 ounces of water 2-3 hours before exercise, and another 8-10 ounces 15 minutes before starting. During intense workouts lasting over an hour, sip water every 15-20 minutes.',
            'After training, replace fluids lost through sweat. A good rule of thumb is to drink 16-24 ounces of water for every pound lost during exercise. For sessions over 90 minutes, consider adding electrolytes to support optimal recovery.',
          ],
        },
      ],
      conclusion: "Proper nutrition timing is a powerful tool for maximizing your fitness results. By fueling your body correctly before and after workouts, you'll enhance performance, speed recovery, and make consistent progress toward your goals. Our nutrition experts at Oxygen Gym Matara can create a personalized meal plan that aligns with your training schedule and objectives.",
    },
  },
  {
    id: 3,
    slug: 'david-transformation',
    title: "From Zero to Hero: David's Body Transformation at Waras",
    category: 'MEMBER STORIES',
    date: 'January 05, 2025',
    author: 'Dhammika Jayawardene',
    authorRole: 'Head Trainer',
    readTime: '4 min read',
    excerpt: "See how discipline changed David's life.",
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop',
    imageAlt: 'Outdoor group fitness class',
    content: {
      intro: "When David walked through the doors of Oxygen Gym Matara six months ago, he was frustrated, out of shape, and skeptical that he could change. Today, he's 25 pounds lighter, stronger than ever, and inspiring others with his incredible transformation story.",
      sections: [
        {
          heading: 'The Starting Point',
          paragraphs: [
            'David, a 35-year-old software engineer, had let years of desk work and poor eating habits take their toll. "I was tired all the time, my clothes didn\'t fit, and I felt like I\'d lost myself," he recalls. After a health scare prompted by high blood pressure, David knew something had to change.',
            'His initial consultation with our trainers revealed low muscle mass, poor cardiovascular endurance, and flexibility issues. But more importantly, it revealed a determined individual ready to commit to transformation.',
          ],
        },
        {
          heading: 'The Journey',
          paragraphs: [
            'David started with three training sessions per week, focusing on compound movements to build foundational strength. His trainer designed a progressive program that gradually increased intensity while teaching proper form and breathing techniques.',
            'Beyond the gym, David worked with our nutrition coach to overhaul his eating habits. He learned portion control, meal prep strategies, and how to make healthier choices without feeling deprived. "The nutrition piece was harder than the workouts at first, but it made all the difference," David shares.',
            'By month three, David added two group fitness classes to his routine. The community aspect became a game-changer. "Seeing others push themselves motivated me to dig deeper. We became accountability partners for each other."',
          ],
        },
        {
          heading: 'The Results',
          paragraphs: [
            'Six months later, David has lost 25 pounds of fat while gaining 8 pounds of muscle. His blood pressure is back in the healthy range, and he\'s sleeping better than he has in years. But the numbers only tell part of the story.',
            '"The biggest change is how I feel," David explains. "I have energy to play with my kids, confidence I\'d lost, and a sense of accomplishment that spills into every area of my life. I\'m not just physically stronger—I\'m mentally tougher too."',
          ],
        },
      ],
      conclusion: "David's story proves that transformation is possible at any age or fitness level. It takes commitment, consistency, and the right support system, but the results are life-changing. If you're ready to write your own success story, our team at Oxygen Gym Matara is here to guide you every step of the way. Your transformation starts with a single decision—to show up and begin.",
    },
  },
  {
  id: 4,
  slug: 'strength-training-beginners',
  title: 'Strength Training for Beginners: A Complete Guide',
  category: 'FITNESS TIPS',
  date: 'January 22, 2025',
  author: 'Dhammika Jayawardene',
  authorRole: 'Certified Personal Trainer',
  readTime: '5 min read',
  excerpt: 'Start your strength journey with confidence using this beginner-friendly guide.',
  imageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1470&auto=format&fit=crop',
  imageAlt: 'Beginner weight training at gym',
  content: {
    intro: "Starting strength training can feel intimidating, but it doesn’t have to be. With the right approach, beginners can build strength safely and efficiently while avoiding injuries.",
    sections: [
      {
        heading: 'Why Strength Training Matters',
        paragraphs: [
          "Strength training boosts metabolism, builds lean muscle, and improves daily functional movement.",
          "It also strengthens bones and joints—crucial for long-term fitness and injury prevention."
        ],
      },
      {
        heading: 'Beginner-Friendly Exercises',
        paragraphs: [
          "Start with exercises like bodyweight squats, rowing, dumbbell presses, and planks.",
          "Focus on form first. Perfect technique before increasing weight."
        ],
      },
      {
        heading: 'How to Build a Routine',
        paragraphs: [
          "Begin with 2–3 weekly sessions, targeting full-body movements.",
          "Rest 48 hours between strength days to allow muscles to recover and grow."
        ],
      },
    ],
    conclusion: "Strength training is one of the most rewarding ways to transform your body and mind. At Oxygen Gym Matara, our trainers help beginners build confidence from day one."
  }
},
{
  id: 5,
  slug: 'fat-loss-mistakes',
  title: 'Top 5 Fat-Loss Mistakes to Avoid',
  category: 'WEIGHT LOSS',
  date: 'January 25, 2025',
  author: 'Dhammika Jayawardene',
  authorRole: 'Head Trainer',
  readTime: '4 min read',
  excerpt: 'Avoid these common mistakes to speed up fat loss safely.',
  imageUrl: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1470&auto=format&fit=crop',
  imageAlt: 'Person doing cardio exercise',
  content: {
    intro: "Fat loss is simple in theory but challenging in practice. Many people sabotage their progress without realizing it. Here are the top mistakes to avoid.",
    sections: [
      {
        heading: 'Mistake 1: Overdoing Cardio',
        paragraphs: [
          "Excessive cardio can increase stress hormones and slow metabolism.",
          "Balance cardio with strength training for optimal fat-burning."
        ],
      },
      {
        heading: 'Mistake 2: Not Eating Enough Protein',
        paragraphs: [
          "Protein preserves lean muscle and keeps you fuller for longer.",
          "Add eggs, chicken, lentils, and Greek yogurt to your meals."
        ],
      },
      {
        heading: 'Mistake 3: Inconsistent Sleep',
        paragraphs: [
          "Poor sleep disrupts hunger hormones and increases cravings.",
          "Aim for 7–9 hours nightly to support fat-burning."
        ],
      },
    ],
    conclusion: "Avoiding these mistakes will help you see faster, healthier fat-loss results. Our coaching team at Oxygen Gym Matara can build a plan tailored to your body."
  }
},
{
  id: 6,
  slug: 'gym-etiquette',
  title: 'Gym Etiquette 101: What Every Member Should Know',
  category: 'LIFESTYLE',
  date: 'January 28, 2025',
  author: 'Dhammika Jayawardene',
  authorRole: 'Fitness Instructor',
  readTime: '4 min read',
  excerpt: 'A simple guide to being respectful and confident at the gym.',
  imageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1470&auto=format&fit=crop',
  imageAlt: 'Gym environment and people working out',
  content: {
    intro: "New to the gym? Or just want to make sure you're doing things right? Gym etiquette helps everyone train safely and confidently.",
    sections: [
      {
        heading: 'Respect the Equipment',
        paragraphs: [
          "Always return dumbbells, plates, and mats to their proper spots.",
          "Avoid dropping weights unless necessary for safety."
        ],
      },
      {
        heading: 'Share the Space',
        paragraphs: [
          "Don’t sit on equipment while scrolling your phone.",
          "Allow others to work in between sets when the gym is busy."
        ],
      },
      {
        heading: 'Personal Hygiene & Cleanliness',
        paragraphs: [
          "Wipe down benches and machines after use.",
          "Use deodorant and bring a towel to maintain cleanliness."
        ],
      },
    ],
    conclusion: "Good gym etiquette creates a positive environment for everyone. At Oxygen Gym Matara, we encourage members to train with respect, safety, and community spirit."
  }
},
{
  id: 7,
  slug: 'benefits-of-personal-training',
  title: 'Why Personal Training Is Worth It — Even for Beginners',
  category: 'FITNESS COACHING',
  date: 'February 01, 2025',
  author: 'Dhammika Jayawardene',
  authorRole: 'Certified Personal Trainer',
  readTime: '5 min read',
  excerpt: 'Discover how personal training accelerates progress.',
  imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1470&auto=format&fit=crop',
  imageAlt: 'Personal trainer guiding client',
  content: {
    intro: "Whether you're a beginner or an advanced athlete, personal training can dramatically improve your results. Here’s why it’s a smart investment.",
    sections: [
      {
        heading: 'Customized Workouts',
        paragraphs: [
          "A trainer builds a plan based on your goals, body type, and fitness level.",
          "No more guesswork—just targeted progress."
        ],
      },
      {
        heading: 'Proper Form & Injury Prevention',
        paragraphs: [
          "Improper technique is the biggest cause of gym injuries.",
          "A trainer ensures correct movement patterns from day one."
        ],
      },
      {
        heading: 'Motivation & Accountability',
        paragraphs: [
          "A coach keeps you consistent and focused.",
          "This alone can double your long-term success rate."
        ],
      },
    ],
    conclusion: "Personal training accelerates progress by combining guidance, structure, and motivation. Oxygen Gym Matara offers certified trainers ready to elevate your fitness journey."
  }
}

]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit: number = 2): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit)
}