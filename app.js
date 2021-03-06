// create an express app
const express = require("express");
const app = express();
const GSheetReader = require("g-sheets-api");
const helperFuncs = require("./helperFuncs");
const cors = require("cors");

// use the express-static middleware
app.use(express.static("public"));
app.use(cors());

app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// define the first route
app.get("/calendar", function (req, res) {
  const options = {
    sheetId: "1ehQTOwEVI3-g8UNx6oJ34nHJzp8wL2g1PLfTKJ7sKAA",
    sheetNumber: 1,
    returnAllResults: true,
  };
  GSheetReader(
    options,
    (results) => {
      res.json(results);

      // do something with the results here
    },
    (error) => {
      // OPTIONAL: handle errors here
    }
  );
});
app.get("/clubs", function (req, res) {
  const options = {
    sheetId: "1i1BEQL3iehSZiMcL11Xz6g90xz3O7XU7lplrFTiDDH4",
    sheetNumber: 1,
    returnAllResults: true,
  };
  GSheetReader(
    options,
    (results) => {
      res.json(results);
      // do something with the results here
    },
    (error) => {
      // OPTIONAL: handle errors here
    }
  );
});
async function getFbCover(link) {
  let begin = link.indexOf("com");
  let pageName = link.substring(begin + 4);
  if (pageName[pageName.length - 1] === "/") {
    console.log("remove backslash");
    pageName = pageName.substring(0, pageName.length - 1);
  }
  try {
    const photoLink = await helperFuncs.getCoverPhoto(pageName);
    return photoLink;
  } catch (error) {
    console.log(error);
    // if there is an error send a blank link
    return "https://mcdn.wallpapersafari.com/medium/36/29/9hlsuO.png";
  }
}
app.get("/fbcover", async function (req, res) {
  var link = req.query.link;
  let begin = link.indexOf("com");
  let pageName = link.substring(begin + 4);
  if (pageName[pageName.length - 1] === "/") {
    pageName = pageName.substring(0, pageName.length - 1);
    console.log(pageName);
  }
  try {
    const photoLink = await helperFuncs.getCoverPhoto(pageName);
    res.json({ coverPhotoLink: photoLink });
  } catch (error) {
    console.log(error.message);
    // if there is an error send a blank link
    res.json({
      coverPhotoLink:
        "https://mcdn.wallpapersafari.com/medium/36/29/9hlsuO.png",
    });
  }
});

app.get("*", (req, res) => {
  res.json({ message: "how did you land here?" });
});

// start the server listening for requests
app.listen(process.env.PORT || 4000, () => console.log("Server is running..."));
