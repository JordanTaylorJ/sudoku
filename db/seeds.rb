# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🌱 Seeding spices..."

g1 = Game.create(
    start: [
        [0,0,7,4,9,1,6,0,5],
        [2,0,0,0,6,0,3,0,9],
        [0,0,0,0,0,7,0,1,0],
        [0,5,8,6,0,0,0,0,4],
        [0,0,3,0,0,0,0,9,0],
        [0,0,6,2,0,0,1,8,7],
        [9,0,4,0,7,0,0,0,2],
        [6,7,0,8,3,0,0,0,0],
        [8,1,0,0,4,5,0,0,0]
    ],
    solution: [
        [3,8,7,4,9,1,6,2,5],
        [2,4,1,5,6,8,3,7,9],
        [5,6,9,3,2,7,4,1,8],
        [7,5,8,6,1,9,2,3,4],
        [1,2,3,7,8,4,5,9,6],
        [4,9,6,2,5,3,1,8,7],
        [9,3,4,1,7,6,8,5,2],
        [6,7,5,8,3,2,9,4,1],
        [8,1,2,9,4,5,7,6,3]
    ]
) 

g2 = Game.create(
    start: [
        [0,8,7,4,9,1,6,2,5],
        [2,0,0,5,6,0,3,0,9],
        [5,6,9,3,0,7,0,1,0],
        [0,5,8,6,0,9,0,0,4],
        [0,0,3,0,0,4,0,9,0],
        [0,0,6,2,0,3,1,8,7],
        [9,0,4,0,7,6,0,0,2],
        [6,7,0,8,3,2,9,4,1],
        [8,1,0,0,4,5,0,6,0]
    ],
    solution: [
        [3,8,7,4,9,1,6,2,5],
        [2,4,1,5,6,8,3,7,9],
        [5,6,9,3,2,7,4,1,8],
        [7,5,8,6,1,9,2,3,4],
        [1,2,3,7,8,4,5,9,6],
        [4,9,6,2,5,3,1,8,7],
        [9,3,4,1,7,6,8,5,2],
        [6,7,5,8,3,2,9,4,1],
        [8,1,2,9,4,5,7,6,3]
    ]
) 

u1 = User.create(
    username: "John",
    password: "beatles"
)

u2 = User.create(
    username: "Paul",
    password: "beatles"
)

s1 = Score.create(mistakes: '13', user_id: u1.id, game_id: g2.id)
s2 = Score.create(mistakes: '4', user_id: u2.id, game_id: g2.id)
s3 = Score.create(mistakes: '6', user_id: u1.id, game_id: g1.id)
s4 = Score.create(mistakes: '1', user_id: u2.id, game_id: g1.id)


puts "✅ Done seeding!"