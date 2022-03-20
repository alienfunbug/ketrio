


# Process For Updating Main Page With New Character Information
#### `React app hosting data from JJBasket (basketrio) chn servers, making data that is not easily obtainable for NA/SEA users, accessible to all.`

## `Creation process for importing new characters`
- Add the following character detailed info into 'src\data\characterData\characters.json':

    - name/fate/position/featureName/featureDescription/stats/passive/eliteSkill_file_name
    - highlights(youtube ending tag link)
    
- Add character general (position/rating) info to 'src\data\characterData\characterpositions.json'
- Add character ranking image to 'public\assets\images\ranking_images'
- Add character contract/recruitment image to 'public\assets\images\portraits'
- Add character eliteSkill image to 'public\assets\images\char_elite_skills'
    - format: NAME_POSITION_elite_skills.png

## `(OPTIONAL) Updating Main/Landing Page`

- 'pages\LandingPage.js' is static and doesnt need to be updated directly:
    - update respective weekly video gif in 'public\assets\videos\landing_page' weekly.gif file 
        - to update the weekly video LINK, update line 10 on 'src\pages\WeeklyVideoPage.js'
    - update respective main image and meta image in 'public\assets\images\landing_page' lead_char.png file 
    

### `More to be added later`

- Place holder for other relevant information here.
