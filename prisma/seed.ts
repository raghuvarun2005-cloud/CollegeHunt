import { PrismaClient }
from "@prisma/client";

const prisma =
  new PrismaClient();

async function main() {

  // Delete old data

  await prisma.review.deleteMany();

  await prisma.admissionCutoff.deleteMany();

  await prisma.placementStat.deleteMany();

  await prisma.courseFee.deleteMany();

  await prisma.stream.deleteMany();

  await prisma.college.deleteMany();

  // Colleges

  const colleges = [

    {
      name: "IIT Hyderabad",
      city: "Hyderabad",
      state: "Telangana",
      type: "Government",
      nirf_rank: 8,
      established: 2008,
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585",
      rating: 4.8,
      placements: "95",
    },

    {
      name: "NIT Warangal",
      city: "Warangal",
      state: "Telangana",
      type: "Government",
      nirf_rank: 21,
      established: 1959,
      image:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a",
      rating: 4.6,
      placements: "92",
    },

    {
      name: "IIIT Hyderabad",
      city: "Hyderabad",
      state: "Telangana",
      type: "Private",
      nirf_rank: 12,
      established: 1998,
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
      rating: 4.9,
      placements: "98",
    },

    {
      name: "BITS Pilani",
      city: "Pilani",
      state: "Rajasthan",
      type: "Private",
      nirf_rank: 25,
      established: 1964,
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      rating: 4.7,
      placements: "93",
    },

    {
      name: "VIT Vellore",
      city: "Vellore",
      state: "Tamil Nadu",
      type: "Private",
      nirf_rank: 17,
      established: 1984,
      image:
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b",
      rating: 4.5,
      placements: "90",
    },

  ];

  // Create 15 colleges

  for (let i = 0; i < 3; i++) {

    for (const item of colleges) {

      const college =
        await prisma.college.create({

        data: {

          ...item,

          streams: {

            create: [

              {
                name: "Engineering",
              },

            ],

          },

          courseFees: {

            create: [

              {
                course: "Computer Science",
                degree: "B.Tech",
                annual_fee: 250000,
              },

              {
                course: "Electronics",
                degree: "B.Tech",
                annual_fee: 220000,
              },

            ],

          },

          placementStats: {

            create: [

              {
                year: 2024,
                avg_package: 18,
                highest_package: 60,
                placement_percent: 95,
                top_recruiters: [
                  "Google",
                  "Microsoft",
                  "Amazon",
                ],
              },

            ],

          },

          admissionCutoffs: {

            create: [

              {
                exam: "JEE",
                year: 2024,
                category: "GENERAL",
                cutoff_value: 95,
              },

            ],

          },

          reviews: {

            create: [

              {
                studentName: "Rahul",
                rating: 5,
                comment:
                  "Excellent campus and placements.",
              },

            ],

          },

        },

      });

      console.log(
        `Created ${college.name}`
      );

    }

  }

}

main()

  .then(async () => {

    await prisma.$disconnect();

  })

  .catch(async (e) => {

    console.error(e);

    await prisma.$disconnect();

    process.exit(1);

  });