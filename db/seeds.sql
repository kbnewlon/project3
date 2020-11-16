USE minnesvart_db;

INSERT INTO adventures (name, description, image, longitude, latitude) VALUES (
    "Snoqualmie Falls Trail", "This iconic waterfall is accessible to all! This trail has a unique feature in which there is a parking lot at each side of the trail, and both show off the majesty of Snoqualmie Falls and the Salish Lodge. If you are a fan of Twin Peaks, these falls are featured in the intro on every episode. Here's your chance to see it up close and personal.", "https://media.gettyimages.com/photos/snoqualmie-falls-in-fall-picture-id518674788?k=6&m=518674788&s=612x612&w=0&h=YXLkP9FvORX_5cQ9OrVbFpG_RqF-R3HfX3TLIZlU4Do=", 47.5417, -121.8377
);

INSERT INTO adventure_companies (name, address_1, address_2, city, state, zip_code, phone, email, website, description, image) VALUES ("REI Adventures","222 Yale Ave N","address_2" , "Seattle", "Washington", 98109, 2062231944, "travel@rei.com", "https://www.rei.com/adventures", "Wherever you want to go, whatever you want to get into, we've got a trip that’ll make your dream vacation come true. Visit like a local, explore at your own pace, and eat like a king (or a vegan king, if that's more your thing).", "https://www.rei.com/adventures/assets/adventures/images/trip/core/northamerica/obh_hero");

INSERT INTO company_users (user_name, password, email) VALUES("companyusernameTest", "passwordTest", "companyuser@test.com");

INSERT INTO posts (title, description, image) VALUES("Neah Bay", "Went to Neah Bay because I saw it on this site. Thanks Minnesvart for the reccommendation. I had a great time!", "https://res.cloudinary.com/kaylanewlon/image/upload/v1605425539/kayla_neah_bay_zukt3j.jpg");

INSERT INTO tags(name, description, image) VALUES ("Snowshoeing", "A snowshoe is footwear for walking over snow. Snowshoes work by distributing the weight of the person over a larger area so that the person's foot does not sink completely into the snow, a quality called 'flotation'. Snowshoeing is a form of hiking.","https://res.cloudinary.com/kaylanewlon/image/upload/v1605426083/GOPR0126_yb3vg6.jpg");

-- INSERT INTO users(first_name, last_name, email, username, password, city, state, image, resetPasswordToken, resetPasswordExpires) VALUES ("Kayla", "Newlon", "testuser@email.com", "usernameTest", "Seattle", "Washington","https://res.cloudinary.com/kaylanewlon/image/upload/v1605426391/portfolio_pic_gmwni5.jpg", "123456789" );