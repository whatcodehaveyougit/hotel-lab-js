use hotel;
db.dropDatabase();

db.hotel.insertMany([
  {
    name: "Jimmy",
    email: "jimmy@jimmy.com",
    checkedIn: true
  },
  {
    name: "bobby",
    email: "bobby@jimmy.com",
    checkedIn: false
  }
]);
