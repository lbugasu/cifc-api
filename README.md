# CIFC APIs

### A collection of APIs that power [NYU CIFC](nyucifc.org)

## Available endpoints

### `/clubs`

Returns a json object with clubs data from the Google Doc master spreadsheet
A sample of the json response:

```json
[
  {
    "Name": "[gather]",
    "Tags": "Undergraduate, Graduate, Fellowship, Non-NYU Related",
    "Description": "[gather] is a group of women joined together in rich community, being built up in leaderhsip, and empowered to change the world through events, small gatherings, and resources. ",
    "For Undergraduate or Graduate Students": "Both",
    "Weekly Meeting Time 2020 - 2021": "Monthly Events",
    "Meeting Place": "TBD",
    "Main Contact person": "Lauren Franco (Exec. Dir.) ",
    "Email": "lauren.franco@nyu.edu",
    "Website": "http://www.thegirlswhogather.com",
    "Facebook": "https://www.facebook.com/girlswhogather"
  }
]
```

### `/fbcover`

Returns a link to the image of the cover photo of the facebook page

<br/>

For instance:

```
/fbcover?link=https://www.facebook.com/cknyu
```

returns:

```json
{
  "coverPhotoLink": "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/69486575_2418555171564483_1437348094512463872_o.jpg?_nc_cat=106&ccb=2&_nc_sid=6e5ad9&_nc_ohc=DAZ1pgK8UsYAX_USaaU&_nc_ht=scontent-iad3-1.xx&oh=16418563c2d6259e825ac583b7d1fd9d&oe=6032D52C"
}
```
