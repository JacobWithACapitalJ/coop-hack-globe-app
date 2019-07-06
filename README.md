# Safe Spaces
Safe Spaces seeks to assist transgender, intersex, and gender nonconforming individuals in locating safe restroom access by compiling information on gender neutral restroom facilities from sources worldwide.

The project utilised WebGL Globe to visualise geographic data recorded by the [Refuge Restrooms](https://www.refugerestrooms.org) project. 

## Webpage
The data visualisation can be viewed [here](https://thunderbox.herokuapp.com/).

## Getting Started

### Prerequisites
You will need to have NodeJS installed. You will need to have PostgreSQL installed and have a database server running.

### Installation
To set up a development environment for this project, clone this repository and create a knexfile using database name 'thunderbox_location' and your PostgreSQL credentials, if applicable. Then, run:

```
npm install
npm run setup-dbs
npm run seed
npm run dev
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.